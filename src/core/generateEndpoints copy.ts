import fs from "fs";
import path from "path";
import type { OpenAPIV3 } from "openapi-types";

/* ---------------------------------- */
/* 配置 */
/* ---------------------------------- */

const OUTPUT_DIR = path.resolve(process.cwd(), "./src/generated");
const TYPES_IMPORT_PATH = "../types";
const CLIENT_IMPORT_PATH = "../client";

/* ---------------------------------- */
/* 工具函数 */
/* ---------------------------------- */

function pascalToCamel(name: string) {
  return name.charAt(0).toLowerCase() + name.slice(1);
}

function controllerToApiName(controller: string) {
  return pascalToCamel(controller.replace(/Controller$/, "") + "Api");
}

function extractController(operationId: string) {
  return operationId.split("_")[0];
}

function extractMethodName(operationId: string) {
  return operationId.split("_")[1] || operationId;
}

/* ---------------------------------- */
/* 主生成函数 */
/* ---------------------------------- */


export function generateEndpoints(document: OpenAPIV3.Document) {
  if (!document.paths) return;

  const groups: Record<
    string,
    {
      fnName: string;
      method: string;
      path: string;
      operationId: string;
    }[]
  > = {};

  for (const pathKey of Object.keys(document.paths)) {
    const pathItem = document.paths[pathKey];
    if (!pathItem) continue;

    for (const method of Object.keys(
      pathItem
    ) as (keyof OpenAPIV3.PathItemObject)[]) {
      if (method === "parameters") continue;

      const operation = (pathItem as any)[method] as OpenAPIV3.OperationObject;
      if (!operation || !operation.operationId) continue;

      const controller = extractController(operation.operationId);
      const fnName = extractMethodName(operation.operationId);

      groups[controller] ??= [];
      groups[controller].push({
        fnName,
        method,
        path: pathKey,
        operationId: operation.operationId,
      });
    }
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  for (const controller of Object.keys(groups)) {
    const apiName = controllerToApiName(controller);
    const filePath = path.join(OUTPUT_DIR, `${apiName}.ts`);

    const content = generateApiFile(apiName, groups[controller]);

    fs.writeFileSync(filePath, content, "utf-8");
  }

  console.log(
    `API endpoints generated successfully. Check the '${OUTPUT_DIR}' directory.`
  );
}

/* ---------------------------------- */
/* 单文件生成 */
/* ---------------------------------- */

function generateApiFile(
  apiName: string,
  endpoints: {
    fnName: string;
    method: string;
    path: string;
    operationId: string;
  }[]
) {
  return `\
import { client } from "${CLIENT_IMPORT_PATH}";
import type { OperationParams } from "../core/types";
import type { operations } from "${TYPES_IMPORT_PATH}";

export const ${apiName} = {
${endpoints
  .map(
    (e) => `\
  ${e.fnName}(
    params: OperationParams<operations["${e.operationId}"]>
  ) {
    return client.request(
      "${e.path}",
      "${e.method}",
      params
    );
  }`
  )
  .join(",\n\n")}
};
`;
}
