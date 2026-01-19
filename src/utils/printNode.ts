import ts from "typescript";

const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

export function printNode(node: ts.Node, sourceFile: ts.SourceFile) {
    return printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
}