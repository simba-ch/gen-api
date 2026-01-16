import ts from "typescript";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const processPath = fileURLToPath(process.argv[1]);
console.log("🚀 ~ processPath:", processPath)
// types 文件路径
const TYPES_FILE = "../../openapi-ts/types.ts";

// ------------------- 工具函数 -------------------

// 将原始 schema 名称转换成合法 TS interface 名称
function toSafeInterfaceName(name: string) {
  let safe = name.replace(/\?$/, "Optional").replace(/[^\w$]/g, "_");
  if (/^\d/.test(safe)) safe = `Safe_Schema_${safe}`;
  return safe;
}

// 获取 schema 成员原始名称（支持 Identifier、StringLiteral、NumericLiteral）
function getSchemaName(member: ts.TypeElement): string | null {
  if (!ts.isPropertySignature(member)) return null;
  if (ts.isIdentifier(member.name)) return member.name.text;
  if (ts.isStringLiteral(member.name)) return member.name.text;
  if (ts.isNumericLiteral(member.name)) return member.name.text;
  return null;
}

// 提取多级 IndexedAccess 最终 schema 名称，例如 components["schemas"]["Page?"]["records"] -> Page?
function extractSchemaNameFromIndexedAccessRecursive(
  node: ts.TypeNode
): string | null {
  if (!ts.isIndexedAccessTypeNode(node)) return null;

  let current: ts.TypeNode = node;
  const names: string[] = [];

  while (ts.isIndexedAccessTypeNode(current)) {
    if (
      ts.isLiteralTypeNode(current.indexType) &&
      ts.isStringLiteral(current.indexType.literal)
    ) {
      names.unshift(current.indexType.literal.text);
    }
    current = current.objectType;
  }

  if (
    ts.isTypeReferenceNode(current) &&
    ts.isIdentifier(current.typeName) &&
    current.typeName.text === "components" &&
    names[0] === "schemas" &&
    names[1]
  ) {
    return names[1];
  }

  return null;
}

// ------------------- 主函数 -------------------

export async function generateSchemasFromTypes(
  outputFile: string,
  typesFilePath: string = TYPES_FILE
) {
  const typesFile = path.resolve(processPath, typesFilePath);
  const output = path.resolve(processPath, outputFile);
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  // 1️⃣ 解析 types.ts 文件
  const program = ts.createProgram([typesFile], {
    target: ts.ScriptTarget.Latest,
    module: ts.ModuleKind.ESNext,
  });

  const sourceFile = program.getSourceFile(typesFile);
  if (!sourceFile) throw new Error(`❌ 找不到 ${typesFile} 文件`);

  const checker = program.getTypeChecker();

  // 2️⃣ 找到 export interface components
  const componentsNode = sourceFile.statements.find(
    (node) => ts.isInterfaceDeclaration(node) && node.name.text === "components"
  ) as ts.InterfaceDeclaration | undefined;

  if (!componentsNode) throw new Error("❌ 找不到 components interface");

  // 3️⃣ 找到 schemas 属性
  const schemasProp = componentsNode.members.find(
    (member) =>
      ts.isPropertySignature(member) &&
      ts.isIdentifier(member.name) &&
      member.name.text === "schemas"
  ) as ts.PropertySignature | undefined;

  if (
    !schemasProp ||
    !schemasProp.type ||
    !ts.isTypeLiteralNode(schemasProp.type)
  ) {
    throw new Error("❌ 找不到 schemas 属性或类型不合法");
  }

  const schemasType = schemasProp.type;

  // schema 名称映射表
  const schemaNameMap = new Map<string, string>();
  schemasType.members.forEach((member) => {
    const origName = getSchemaName(member);
    if (origName) schemaNameMap.set(origName, toSafeInterfaceName(origName));
  });

  const allInterfaces: string[] = [];

  // 递归替换循环引用
  function replaceType(node: ts.TypeNode): ts.TypeNode {
    if (ts.isTypeReferenceNode(node)) {
      if (ts.isIndexedAccessTypeNode(node.typeName)) {
        const name = extractSchemaNameFromIndexedAccessRecursive(node.typeName);
        if (name && schemaNameMap.has(name)) {
          return ts.factory.createTypeReferenceNode(schemaNameMap.get(name)!);
        }
      }
    } else if (ts.isArrayTypeNode(node)) {
      return ts.factory.updateArrayTypeNode(
        node,
        replaceType(node.elementType)
      );
    } else if (ts.isUnionTypeNode(node)) {
      return ts.factory.updateUnionTypeNode(
        node,
        ts.factory.createNodeArray(node.types.map(replaceType))
      );
    } else if (ts.isIntersectionTypeNode(node)) {
      return ts.factory.updateIntersectionTypeNode(
        node,
        ts.factory.createNodeArray(node.types.map(replaceType))
      );
    } else if (ts.isIndexedAccessTypeNode(node)) {
      const name = extractSchemaNameFromIndexedAccessRecursive(node);
      if (name && schemaNameMap.has(name))
        return ts.factory.createTypeReferenceNode(schemaNameMap.get(name)!);
    }
    return node;
  }

  // 遍历每个 schema 生成 interface
  schemasType.members.forEach((member) => {
    const origName = getSchemaName(member);
    if (!origName) return;
    const safeName = schemaNameMap.get(origName)!;
    if (!ts.isPropertySignature(member) || !member.type) return;

    let interfaceDecl: ts.InterfaceDeclaration;

    if (ts.isTypeLiteralNode(member.type)) {
      // 对象类型
      const newMembers = member.type.members.map((m) => {
        if (ts.isPropertySignature(m) && m.type) {
          return ts.factory.updatePropertySignature(
            m,
            m.modifiers,
            m.name,
            m.questionToken,
            replaceType(m.type)
          );
        }
        return m;
      });
      interfaceDecl = ts.factory.createInterfaceDeclaration(
        [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        safeName,
        undefined,
        undefined,
        newMembers
      );
      ts.addSyntheticLeadingComment(
        interfaceDecl,
        ts.SyntaxKind.MultiLineCommentTrivia,
        `* 原始 schema 名称: "${origName}"`,
        true
      );
    } else {
      // 非对象类型（Record, string, number, etc.） → 空接口
      interfaceDecl = ts.factory.createInterfaceDeclaration(
        [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        safeName,
        undefined,
        undefined,
        []
      );
      ts.addSyntheticLeadingComment(
        interfaceDecl,
        ts.SyntaxKind.MultiLineCommentTrivia,
        `* 原始 schema 名称: "${origName}"\n* 类型: ${printer.printNode(
          ts.EmitHint.Unspecified,
          member.type,
          member.getSourceFile()!
        )}`,
        true
      );
    }

    const code = printer.printNode(
      ts.EmitHint.Unspecified,
      interfaceDecl,
      member.getSourceFile() ||
        ts.createSourceFile("", "", ts.ScriptTarget.Latest)
    );

    allInterfaces.push(code);
  });

  // 写入文件
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, allInterfaces.join("\n\n"), "utf-8");
  console.log(`✅ 已生成接口并写入 ${output}`);
}
