import ts from "typescript";
import { getPropertyNameStr, isOperationsReference, transformPropertyType } from "@utils/tsOperator.ts";

/**
 * 从操作接口中收集所有操作的AST节点
 *
 * 遍历接口成员，提取类型字面量节点并构建映射关系
 *
 * @param operationsInterface - 操作接口声明节点
 * @returns 包含操作名称到类型字面量节点映射的Map对象
 */
function collectOperationsAST(
  operationsInterface: ts.InterfaceDeclaration,
): Map<string, ts.TypeLiteralNode> {
  const map = new Map<string, ts.TypeLiteralNode>();

  for (const member of operationsInterface.members) {
    if (!ts.isPropertySignature(member)) continue;
    if (!member.type) continue;

    const name = getPropertyNameStr(member.name);

    if (ts.isTypeLiteralNode(member.type)) {
      map.set(name, member.type);
    }
  }

  return map;
}



function transformPathsInterface(
  pathsInterface: ts.InterfaceDeclaration,
  operationsMap: Map<string, ts.TypeLiteralNode>,
): ts.InterfaceDeclaration {
  const newMembers = pathsInterface.members.map((pathMember) => {
    if (!ts.isPropertySignature(pathMember)) return pathMember;
    if (!pathMember.type || !ts.isTypeLiteralNode(pathMember.type)) {
      return pathMember;
    }

    const members = pathMember.type.members.map((methodMember) => {
      if (!ts.isPropertySignature(methodMember)) return methodMember;
      if (!methodMember.type) return methodMember;

      // 1️⃣ ?: never → 跳过
      if (
        methodMember.questionToken &&
        methodMember.type.kind === ts.SyntaxKind.NeverKeyword
      ) {
        return methodMember;
      }

      // 2️⃣ 已经是内联对象 → 跳过
      if (ts.isTypeLiteralNode(methodMember.type)) {
        return ts.factory.updatePropertySignature(
          methodMember,
          methodMember.modifiers,
          methodMember.name,
          methodMember.questionToken,
          transformPropertyType(methodMember.type),
        );
      }

      // 3️⃣ operations["xxx"] → 替换
      const ref = methodMember.type && isOperationsReference(methodMember.type);
      if (ref) {
        const opType = operationsMap.get(ref.name);
        if (opType) {
          return ts.factory.updatePropertySignature(
            methodMember,
            methodMember.modifiers,
            methodMember.name,
            methodMember.questionToken,
            transformPropertyType(opType),
          );
        }
      }

      return methodMember;
    });

    const newPathType = ts.factory.updateTypeLiteralNode(
      pathMember.type,
      ts.factory.createNodeArray(members),
    );

    return ts.factory.updatePropertySignature(
      pathMember,
      pathMember.modifiers,
      pathMember.name,
      pathMember.questionToken,
      newPathType,
    );
  });

  return ts.factory.updateInterfaceDeclaration(
    pathsInterface,
    pathsInterface.modifiers,
    pathsInterface.name,
    pathsInterface.typeParameters,
    pathsInterface.heritageClauses,
    newMembers,
  );
}

export function toInlinePathsInterface(
  pathsInterface: ts.InterfaceDeclaration,
  operationsInterface: ts.InterfaceDeclaration,
) {
  const operationMap = collectOperationsAST(operationsInterface);
  return transformPathsInterface(pathsInterface, operationMap);
}
