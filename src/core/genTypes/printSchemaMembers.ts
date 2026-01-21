import {
  generateSafeInterfaceName,
  transformPropertyType,
  printNode,
  createSourceFile,
  getPropertyNameStr,
} from "@utils/tsOperator.ts";
import ts from "typescript";

/**
 * 从组件接口生成模式成员的接口代码
 *
 * @param componentsInterface 包含 schemas 属性的 TypeScript 接口声明
 * @returns 生成的接口代码字符串，如果找不到 schemas 属性则返回 undefined
 */
export function printSchemaMembers(
  componentsInterface: ts.InterfaceDeclaration,
) {
  const schemasProp = componentsInterface.members.find(
    (m): m is ts.PropertySignature =>
      ts.isPropertySignature(m) &&
      ts.isIdentifier(m.name) &&
      m.name.text === "schemas",
  );

  if (!schemasProp?.type || !ts.isTypeLiteralNode(schemasProp.type)) {
    return;
  }
  const virtualSourceFile = createSourceFile("printSchemaMembers.ts");
  // 注册安全名映射
  for (const member of schemasProp.type.members) {
    if (!ts.isPropertySignature(member) || !member.type) continue;
    const rawSchemaName = getPropertyNameStr(member.name);
    generateSafeInterfaceName(rawSchemaName);
  }

  let interfaceCode = "";
  for (const member of schemasProp.type.members) {
    if (!ts.isPropertySignature(member) || !member.type) continue;
    const rawSchemaName = getPropertyNameStr(member.name);
    const safeSchemaName = generateSafeInterfaceName(rawSchemaName);

    if (!safeSchemaName) continue;
    let iface: ts.Statement;
    let newMembers: ts.TypeElement[] = [];
    if (member.type && ts.isTypeLiteralNode(member.type)) {
      newMembers = member.type.members.map((m) => {
        if (!ts.isPropertySignature(m) || !m.type) return m;

        return ts.factory.updatePropertySignature(
          m,
          m.modifiers,
          m.name,
          m.questionToken,
          transformPropertyType(m.type),
        );
      });
    }

    if (ts.isTypeLiteralNode(member.type)) {
      iface = ts.factory.createInterfaceDeclaration(
        [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        safeSchemaName,
        undefined,
        undefined,
        newMembers,
      );
    } else {
      iface = ts.factory.createTypeAliasDeclaration(
        [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        safeSchemaName,
        undefined,
        member.type,
      );
    }
    const rawSchemaNameComment =
      rawSchemaName != safeSchemaName
        ? `// 原始 schema 名称: "${rawSchemaName}"\n`
        : "";
    interfaceCode +=
      rawSchemaNameComment + printNode(iface, virtualSourceFile) + "\n\n";
  }

  return interfaceCode;
}
