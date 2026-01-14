import fs from "node:fs/promises";
import path from "node:path";
import yaml from "yaml";
import SwaggerParser from "@apidevtools/swagger-parser";

function isURL(input: string) {
  return /^https?:\/\//i.test(input);
}

function isYamlFile(file: string) {
  return /\.(ya?ml)$/i.test(file);
}

function isJsonFile(file: string) {
  return /\.json$/i.test(file);
}

async function readOpenAPISource(input: string): Promise<any> {
  if (isURL(input)) {
    const res = await fetch(input);
    if (!res.ok) {
      throw new Error(`Failed to fetch OpenAPI: ${res.status}`);
    }
    return res.json();
  }

  const absPath = path.resolve(input);
  const content = await fs.readFile(absPath, "utf-8");

  if (isYamlFile(input)) {
    return yaml.parse(content);
  }

  if (isJsonFile(input)) {
    return JSON.parse(content);
  }

  throw new Error(`Unsupported OpenAPI input: ${input}`);
}

function normalizeOpenAPI(doc: any): any {
  const normalized = structuredClone(doc);

  // 1️⃣ 确保 openapi 版本存在
  if (!normalized.openapi && normalized.swagger) {
    normalized.openapi = "3.0.0";
  }

  // 2️⃣ 确保 components 存在
  normalized.components ??= {};
  normalized.components.schemas ??= {};

  // 3️⃣ 兜底 paths
  normalized.paths ??= {};

  // 4️⃣ 防御性修复：非法 $ref（核心）
  fixInvalidRefs(normalized);

  return normalized;
}

function fixInvalidRefs(obj: any) {
  if (Array.isArray(obj)) {
    obj.forEach(fixInvalidRefs);
    return;
  }

  if (!obj || typeof obj !== "object") return;

  for (const key of Object.keys(obj)) {
    const value = obj[key];

    if (
      key === "$ref" &&
      typeof value === "string" &&
      isURL(value) &&
      !value.includes("#/")
    ) {
      // 🚨 非法 ref：指向整个文档
      // 策略：直接删除，让 schema inline
      delete obj.$ref;
      continue;
    }

    fixInvalidRefs(value);
  }
}

async function makeParserReady(doc: any, dereference = false) {
  if (dereference) {
    return SwaggerParser.dereference(doc);
  }
  return SwaggerParser.bundle(doc);
}

type OpenAPIInput = string; // url 或 文件路径

interface LoadOpenAPIResult {
  raw: any; // 原始解析后的对象
  normalized: any; // 规范化后的 OpenAPI（你后面都用这个）
  parserReady: any; // 可安全交给 swagger-parser 的版本
}

export async function loadOpenAPI(
  input: OpenAPIInput,
  options?: {
    normalize?: boolean;
    dereference?: boolean;
  }
): Promise<LoadOpenAPIResult> {
  const raw = await readOpenAPISource(input);

  const normalized = options?.normalize === false ? raw : normalizeOpenAPI(raw);

  const parserReady = await makeParserReady(normalized, options?.dereference);

  return {
    raw,
    normalized,
    parserReady,
  };
}
