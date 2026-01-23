import { parseOpenapi } from "@core/parseOpenapi/index.ts";
import { genOriginTypesFile } from "@utils/genOriginTypesFile.ts";
import { pathToFileURL } from "url";

const filePath = pathToFileURL("./temp/origin/todolist.openapi.json").href;
await parseOpenapi(filePath);
genOriginTypesFile(filePath);
