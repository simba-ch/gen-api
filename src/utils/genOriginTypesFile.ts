import openapiTS from "openapi-typescript";
import ts from "typescript";
import { createSourceFile, printNode } from "./tsOperator.ts";
import { writeFile } from "./writeFile.ts";
import { pathsInterface } from "@core/parseOpenapi/index.ts";
import { toInlinePathsInterface } from "@core/client/toInlinePathsInterface.ts";

export async function genOriginTypesFile(originUrl: string) {
  const api = await openapiTS(originUrl);
  const oldPathsinterfaceIndex = api.findIndex(
    (node) => ts.isInterfaceDeclaration(node) && node.name.text === "paths",
  );
  await toInlinePathsInterface();

  if (oldPathsinterfaceIndex !== -1 && pathsInterface) {
    api[oldPathsinterfaceIndex] = pathsInterface;
  }
  const sf = createSourceFile("gen-types.ts");
  const code = api
    .map((node) => printNode(node, node.getSourceFile() || sf))
    .join("\n");

  writeFile("./src/gen/types/origin-types.ts", code);
}
