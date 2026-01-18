import { printNode } from "@/utils/printNode.ts";
import { generateTypes } from "@core/genTypes/index.ts";
import { componentsInterface, parseOpenapi } from "@utils/parseOpenapi.ts";
import { pathToFileURL } from "node:url";
import ts from "typescript";
const fileName = pathToFileURL("./temp/origin/superHR.openapi.json").href;

await parseOpenapi(fileName);


// ast.forEach((node, i) => {
//     printNode(node, `./temp/types/componentsInterface_${i + 1}.ts`)
// })
// // for (let i = 0; i < ast.length; i++) {
// //     await printNode(ast[i], `./temp/types/componentsInterface_${i + 1}.ts`)

// // }

componentsInterface && generateTypes(componentsInterface as ts.InterfaceDeclaration, './temp/types/superHR-types.ts');
// componentsInterface && printNode(componentsInterface, `./temp/types/componentsInterface_1.ts`)
