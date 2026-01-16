import openapiTS from "openapi-typescript";
import env from "dotenv";
import { writeNodesToFile } from "./utils/writeNodesToFile.ts";
import { extractSchemasAsInterfaces } from "./core/extractSchemasAsInterfaces.ts";
import { generateSchemasFromTypes } from "./core/generateSchemasFromTypes.ts";

env.config();

let url = process.env.URL!;
url = process.env.HR_URL!;
const api = await openapiTS(url);
// writeNodesToFile(api, "./openapi-ts/types-hr.ts");
// extractSchemasAsInterfaces(api, "src/api/schemas-hr.ts");
generateSchemasFromTypes("./api/schemas-hr1.ts", "../openapi-ts/types-hr.ts");
