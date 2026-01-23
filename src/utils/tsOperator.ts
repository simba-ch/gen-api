import ts from "typescript";

/**
 * 创建TypeScript源文件对象
 *
 * @param fileName - 文件名
 * @param content - 文件内容，可选参数，默认为空字符串
 * @returns 返回创建的TypeScript源文件对象
 */
export function createSourceFile(fileName: string, content?: string) {
  return ts.createSourceFile(
    fileName,
    content || "",
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
}

/**
 * 解析属性名并返回文本内容
 *
 * 该函数接受 TypeScript 属性名节点，提取并返回其文本表示。
 * 支持标识符、字符串字面量和数字字面量三种类型的属性名。
 *
 * @param name TypeScript 属性名节点
 * @returns 属性名的文本内容
 *
 * @throws 当遇到计算属性名时抛出错误，因为模式中不支持计算属性名
 * @throws 当遇到未知类型的属性名时抛出错误（理论上不会执行到这里）
 */
export function getPropertyNameStr(name: ts.PropertyName): string {
  if (ts.isComputedPropertyName(name)) {
    throw new Error("Computed property name is not supported in schema");
  }

  if (
    ts.isIdentifier(name) ||
    ts.isStringLiteral(name) ||
    ts.isNumericLiteral(name)
  ) {
    return name.text;
  }

  // 理论上到不了这里
  throw new Error("Unknown property name type");
}

/**
 * 从组件引用的索引类型节点中提取模式名称
 *
 * @param type - 索引访问类型节点，包含要提取的模式名称
 * @returns 返回从字面量中提取的模式名称字符串
 * @throws 当索引类型不是字面量类型时抛出错误
 * @throws 当模式引用不是字符串字面量时抛出错误
 */
export function getLiteralTextStr(type: ts.IndexedAccessTypeNode): string {
  const indexType = type.indexType;

  if (!ts.isLiteralTypeNode(indexType)) {
    throw new Error("Index type is not a literal type");
  }

  const literal = indexType.literal;

  if (!ts.isStringLiteral(literal) || !ts.isNumericLiteral(literal)) {
    throw new Error("Pattern ref is not a string literal");
  }

  return getPropertyNameStr(literal);
}

/**
 * 检查类型是否为 never 类型或包含 never 的联合类型
 *
 * @param type - 要检查的 TypeScript 类型节点
 * @returns 如果类型是 never、never 的联合类型或 undefined 的联合类型，返回 true；否则返回 false
 */
export function isNeverLike(type: ts.TypeNode | undefined): boolean {
  if (!type) return true;

  // never
  if (type.kind === ts.SyntaxKind.NeverKeyword) {
    return true;
  }

  // never | undefined | ...
  if (ts.isUnionTypeNode(type)) {
    return type.types.every(
      (t) =>
        t.kind === ts.SyntaxKind.NeverKeyword ||
        t.kind === ts.SyntaxKind.UndefinedKeyword,
    );
  }

  return false;
}

// 创建打印器实例，用于打印TypeScript语法树节点
const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });


let originSourceFile: ts.SourceFile | undefined;
export function setOriginSourceFile(sourceFile?: ts.SourceFile) {
  originSourceFile = sourceFile;
}
/**
 * 打印TypeScript语法树节点
 *
 * @param node - 要打印的TypeScript语法树节点
 * @param sourceFile - 包含该节点的源文件对象
 * @returns 打印后的节点代码字符串
 */
export function printNode(node: ts.Node, sourceFile: ts.SourceFile) {
  return printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
}

/**
 * 检查类型节点是否为 operations 的索引访问类型引用
 *
 * @param type - 要检查的 TypeScript 类型节点
 * @returns 如果类型是 operations 的索引访问类型引用，返回包含名称的对象；否则返回 null
 */
export function isOperationsReference(
  type: ts.TypeNode,
): { name: string } | null {
  if (!ts.isIndexedAccessTypeNode(type)) return null;

  const obj = type.objectType;

  // 必须是 operations
  if (
    !ts.isTypeReferenceNode(obj) ||
    !ts.isIdentifier(obj.typeName) ||
    obj.typeName.escapedText !== "operations"
  ) {
    return null;
  }

  const index = type.indexType;
  if (ts.isLiteralTypeNode(index) && ts.isStringLiteral(index.literal)) {
    return { name: index.literal.text };
  }

  return null;
}

/**
 * 将字符串或属性名转换为TypeScript属性名节点
 *
 * @param name - 字符串或TypeScript属性名节点
 * @returns 返回TypeScript属性名节点，如果是字符串则转换为标识符节点
 */
export function generatePropertyName(
  name: string | ts.PropertyName,
): ts.PropertyName {
  if (typeof name === "string") {
    return ts.factory.createIdentifier(name);
  }
  return name;
}
const safeNameMap = new Map<string, string>();

/**
 * 将不安全的接口名称转换为安全的标识符名称
 *
 * 该函数通过移除特殊字符、处理可选标记和避免数字开头等方式，
 * 确保生成的接口名称符合 TypeScript 的命名规范。
 *
 * @param name - 原始接口名称，可能包含特殊字符或问号后缀
 * @returns 安全的接口名称，符合 TypeScript 标识符命名规则
 */
export function generateSafeInterfaceName(name: string): string {
  let safe = name.replace(/\?$/, "Optional").replace(/[^\w$]/g, "_");
  if (/^\d/.test(safe)) safe = `Safe_Type_${safe}`;
  safeNameMap.set(name, safe);
  return safe;
}

/**
 * 将类型名称转换为安全的实体名称
 *
 * 该函数处理两种情况：
 * 1. 简单标识符（如 Foo）
 * 2. 限定名称（如 namespace.Type）
 *
 * @param typeName - 要转换的实体名称
 * @returns 转换后的安全实体名称
 */
export function generateSafeEntityName(typeName: ts.EntityName): ts.EntityName {
  // 情况 1：Foo
  if (ts.isIdentifier(typeName)) {
    const safe = safeNameMap.get(typeName.text);
    return safe ? ts.factory.createIdentifier(safe) : typeName;
  }

  // 情况 2：A.B（例如 namespace.Type）
  if (ts.isQualifiedName(typeName)) {
    return ts.factory.createQualifiedName(
      generateSafeEntityName(typeName.left),
      typeName.right,
    );
  }

  return typeName;
}

/**
 * 检查类型节点是否为组件模式引用
 *
 * 该函数用于判断给定的TypeScript类型节点是否指向OpenAPI组件中的模式定义。
 * 它会递归检查类型节点是否以"components['schemas']"为基础。
 *
 * @param type - 要检查的TypeScript类型节点
 * @returns 如果类型是组件模式引用则返回true，否则返回false
 */
export function isDerivedFromSchema(
  type: ts.TypeNode,
): type is ts.IndexedAccessTypeNode {
  // if (ts.isIndexedAccessTypeNode(type) &&
  //     ts.isTypeReferenceNode(type.objectType) &&
  //     ts.isIdentifier(type.objectType.typeName) &&
  //     type.objectType.typeName.text == "components" &&
  //     ts.isLiteralTypeNode(type.indexType) &&
  //     ts.isStringLiteral(type.indexType.literal) &&
  //     type.indexType.literal.text == "schemas"
  // ) {
  //     return false
  // }

  // 递归查找基础是否为 components["schemas"]
  function hasComponentsSchemasBase(node: ts.TypeNode): boolean {
    // 必须是 IndexedAccessTypeNode
    if (!ts.isIndexedAccessTypeNode(node)) {
      return false;
    }

    const objectType = node.objectType;
    const indexType = node.indexType;

    // 情况1: 当前节点就是 components["schemas"]
    // objectType 是 TypeReferenceNode(components)
    // indexType 是 LiteralTypeNode("schemas")
    if (
      ts.isTypeReferenceNode(objectType) &&
      ts.isIdentifier(objectType.typeName) &&
      objectType.typeName.text === "components" &&
      ts.isLiteralTypeNode(indexType) &&
      ts.isStringLiteral(indexType.literal) &&
      indexType.literal.text === "schemas"
    ) {
      return true;
    }

    // 情况2: 继续向内层递归查找
    // objectType 可能是更深层的 IndexedAccessTypeNode
    return hasComponentsSchemasBase(objectType);
  }

  return hasComponentsSchemasBase(type);
}

/**
 * 检查类型节点是否为 components["schemas"]["X"] 形式的组件模式引用
 *
 * @param type - 要检查的类型节点
 * @returns 如果类型为 components["schemas"]["X"] 形式的组件模式引用则返回 true，否则返回 false
 */
export function isComponentsSchemaRef(
  type: ts.TypeNode,
): type is ts.IndexedAccessTypeNode {
  // 必须是 components["schemas"]["X"] 这种形态
  if (!ts.isIndexedAccessTypeNode(type)) {
    return false;
  }

  // indexType 必须是 string literal（X）
  if (
    !ts.isLiteralTypeNode(type.indexType) ||
    !ts.isStringLiteral(type.indexType.literal)
  ) {
    return false;
  }

  const obj = type.objectType;

  // objectType 必须是 components["schemas"]
  if (
    ts.isIndexedAccessTypeNode(obj) &&
    ts.isTypeReferenceNode(obj.objectType) &&
    ts.isIdentifier(obj.objectType.typeName) &&
    obj.objectType.typeName.text === "components" &&
    ts.isLiteralTypeNode(obj.indexType) &&
    ts.isStringLiteral(obj.indexType.literal) &&
    obj.indexType.literal.text === "schemas"
  ) {
    return true;
  }

  return false;
}

/**
 * 递归转换TypeScript类型节点，处理各种类型结构并生成安全的类型引用
 *
 * 该函数能够识别和处理多种TypeScript类型节点，包括组件模式引用、类型字面量、
 * 数组类型、联合类型和类型引用等。它会递归地转换类型结构，确保生成的类型
 * 引用名称是安全的，避免与TypeScript关键字或保留字冲突。
 *
 * @param type - 要转换的TypeScript类型节点
 * @returns 转换后的TypeScript类型节点，保持原始类型结构但使用安全的名称
 */
export function transformPropertyType(type: ts.TypeNode): ts.TypeNode {
  // components["schemas"]["X"]
  if (isComponentsSchemaRef(type)) {
    const schemaName = getLiteralTextStr(type);
    const safeSchemaName = safeNameMap.get(schemaName) ?? schemaName;
    return ts.factory.createTypeReferenceNode(safeSchemaName, undefined);
  }

  // { a: X; b: Y }
  if (ts.isTypeLiteralNode(type)) {
    return ts.factory.createTypeLiteralNode(
      type.members.map((member) => {
        if (!ts.isPropertySignature(member) || !member.type) {
          return member;
        }
        const safeMemberName =
          safeNameMap.get(getPropertyNameStr(member.name)) ?? member.name;
        return ts.factory.updatePropertySignature(
          member,
          member.modifiers,
          generatePropertyName(safeMemberName),
          member.questionToken,
          transformPropertyType(member.type),
        );
      }),
    );
  }
  // T[]
  if (ts.isArrayTypeNode(type)) {
    return ts.factory.createArrayTypeNode(
      transformPropertyType(type.elementType),
    );
  }
  // A | B
  if (ts.isUnionTypeNode(type)) {
    return ts.factory.createUnionTypeNode(
      type.types.map(transformPropertyType),
    );
  }

  // Record<K, V> / Promise<T> 等
  if (ts.isTypeReferenceNode(type)) {
    const safeTypeName = generateSafeEntityName(type.typeName);

    return ts.factory.updateTypeReferenceNode(
      type,
      safeTypeName,
      type.typeArguments
        ? ts.factory.createNodeArray(
            type.typeArguments.map(transformPropertyType),
          )
        : undefined,
    );
  }

  return type;
}

export { originSourceFile, safeNameMap };
