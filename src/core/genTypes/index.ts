import ts, { TypeElement } from "typescript";
import fs from "fs/promises";
import path from "path";
import { toSafeInterfaceName } from "@utils/index.ts";
import { schemaTypesToJson } from "@temp/helper/schemaTypesToJson.ts";
import { parseMember } from "@/utils/parseMember.ts";
import { printSchemaMembers } from "@/utils/printSchemaMembers.ts";

function resolveType(node: ts.TypeNode): ts.TypeNode {
  if (ts.isIndexedAccessTypeNode(node)) {
    // components["schemas"]["XXX"] → XXX
    if (
      ts.isIndexedAccessTypeNode(node.objectType) &&
      ts.isTypeReferenceNode(node.objectType.objectType) &&
      ts.isIdentifier(node.objectType.objectType.typeName) &&
      node.objectType.objectType.typeName.text === "components" &&
      ts.isLiteralTypeNode(node.indexType) &&
      ts.isStringLiteral(node.indexType.literal)
    ) {
      return ts.factory.createTypeReferenceNode(node.indexType.literal.text);
    }
    if (
      ts.isTypeReferenceNode(node.objectType) &&
      ts.isIdentifier(node.objectType.typeName) &&
      node.objectType.typeName.text === "components" &&
      ts.isLiteralTypeNode(node.indexType) &&
      ts.isStringLiteral(node.indexType.literal)
    ) {
      return ts.factory.createTypeReferenceNode(node.indexType.literal.text);
    }
  } else if (ts.isArrayTypeNode(node)) {
    return ts.factory.updateArrayTypeNode(node, resolveType(node.elementType));
  } else if (ts.isUnionTypeNode(node)) {
    return ts.factory.updateUnionTypeNode(
      node,
      ts.factory.createNodeArray(node.types.map(resolveType)),
    );
  } else if (ts.isLiteralTypeNode(node)) {
    if (ts.isNumericLiteral(node.literal)) {
      return ts.factory.createLiteralTypeNode(
        ts.factory.createNumericLiteral(node.literal.text),
      );
    }
    if (ts.isStringLiteral(node.literal)) {
      return ts.factory.createLiteralTypeNode(
        ts.factory.createStringLiteral(node.literal.text),
      );
    }
    if (node.literal.kind === ts.SyntaxKind.TrueKeyword) {
      return ts.factory.createLiteralTypeNode(ts.factory.createTrue());
    }
    if (node.literal.kind === ts.SyntaxKind.FalseKeyword) {
      return ts.factory.createLiteralTypeNode(ts.factory.createFalse());
    }
  } else if (
    node.kind === ts.SyntaxKind.StringKeyword ||
    node.kind === ts.SyntaxKind.NumberKeyword ||
    node.kind === ts.SyntaxKind.BooleanKeyword ||
    node.kind === ts.SyntaxKind.AnyKeyword ||
    node.kind === ts.SyntaxKind.UnknownKeyword ||
    node.kind === ts.SyntaxKind.VoidKeyword ||
    node.kind === ts.SyntaxKind.NullKeyword
  ) {
    // TS factory 需要 KeywordTypeSyntaxKind
    return ts.factory.createKeywordTypeNode(
      node.kind as ts.KeywordTypeSyntaxKind,
    );
  }
  return node;
}



/**
 * 根据组件 schemas 类型生成 TypeScript 类型定义文件
 * @param schemaTypes ts.PropertySignature 组件 schemas 类型
 * @param outputPath 输出文件路径
 */
export async function generateTypes(
  componentsInterface: ts.InterfaceDeclaration,
  outputPath: string,
) {

  // 调试用，将 schemaTypes 转成 JSON 文件
  // const json = schemaTypesToJson(schemaTypes);
  // fs.writeFile("./temp/types/schema.json", JSON.stringify(json, null, 2));
  // return

  // if (!schemaTypes.type) return;
  // if (ts.isTypeLiteralNode(schemaTypes.type)) {
  //   const properties: TypeElement[] = []
  //   for (const member of schemaTypes.type.members) {
  //     if (ts.isPropertySignature(member) || ts.isIndexSignatureDeclaration(member)) {
  //       properties.push(member);
  //     }
  //   }

  //   const typeConstructions = properties.map(parseMember)
  //   fs.writeFile("./temp/types/schema1.json", JSON.stringify(typeConstructions, null, 2));
  // }
  printSchemaMembers(componentsInterface);



  return
  for (const schemaNode of schemaTypes.type.members) {
    if (
      !ts.isPropertySignature(schemaNode) ||
      !schemaNode.name ||
      !schemaNode.type
    )
      continue;

    // 原始名称
    const origName = ts.isIdentifier(schemaNode.name)
      ? schemaNode.name.text
      : ts.isStringLiteral(schemaNode.name)
        ? schemaNode.name.text
        : ts.isNumericLiteral(schemaNode.name)
          ? schemaNode.name.text
          : undefined;
    if (!origName) continue;

    // 安全名称
    let safeName = toSafeInterfaceName(origName);
    if (safeName.endsWith("?")) safeName = safeName.replace(/\?$/, "Optional");

    // 空对象 → interface extends Record<string, never> {}
    if (
      ts.isTypeLiteralNode(schemaNode.type) &&
      schemaNode.type.members.length === 0
    ) {
      const interfaceDecl = ts.factory.createInterfaceDeclaration(
        [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        safeName,
        undefined,
        [
          ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
            ts.factory.createExpressionWithTypeArguments(
              ts.factory.createIdentifier("Record"),
              [
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword),
              ],
            ),
          ]),
        ],
        [],
      );
      ts.addSyntheticLeadingComment(
        interfaceDecl,
        ts.SyntaxKind.MultiLineCommentTrivia,
        `* 原始 schema 名称: "${origName}"`,
        true,
      );
      declarations.push(
        printer.printNode(
          ts.EmitHint.Unspecified,
          interfaceDecl,
          ts.createSourceFile("", "", ts.ScriptTarget.Latest),
        ),
      );
      continue;
    }

    // 对象类型 → interface
    if (ts.isTypeLiteralNode(schemaNode.type)) {
      const newMembers = schemaNode.type.members.map((m) => {
        if (!ts.isPropertySignature(m) || !m.type || !m.name) return m;
        const resolved = resolveType(m.type);
        return ts.factory.updatePropertySignature(
          m,
          m.modifiers,
          m.name,
          m.questionToken,
          resolved,
        );
      });

      const interfaceDecl = ts.factory.createInterfaceDeclaration(
        [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        safeName,
        undefined,
        undefined,
        newMembers,
      );

      ts.addSyntheticLeadingComment(
        interfaceDecl,
        ts.SyntaxKind.MultiLineCommentTrivia,
        `* 原始 schema 名称: "${origName}"`,
        true,
      );

      declarations.push(
        printer.printNode(
          ts.EmitHint.Unspecified,
          interfaceDecl,
          ts.createSourceFile("", "", ts.ScriptTarget.Latest),
        ),
      );
      continue;
    }

    // 非对象类型 → type alias
    const resolvedType = resolveType(schemaNode.type);

    const typeAlias = ts.factory.createTypeAliasDeclaration(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      safeName,
      undefined,
      resolvedType,
    );

    ts.addSyntheticLeadingComment(
      typeAlias,
      ts.SyntaxKind.MultiLineCommentTrivia,
      `* 原始 schema 名称: "${origName}"`,
      true,
    );

    declarations.push(
      printer.printNode(
        ts.EmitHint.Unspecified,
        typeAlias,
        ts.createSourceFile("", "", ts.ScriptTarget.Latest),
      ),
    );
  }

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, declarations.join("\n\n"), "utf-8");
}
