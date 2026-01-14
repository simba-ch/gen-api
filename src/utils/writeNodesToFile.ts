import ts from "typescript";
import fs from "fs/promises";
import path from "path";

/**
 * 将 TypeScript AST 节点数组写入指定文件
 * @param nodes ts.Node[]
 * @param filePath 输出文件路径
 */
export async function writeNodesToFile(nodes: ts.Node[], filePath: string) {
  // 创建打印器
  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.LineFeed,
  });

  // 将节点打印为字符串
  const code = nodes
    .map((node) => printer.printNode(ts.EmitHint.Unspecified, node, node.getSourceFile() || ts.createSourceFile("", "", ts.ScriptTarget.Latest)))
    .join("\n");

  // 确保目录存在
  await fs.mkdir(path.dirname(filePath), { recursive: true });

  // 写入文件
  await fs.writeFile(filePath, code, "utf-8");

  console.log(`✅ 已写入 ${filePath}`);
}
