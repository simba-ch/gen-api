import openapiTS from "openapi-typescript";
import type { OpenAPITSOptions } from "openapi-typescript";
import type { OpenAPISource } from "@shared-types/index.ts";
import ts from "typescript";
import { HTTP_METHODS } from "@/const.ts";
import { isNeverLike } from "@utils/isNeverLike.ts";
import { generateOperationId } from "@utils/generateOperationId.ts";
import { parsePropertyName } from "@utils/parsePropertyName.ts";

let pathsInterface: ts.InterfaceDeclaration | undefined;
let componentsInterface: ts.InterfaceDeclaration | undefined;
let operationsInterface: ts.InterfaceDeclaration | undefined;

export async function parseOpenapi(
  source: OpenAPISource,
  options?: OpenAPITSOptions,
) {
  const ast = await openapiTS(source, options);

  ast.forEach((node) => {
    if (ts.isInterfaceDeclaration(node)) {
      const name = node.name.text;
      switch (name) {
        case "paths":
          pathsInterface = node;
          break;
        case "components":
          componentsInterface = node;
          break;
        case "operations":
          operationsInterface = node;
          break;
      }
    }
  });

  extractInterfaceOperations();
}

export {
  pathsInterface,
  componentsInterface,
  operationsInterface as operationsType,
};

async function extractInterfaceOperations() {
  if (!operationsInterface && pathsInterface) {
    // 不是接口需要提取
    const operationMembers: ts.TypeElement[] = [];
    // 遍历 paths 接口的每个成员（每个路径）
    pathsInterface.members.forEach((pathMember) => {
      if (!ts.isPropertySignature(pathMember)) return;

      // 获取路径名称，例如 "/auth/login/check"
      const pathName = parsePropertyName(pathMember.name).replace(/['"]/g, "");
      if (!pathName) return;

      // 获取路径的类型（包含各个 HTTP 方法）
      const pathType = pathMember.type;
      if (!pathType || !ts.isTypeLiteralNode(pathType)) return;

      // 遍历路径下的每个成员（HTTP 方法）
      pathType.members.forEach((methodMember) => {
        if (!ts.isPropertySignature(methodMember)) return;

        const methodName = parsePropertyName(methodMember.name);
        if (!methodName) return;

        // 检查是否是 HTTP 方法
        if (!HTTP_METHODS.includes(methodName as any)) return;

        // 检查是否为 never 类型
        if (isNeverLike(methodMember.type)) return;

        // 生成 operationId
        const operationId = generateOperationId(pathName, methodName);

        // 创建 operation 属性
        const operationProperty = ts.factory.createPropertySignature(
          undefined,
          ts.factory.createIdentifier(operationId),
          undefined,
          methodMember.type, // 直接使用原始的方法类型定义
        );
        // 添加注释
        const commentText = ts.getSyntheticLeadingComments(methodMember) ?? [];
        ts.addSyntheticLeadingComment(
          operationProperty,
          ts.SyntaxKind.MultiLineCommentTrivia,
          `* ${commentText} `,
          true,
        );

        operationMembers.push(operationProperty);
      });
    });
  }
}
