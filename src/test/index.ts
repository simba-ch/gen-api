import fs from "fs";
import { generateEndpoints } from "../core/genRequest/generateEndpoints.ts";
import path from "path";
const cwd = process.cwd();
const raw = fs.readFileSync(
  path.resolve(cwd, "./debug/origin/superHR.openapi.json"),
  "utf-8"
);
const document = JSON.parse(raw);

generateEndpoints(document);
// import type * as Types from "../api/schemas-hr1";

const OUTPUT_DIR = path.resolve(process.cwd(), "./src/generated");
const TYPES_IMPORT_PATH = "../core/genRequest/types";
const CLIENT_IMPORT_PATH = "../core/genRequest/client";
const CORE_IMPORT_PATH = "../core/genRequest";