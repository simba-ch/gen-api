import { HTTP_METHODS } from "@/const.ts";
import {
  operationsInterface,
  pathsInterface,
  setOperationsInterface,
} from "@core/parseOpenapi/index.ts";
import ts from "typescript";
import { generateOperationId } from "@utils/generateOperationId.ts";
import { isNeverLike, getPropertyNameStr, transformPropertyType } from "@utils/tsOperator.ts";

/**
 * 从 OpenAPI 路径接口中提取操作接口成员
 *
 * 该函数遍历 paths 接口中的每个路径成员，然后遍历每个路径下的 HTTP 方法成员，
 * 为每个有效的操作生成一个 operationId 并创建对应的属性声明，
 * 最终组合成一个新的 operations 接口。
 *
 * @remarks
 * - 仅在 operationsInterface 不存在且 pathsInterface 存在时执行
 * - 支持 GET、POST、PUT、DELETE 等 HTTP 方法
 * - 自动跳过 never 类型的操作
 * - 保留原始方法的注释信息
 *
 * @returns 无返回值，直接修改全局的 operationsInterface 变量
 */
export async function extractInterfaceOperations() {
  if (!operationsInterface && pathsInterface) {
    // 不是接口需要提取
    const operationMembers: ts.TypeElement[] = [];
    // 遍历 paths 接口的每个成员（每个路径）
    pathsInterface.members.forEach((pathMember) => {
      if (!ts.isPropertySignature(pathMember)) return;

      // 获取路径名称，例如 "/auth/login/check"
      const pathName = getPropertyNameStr(pathMember.name).replace(/['"]/g, "");
      if (!pathName) return;

      // 获取路径的类型（包含各个 HTTP 方法）
      const pathType = pathMember.type;
      if (!pathType || !ts.isTypeLiteralNode(pathType)) return;

      // 遍历路径下的每个成员（HTTP 方法）
      pathType.members.forEach((methodMember) => {
        if (!ts.isPropertySignature(methodMember)) return;

        const methodName = getPropertyNameStr(methodMember.name);
        if (!methodName) return;

        // 检查是否是 HTTP 方法
        if (!HTTP_METHODS.includes(methodName as any)) return;

        // 检查是否为 never 类型
        if (isNeverLike(methodMember.type)) return;
        // 生成 operationId
        const operationId = generateOperationId(pathName, methodName);
        const newMethodMember =
          !ts.isPropertySignature(methodMember) || !methodMember.type
            ? methodMember
            : ts.factory.updatePropertySignature(
                methodMember,
                methodMember.modifiers,
                methodMember.name,
                methodMember.questionToken,
                transformPropertyType(methodMember.type),
              );

        // 创建 operation 属性
        let operationProperty = ts.factory.createPropertySignature(
          undefined,
          ts.factory.createIdentifier(operationId),
          undefined,
          newMethodMember.type, // 直接使用原始的方法类型定义
        );

        // 添加注释
        const comments = ts.getSyntheticLeadingComments(newMethodMember);
        if (comments?.length) {
          comments.forEach((c) => {
            ts.addSyntheticLeadingComment(
              operationProperty,
              c.kind,
              c.text,
              c.hasTrailingNewLine,
            );
          });
        }
        operationMembers.push(operationProperty);
      });
    });

    // 创建新的 operationsInterface 接口
    const newOperationsInterface = ts.factory.createInterfaceDeclaration(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      ts.factory.createIdentifier("operations"),
      undefined,
      undefined,
      operationMembers,
    );

    setOperationsInterface(newOperationsInterface);
  }
}
