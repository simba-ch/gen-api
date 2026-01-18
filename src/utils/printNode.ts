import ts from "typescript";
import fs from "fs/promises";
import path from "path";
// 创建 printer
const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });


export async function printNode(node: ts.Node, fileName: string) {
    const result = printer.printNode(ts.EmitHint.Unspecified, node, ts.createSourceFile(
        'print_node.ts', // 虚拟文件名
        "",
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TS
    ));
    // await fs.mkdir(path.dirname(fileName), { recursive: true });
    await fs.writeFile(fileName, result, "utf-8");
    console.log(`print_node.ts 已写入 ${fileName}文件`);
}