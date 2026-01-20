import ts from "typescript";
import { printSchemaMembers } from "./printSchemaMembers.ts";
import { extractInterfaceOperations } from "@core/parseOpenapi/index.ts";



/**
 * 根据组件 schemas 类型生成 TypeScript 类型定义文件
 * @param schemaTypes ts.PropertySignature 组件 schemas 类型
 * @param outputPath 输出文件路径
 */
export async function generateTypes(
  componentsInterface: ts.InterfaceDeclaration,
  outputPath: string,
) {
  await printSchemaMembers(componentsInterface, outputPath);
  await extractInterfaceOperations();
}
