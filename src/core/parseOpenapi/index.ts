import openapiTS from "openapi-typescript";
import type { OpenAPITSOptions } from "openapi-typescript";
import type { OpenAPISource } from "@shared-types/index.ts";
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



export {
    pathsInterface,
    componentsInterface,
    operationsInterface,
};
