import { printSchemaMembers } from "./printSchemaMembers.ts";
import {
  componentsInterface,
  operationsInterface,
  pathsInterface,
} from "@core/parseOpenapi/index.ts";
import { writeFile } from "@utils/writeFile.ts";
import { toInlinePathsInterface } from "@core/genTypes/toInlinePathsInterface.ts";
import { createSourceFile, printNode } from "@utils/tsOperator.ts";

type GenTypesOptions = {
  typesOutputPath: string;
};

/**
 * 根据组件 schemas 类型生成 TypeScript 类型定义文件
 * @param schemaTypes ts.PropertySignature 组件 schemas 类型
 * @param outputPath 输出文件路径
 */
export async function generateTypes({ typesOutputPath }: GenTypesOptions) {
  if (componentsInterface) {
    const types = printSchemaMembers(componentsInterface);
    types && writeFile(typesOutputPath, types);
  }
  if (pathsInterface && operationsInterface) {
    const newPathsInterface = toInlinePathsInterface(
      pathsInterface,
      operationsInterface,
    );

    const sourceFile = createSourceFile("paths_interface.ts");
    const pathsInterfaceCode = printNode(newPathsInterface, sourceFile);
    writeFile("./temp/types/pathsInterface.ts", pathsInterfaceCode);
  }
}
