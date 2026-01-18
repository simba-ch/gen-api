import openapiTS from "openapi-typescript";
import env from "dotenv";
import { extractSchemasAsInterfaces } from "@core/extractSchemasAsInterfaces.ts";
import { generateSchemasFromTypes } from "@core/generateSchemasFromTypes.ts";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { writeNodesToFile } from "scripts/writeNodesToFile.ts";

env.config();

let url = process.env.URL!;
url = process.env.HR_URL!;
url = pathToFileURL("./temp/origin/superHR.openapi.json").href;
const api = await openapiTS(url);

writeNodesToFile(api, "./temp/types/superHR.openapi.ts");

// extractSchemasAsInterfaces(api, "src/api/schemas-hr.ts");

// generateSchemasFromTypes(
//   path.resolve(
//     path.dirname(fileURLToPath(import.meta.url)),
//     "./api/schemas-hr2.ts",
//   ),
// );
