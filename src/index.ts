import openapiTS from "openapi-typescript";
import env from "dotenv";
import { writeNodesToFile } from "./utils/writeNodesToFile.ts";
import { extractSchemasAsInterfaces } from "./core/extractSchemasAsInterfaces.ts";
import { generateSchemasFromTypes } from "./core/generateSchemasFromTypes.ts";
import path from "node:path";
import { fileURLToPath } from "node:url";
env.config();

let url = process.env.URL!;
url = process.env.HR_URL!;

// const api = await openapiTS(url);

// writeNodesToFile(api, "./openapi-ts/types-hr.ts");

// extractSchemasAsInterfaces(api, "src/api/schemas-hr.ts");

// generateSchemasFromTypes(
//   path.resolve(
//     path.dirname(fileURLToPath(import.meta.url)),
//     "./api/schemas-hr2.ts"
//   )
// );
