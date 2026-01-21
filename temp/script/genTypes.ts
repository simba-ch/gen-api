import { generateTypes } from "@core/genTypes/index.ts";
import { parseOpenapi } from "@core/parseOpenapi/index.ts";
import { pathToFileURL } from "node:url";

// 解析 OpenAPI 文件并生成 TypeScript 类型定义文件
const fileName = pathToFileURL("./temp/origin/todolist.openapi.json").href;

await parseOpenapi(fileName);

await generateTypes({
  typesOutputPath: "./temp/types/todolist-types.ts",
});
