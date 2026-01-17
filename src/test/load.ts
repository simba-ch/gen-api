import fs from "node:fs";
import openapiTS, { astToString } from "openapi-typescript";
import env from "dotenv";
env.config();
const url = process.env.HR_URL!;
const ast = await openapiTS(url);
const contents = astToString(ast);

// （可选）写入文件
fs.writeFileSync("./temp/my-schema.ts", contents);
