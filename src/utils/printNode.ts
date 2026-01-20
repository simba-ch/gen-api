import ts from "typescript";

const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

/**
 * 打印TypeScript语法树节点
 * 
 * @param node - 要打印的TypeScript语法树节点
 * @param sourceFile - 包含该节点的源文件对象
 * @returns 打印后的节点代码字符串
 */
export function printNode(node: ts.Node, sourceFile: ts.SourceFile) {
    return printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
}