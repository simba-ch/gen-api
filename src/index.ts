import openapiTS from "openapi-typescript";
import env from "dotenv";
import { writeNodesToFile } from "./utils/writeNodesToFile.ts";
import { extractSchemasAsInterfaces } from "./utils/extractSchemasAsInterfaces.ts";
env.config();




// const url = process.env.URL as string;
const url = process.env.HR_URL as string;
const api = await openapiTS(url);
// writeNodesToFile(api, "src/api/types.ts");
extractSchemasAsInterfaces(api, "src/api/schemas.ts");
