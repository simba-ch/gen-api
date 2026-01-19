import ts from "typescript";
import { safeNameMap } from "./toSafeInterfaceName.ts";

function getSchemaNameFromComponentsRef(
    type: ts.IndexedAccessTypeNode
): string {
    const indexType = type.indexType;

    if (!ts.isLiteralTypeNode(indexType)) {
        throw new Error("Index type is not a literal type");
    }

    const literal = indexType.literal;

    if (!ts.isStringLiteral(literal)) {
        throw new Error("Schema ref is not a string literal");
    }

    return literal.text;
}



function isComponentsSchemaRef(
    type: ts.TypeNode
): type is ts.IndexedAccessTypeNode {
    if (ts.isIndexedAccessTypeNode(type) &&
        ts.isTypeReferenceNode(type.objectType) &&
        ts.isIdentifier(type.objectType.typeName) &&
        type.objectType.typeName.text == "components" &&
        ts.isLiteralTypeNode(type.indexType) &&
        ts.isStringLiteral(type.indexType.literal) &&
        type.indexType.literal.text == "schemas"
    ) {
        return false
    }

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

export function transformPropertyType(
    type: ts.TypeNode
): ts.TypeNode {

    // components["schemas"]["X"]
    if (isComponentsSchemaRef(type)) {
        const schemaName = getSchemaNameFromComponentsRef(type);
        const safeSchemaName = safeNameMap.get(schemaName) ?? schemaName;
        return ts.factory.createTypeReferenceNode(safeSchemaName, undefined);
    }

    // 可扩展：数组 / union / nullable
    if (ts.isArrayTypeNode(type)) {
        return ts.factory.createArrayTypeNode(
            transformPropertyType(type.elementType)
        );
    }

    if (ts.isUnionTypeNode(type)) {
        return ts.factory.createUnionTypeNode(
            type.types.map(transformPropertyType)
        );
    }

    return type;
}

