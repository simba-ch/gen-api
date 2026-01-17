// core/generateEndpoints.ts

/**
 * 自动生成 endpoints 与 operations 类型文件
 *
 * 功能：
 * - 遍历 OpenAPI paths
 * - 提取每个 operation 的 request/body/query/header/response 类型
 * - 生成 operations.ts：包含 GeneratedOperations 接口
 * - 生成每个 controller 对应的 API 文件：调用 client.request 的函数集合
 * - 统一 operationId fallback、controller → ApiName 映射
 *
 * 用途：
 * - 从 OpenAPI 文档直接生成可用的 TS API 文件
 * - endpoints 层完全类型化，调用 client 时有类型提示
 */
import fs from "fs";
import path from "path";
import type { OpenAPIV3 } from "openapi-types";

/* ---------------------------------- */
/* 配置 */
/* ---------------------------------- */
const OUTPUT_DIR = path.resolve(process.cwd(), "./src/generated");
const TYPES_IMPORT_PATH = "../core/genRequest/types";
const CLIENT_IMPORT_PATH = "../core/genRequest/client";
const CORE_IMPORT_PATH = "../core/genRequest";

/* ---------------------------------- */
/* 工具函数 */
/* ---------------------------------- */
const pascalToCamel = (name: string) => name.charAt(0).toLowerCase() + name.slice(1);
const controllerToApiName = (controller: string) =>
  pascalToCamel(controller.replace(/Controller$/, "") + "Api");
const extractController = (operationId: string) => operationId.split("_")[0];
const extractMethodName = (operationId: string) => operationId.split("_")[1] || operationId;
const refToType = (ref: string) => ref.replace("#/components/schemas/", "");
const generateFallbackOperationId = (method: string, path: string) =>
  method +
  "_" +
  path
    .replace(/[{}]/g, "")
    .split("/")
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");

/* ---------------------------------- */
/* inline operation 解析 */
/* ---------------------------------- */
function extractInlineOperation(operation: OpenAPIV3.OperationObject) {
  const req: { body?: string; headers?: Record<string, true>; query?: Record<string, true> } = {};
  let res: string | undefined;

  if (operation.parameters) {
    for (const p of operation.parameters as OpenAPIV3.ParameterObject[]) {
      if (p.in === "header") req.headers ??= {}, (req.headers[p.name] = true);
      if (p.in === "query") req.query ??= {}, (req.query[p.name] = true);
    }
  }

  const jsonBody =
    operation.requestBody &&
    (operation.requestBody as OpenAPIV3.RequestBodyObject).content?.["application/json"]?.schema;
  if (jsonBody && "$ref" in jsonBody) req.body = refToType(jsonBody.$ref);

  const jsonRes = operation.responses?.["200"]?.content?.["application/json"]?.schema;
  if (jsonRes && "$ref" in jsonRes) res = refToType(jsonRes.$ref);

  return { req, res };
}

/* ---------------------------------- */
/* 生成 operations.ts */
/* ---------------------------------- */
function generateOperationsFile(document: OpenAPIV3.Document) {
  const lines: string[] = [];
  lines.push(`import type { GeneratedOperation } from "${CORE_IMPORT_PATH}/operation";`);
  lines.push(`import type * as Types from "${TYPES_IMPORT_PATH}";`);
  lines.push(``);
  lines.push(`export interface GeneratedOperations {`);

  if (!document.paths) {
    lines.push(`}`);
    return lines.join("\n");
  }

  for (const pathKey of Object.keys(document.paths)) {
    const pathItem = document.paths[pathKey];
    if (!pathItem) continue;

    for (const method of Object.keys(pathItem) as (keyof OpenAPIV3.PathItemObject)[]) {
      if (method === "parameters") continue;
      const operation = (pathItem as any)[method] as OpenAPIV3.OperationObject;
      if (!operation) continue;

      const operationId = operation.operationId ?? generateFallbackOperationId(method, pathKey);
      const { req, res } = extractInlineOperation(operation);

      const props: string[] = [];
      if (req.body) props.push(`body: Types.${req.body},`);
      if (req.query)
        props.push(
          `query?: { ${Object.keys(req.query)
            .map((k) => `${k}?: unknown`)
            .join("; ")} },`
        );
      if (req.headers)
        props.push(
          `headers?: { ${Object.keys(req.headers)
            .map((k) => `${k}?: string`)
            .join("; ")} },`
        );

      lines.push(`  "${operationId}": GeneratedOperation<{ ${props.join(" ")} }, ${res ? `Types.${res}` : "unknown"}>;`);
    }
  }

  lines.push(`}`);
  return lines.join("\n");
}

/* ---------------------------------- */
/* 生成单个 api 文件 */
/* ---------------------------------- */
function generateApiFile(
  apiName: string,
  endpoints: { fnName: string; method: string; path: string; operationId: string }[]
) {
  return `import { client } from "${CLIENT_IMPORT_PATH}";
import type { OperationParams, OperationResponse } from "${CORE_IMPORT_PATH}/types";
import type { GeneratedOperations } from "./operations";

export const ${apiName} = {
${endpoints
  .map(
    (e) => `  ${e.fnName}(params: OperationParams<GeneratedOperations["${e.operationId}"]>): OperationResponse<GeneratedOperations["${e.operationId}"]> {
    return client.request("${e.path}", "${e.method}", params);
  }`
  )
  .join(",\n")}
};
`;
}

/* ---------------------------------- */
/* 主生成函数 */
/* ---------------------------------- */
export function generateEndpoints(document: OpenAPIV3.Document) {
  if (!document.paths) return;

  const groups: Record<string, { fnName: string; method: string; path: string; operationId: string }[]> = {};

  for (const pathKey of Object.keys(document.paths)) {
    const pathItem = document.paths[pathKey];
    if (!pathItem) continue;

    for (const method of Object.keys(pathItem) as (keyof OpenAPIV3.PathItemObject)[]) {
      if (method === "parameters") continue;
      const operation = (pathItem as any)[method] as OpenAPIV3.OperationObject;
      if (!operation) continue;

      const operationId = operation.operationId ?? generateFallbackOperationId(method, pathKey);
      const controller = extractController(operationId);
      const fnName = extractMethodName(operationId);

      groups[controller] ??= [];
      groups[controller].push({ fnName, method, path: pathKey, operationId });
    }
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // ① operations.ts
  fs.writeFileSync(path.join(OUTPUT_DIR, "operations.ts"), generateOperationsFile(document), "utf-8");

  // ② api 文件
  for (const controller of Object.keys(groups)) {
    const apiName = controllerToApiName(controller);
    fs.writeFileSync(path.join(OUTPUT_DIR, `${apiName}.ts`), generateApiFile(apiName, groups[controller]), "utf-8");
  }

  console.log(`✅ API & operations generated at: ${OUTPUT_DIR}`);
}
