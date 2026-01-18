import openapiTS from "openapi-typescript";
import type { OpenAPITSOptions } from "openapi-typescript";
import type { OpenAPISource } from "../../types/index.d.ts";
import ts from "typescript";

let pathsInterface: ts.Node | undefined;
let componentsInterface: ts.Node | undefined;
let operationsInterface: ts.Node | undefined;

export async function parseOpenapi(
  source: OpenAPISource,
  options?: OpenAPITSOptions,
) {
  const ast = await openapiTS(source, options);

  ast.forEach((node) => {
    if (ts.isInterfaceDeclaration(node)) {
      const name = node.name.text;
      if (name === "paths") pathsInterface = node;
      if (name === "components") componentsInterface = node;
      if (name === "operations") operationsInterface = node;
    }
  });
}

const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

export function printNode(node: ts.Node, sourceFile: ts.SourceFile) {
  return printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
}

export {
  pathsInterface,
  componentsInterface,
  operationsInterface,
};
