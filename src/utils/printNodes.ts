import ts from "typescript";

function printNodes(nodes: ts.Node[]): string {
  const sourceFile = ts.createSourceFile(
    "types.ts",
    "",
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  );

  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  return nodes
    .map((node) => printer.printNode(ts.EmitHint.Unspecified, node, sourceFile))
    .join("\n\n");
}

export { printNodes };
