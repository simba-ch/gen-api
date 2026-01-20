  import { generateTypes } from "@core/genTypes/index.ts";
import { componentsInterface, parseOpenapi } from "@core/parseOpenapi/index.ts";
import { pathToFileURL } from "node:url";
const fileName = pathToFileURL("./temp/origin/superHR.openapi.json").href;

await parseOpenapi(fileName);

componentsInterface && generateTypes(componentsInterface, './temp/types/superHR-types.ts');
