import openapiTS from "openapi-typescript";
import { loadOpenAPI } from "./loadOpenAPI.ts";
import dotenv from "dotenv";
import fs from "node:fs/promises";
import { safeStringify } from "../utils/safeStringify.ts";
import { generateInterfacesFromSchemas } from "../utils/generateInterfaces.ts";
import path from "node:path";

dotenv.config();

const url = process.env.URL as string;

const { normalized, parserReady } = await loadOpenAPI(url);

// 生成parserReadyJSON文件，用于调试
// const json = safeStringify(parserReady);
// await fs.writeFile("debug/parserReady.json", json, "utf-8");


// 生成types.ts文件，用于类型提示
// const types = await openapiTS(normalized);
// const code = printNodes(types);
// const outFile = path.resolve("src/api/types.ts");
// await fs.mkdir(path.dirname(outFile), { recursive: true });
// await fs.writeFile(outFile, code, "utf-8");


// 生成types.d.ts文件，用于类型提示
const schemas = normalized.components?.schemas ?? {};
const code = generateInterfacesFromSchemas(schemas);
const outFile = path.resolve("src/api/schemas.ts");
await fs.mkdir(path.dirname(outFile), { recursive: true });
await fs.writeFile(outFile, code, "utf-8");