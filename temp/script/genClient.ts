import { toInlinePathsInterface } from "@core/client/toInlinePathsInterface.ts";
import { parseOpenapi } from "@core/parseOpenapi/index.ts";
import { pathToFileURL } from "node:url";

// 解析 OpenAPI 文件并生成 TypeScript 类型定义文件
const fileName = pathToFileURL("./temp/origin/superHR.openapi.json").href;

// 生成接口ast
await parseOpenapi(fileName);

await toInlinePathsInterface();