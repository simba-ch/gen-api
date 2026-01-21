import openapiTS from "openapi-typescript";
import type { OpenAPITSOptions } from "openapi-typescript";
import type { OpenAPISource } from "@shared-types/index.ts";
import ts from "typescript";
let pathsInterface: ts.InterfaceDeclaration | undefined;
let componentsInterface: ts.InterfaceDeclaration | undefined;
let operationsInterface: ts.InterfaceDeclaration | undefined;

export async function parseOpenapi(
  source: OpenAPISource,
  options?: OpenAPITSOptions,
) {
  const ast = await openapiTS(source, options);

  ast.forEach((node) => {
    if (ts.isInterfaceDeclaration(node)) {
      const name = node.name.text;
      switch (name) {
        case "paths":
          pathsInterface = node;
          break;
        case "components":
          componentsInterface = node;
          break;
        case "operations":
          operationsInterface = node;
          break;
      }
    }
  });
}

export { pathsInterface, componentsInterface, operationsInterface };

export function setPathsInterface(
  newInterface: ts.InterfaceDeclaration | undefined,
) {
  pathsInterface = newInterface;
}

export function setComponentsInterface(
  newInterface: ts.InterfaceDeclaration | undefined,
) {
  componentsInterface = newInterface;
}
export function setOperationsInterface(
  newInterface: ts.InterfaceDeclaration | undefined,
) {
  operationsInterface = newInterface;
}
