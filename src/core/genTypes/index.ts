import { printTypes } from "./printSchemaMembers.ts";
import { componentsInterface } from "../parseOpenapi/index.ts";
import { writeFile } from "@utils/writeFile.ts";

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
    const types = printTypes(componentsInterface);
    types && writeFile(typesOutputPath, types);
  }
  // if (pathsInterface && operationsInterface) {
  //   toInlinePathsInterface();

  //   const sourceFile = createSourceFile("paths_interface.ts");
  //   const pathsInterfaceCode = printNode(newPathsInterface, sourceFile);
  //   writeFile("./temp/types/pathsInterface.ts", pathsInterfaceCode);
  // }
}
