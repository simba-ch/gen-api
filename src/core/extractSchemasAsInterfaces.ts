import ts from "typescript";
import fs from "fs/promises";
import path from "path";

/** 将原始 schema 名称转换成合法 TS interface 名称 */
function toSafeInterfaceName(name: string) {
  return name.replace(/\?$/, "Optional").replace(/[^\w$]/g, "_");
}

/** 获取 schema 成员原始名称（支持 Identifier 或 StringLiteral） */
function getSchemaName(member: ts.TypeElement): string | null {
  if (ts.isPropertySignature(member)) {
    if (ts.isIdentifier(member.name)) return member.name.text;
    if (ts.isStringLiteral(member.name)) return member.name.text;
  }
  return null;
}

/**
 * 提取多级 IndexedAccess 最终 schema 名称，例如：
 * components["schemas"]["Page?"]["records"] -> Page?
 */
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

/**
 * 从 ts.Node[] 中提取 components.schemas 并生成 export interface 写入文件
 */
export async function extractSchemasAsInterfaces(
  nodes: ts.Node[],
  outFile: string
) {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  // 1️⃣ 找到 export interface components
  const componentsNode = nodes.find(
    (node) => ts.isInterfaceDeclaration(node) && node.name.text === "components"
  ) as ts.InterfaceDeclaration | undefined;

  if (!componentsNode) throw new Error("❌ 找不到 components interface");

  // 2️⃣ 找到 schemas 属性
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
  )
    throw new Error("❌ 找不到 schemas 属性或类型不合法");

  const schemasType = schemasProp.type;

  // 3️⃣ schema 名称映射表
  const schemaNameMap = new Map<string, string>();
  schemasType.members.forEach((member) => {
    const origName = getSchemaName(member);
    if (origName) schemaNameMap.set(origName, toSafeInterfaceName(origName));
  });

  const allInterfaces: string[] = [];

  // 4️⃣ 递归替换 TypeNode 中的循环引用
  function replaceType(node: ts.TypeNode): ts.TypeNode {
    if (ts.isTypeReferenceNode(node)) {
      if (ts.isIndexedAccessTypeNode(node.typeName)) {
        const name = extractSchemaNameFromIndexedAccessRecursive(node.typeName);
        if (name && schemaNameMap.has(name))
          return ts.factory.createTypeReferenceNode(schemaNameMap.get(name)!);
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

  // 5️⃣ 遍历每个 schema，生成 interface
  schemasType.members.forEach((member) => {
    const origName = getSchemaName(member);
    if (!origName) return;

    const safeName = schemaNameMap.get(origName)!;

    if (!ts.isPropertySignature(member) || !member.type) return;

    let interfaceDecl: ts.InterfaceDeclaration;

    if (ts.isTypeLiteralNode(member.type)) {
      // type literal → 生成完整成员
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

      // 添加原始 schema 名称注释
      ts.addSyntheticLeadingComment(
        interfaceDecl,
        ts.SyntaxKind.MultiLineCommentTrivia,
        `* 原始 schema 名称: "${origName}" `,
        true
      );
    } else {
      // 非 type literal → 生成空 interface 并保留原始类型注释
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
        )} `,
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

  // 6️⃣ 写入文件
  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, allInterfaces.join("\n\n"), "utf-8");
  console.log(`✅ 已生成接口并写入 ${outFile}`);
}
