import ts from "typescript";

export function isComponentsSchemaRef(
    type: ts.TypeNode
): type is ts.IndexedAccessTypeNode {
    return (
        ts.isIndexedAccessTypeNode(type) &&
        ts.isIndexedAccessTypeNode(type.objectType) &&
        ts.isTypeReferenceNode(type.objectType.objectType) &&
        ts.isIdentifier(type.objectType.objectType.typeName) &&
        type.objectType.objectType.typeName.text === "components" &&
        ts.isLiteralTypeNode(type.objectType.indexType) &&
        ts.isStringLiteral(type.objectType.indexType.literal) &&
        type.objectType.indexType.literal.text === "schemas" &&
        ts.isLiteralTypeNode(type.indexType) &&
        ts.isStringLiteral(type.indexType.literal)
    );
}
