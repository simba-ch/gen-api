import { parseArgs } from "node:util";
import openapiTS from "openapi-typescript";
import { extractSchemasAsInterfaces } from "../src/core/extractSchemasAsInterfaces.ts";

console.log("Hello, World!");

const { values } = parseArgs({
  options: {
    output: {
      type: "string",
      short: "o",
    },
    url: {
      type: "string",
      short: "u",
    },
  },
});

const { output, url } = values;
if (!url) {
  throw new Error("URL is required");
}
if (!output) {
  throw new Error("Output file path is required");
}
const api = await openapiTS(url);
extractSchemasAsInterfaces(api, output);
