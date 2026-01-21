import { HTTP_METHODS } from "@/const.ts";
import { pathsInterface } from "@core/parseOpenapi/index.ts";
import ts from "typescript";
import { generateOperationId } from "../../utils/generateOperationId.ts";
import { getPropertyNameStr, isNeverLike } from "@utils/tsOperator.ts";

/**
 * 替换路径接口方法引用
 * 
 * 该函数遍历路径接口中的每个成员，将其中的HTTP方法属性（如get、post等）的类型
 * 替换为对应的操作ID在operations类型中的引用。主要用于将OpenAPI路径定义
 * 转换为TypeScript类型定义时建立方法与操作ID的关联。
 * 
 * @returns 返回更新后的接口声明，如果pathsInterface不存在则返回undefined
 */
export async function replacePathsInterfaceMethodRef() {
  if (!pathsInterface) return;
  return ts.factory.updateInterfaceDeclaration(
    pathsInterface,
    pathsInterface.modifiers,
    pathsInterface.name,
    pathsInterface.typeParameters,
    pathsInterface.heritageClauses,
    pathsInterface.members.map((pathMember) => {
      if (!ts.isPropertySignature(pathMember)) return pathMember;

      const pathName = getPropertyNameStr(pathMember.name).replace(/['"]/g, "");
      if (!pathName) return pathMember;

      if (!pathMember.type || !ts.isTypeLiteralNode(pathMember.type)) {
        return pathMember;
      }

      const members = pathMember.type.members.map((methodMember) => {
        if (!ts.isPropertySignature(methodMember)) return methodMember;

        const methodName = getPropertyNameStr(methodMember.name);
        if (!methodName) return methodMember;

        if (!HTTP_METHODS.includes(methodName as any)) return methodMember;
        if (isNeverLike(methodMember.type)) return methodMember;

        const operationId = generateOperationId(pathName, methodName);

        const newType = ts.factory.createIndexedAccessTypeNode(
          ts.factory.createTypeReferenceNode("operations", undefined),
          ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral(operationId),
          ),
        );

        return ts.factory.updatePropertySignature(
          methodMember,
          methodMember.modifiers,
          methodMember.name,
          methodMember.questionToken,
          newType,
        );
      });

      const updatedPathType = ts.factory.updateTypeLiteralNode(
        pathMember.type,
        ts.factory.createNodeArray(members),
      );

      return ts.factory.updatePropertySignature(
        pathMember,
        pathMember.modifiers,
        pathMember.name,
        pathMember.questionToken,
        updatedPathType,
      );
    }),
  );
}
