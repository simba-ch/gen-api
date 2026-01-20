import ts from "typescript";
import { safeNameMap } from "./toSafeInterfaceName.ts";
import { parsePropertyName } from "./parsePropertyName.ts";
import { toPropertyName } from "./toPropertyName.ts";
import { getSchemaNameFromComponentsRef } from "./getSchemaNameFromComponentsRef.ts";
import { toSafeEntityName } from "./toSafeEntityName.ts";

/**
 * 检查类型节点是否为组件模式引用
 * 
 * 该函数用于判断给定的TypeScript类型节点是否指向OpenAPI组件中的模式定义。
 * 它会递归检查类型节点是否以"components['schemas']"为基础。
 * 
 * @param type - 要检查的TypeScript类型节点
 * @returns 如果类型是组件模式引用则返回true，否则返回false
 */
function isDerivedFromSchema(
    type: ts.TypeNode
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
        if (ts.isTypeReferenceNode(objectType) &&
            ts.isIdentifier(objectType.typeName) &&
            objectType.typeName.text === "components" &&
            ts.isLiteralTypeNode(indexType) &&
            ts.isStringLiteral(indexType.literal) &&
            indexType.literal.text === "schemas") {
            return true;
        }

        // 情况2: 继续向内层递归查找
        // objectType 可能是更深层的 IndexedAccessTypeNode
        return hasComponentsSchemasBase(objectType);
    }

    return hasComponentsSchemasBase(type);
}
function isComponentsSchemaRef(
    type: ts.TypeNode
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

export function transformPropertyType(
    type: ts.TypeNode
): ts.TypeNode {

    // components["schemas"]["X"]
    if (isComponentsSchemaRef(type)) {
        const schemaName = getSchemaNameFromComponentsRef(type);
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
                const safeMemberName = safeNameMap.get(parsePropertyName(member.name)) ?? member.name;
                return ts.factory.updatePropertySignature(
                    member,
                    member.modifiers,
                    toPropertyName(safeMemberName),
                    member.questionToken,
                    transformPropertyType(member.type),
                );
            }),
        );
    }
    // T[]
    if (ts.isArrayTypeNode(type)) {
        return ts.factory.createArrayTypeNode(
            transformPropertyType(type.elementType)
        );
    }
    // A | B
    if (ts.isUnionTypeNode(type)) {
        return ts.factory.createUnionTypeNode(
            type.types.map(transformPropertyType)
        );
    }

    // Record<K, V> / Promise<T> 等
    if (ts.isTypeReferenceNode(type)) {
        const safeTypeName = toSafeEntityName(type.typeName);

        return ts.factory.updateTypeReferenceNode(
            type,
            safeTypeName,
            type.typeArguments ? ts.factory.createNodeArray(
                type.typeArguments.map(transformPropertyType)
            )
                : undefined,
        );
    }

    return type;
}

