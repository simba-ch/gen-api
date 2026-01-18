import ts from "typescript";

export function getSchemaNameFromComponentsRef(
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
