import ts from "typescript";
import type { TypeElement } from 'typescript'
import { isKeywordTypeNode } from "./isKeywordTypeNode.ts";
import { printNode } from "./printNode.ts";

export function parseMember(typeNode: TypeElement) {
    if (ts.isPropertySignature(typeNode)) {
        // 处理 propertySignature 类型
        return parsePropertySignature(typeNode);
    }

    // 处理 IndexSignature 类型


}







export function parseTypeNode(type: ts.TypeNode | undefined): ParsedType {
    if (!type) return { kind: "unknown" };

    // 1️⃣ 基础类型（string, number, boolean, any, unknown, void）
    if (isKeywordTypeNode(type)) {
        return { kind: "keyword", name: ts.SyntaxKind[type.kind] };
    }

    // 2️⃣ 字面量类型 'a' | 1 | true
    if (ts.isLiteralTypeNode(type)) {
        const lit = type.literal;
        if (ts.isStringLiteral(lit)) return { kind: "literal", value: lit.text };
        if (ts.isNumericLiteral(lit)) return { kind: "literal", value: Number(lit.text) };
        if (lit.kind === ts.SyntaxKind.TrueKeyword) return { kind: "literal", value: true };
        if (lit.kind === ts.SyntaxKind.FalseKeyword) return { kind: "literal", value: false };
        return { kind: "unknown" };
    }

    // 3️⃣ 数组类型
    if (ts.isArrayTypeNode(type)) {
        return { kind: "array", elementType: parseTypeNode(type.elementType) };
    }

    // 4️⃣ 联合类型
    if (ts.isUnionTypeNode(type)) {
        return { kind: "union", types: type.types.map(parseTypeNode) };
    }

    // 5️⃣ 内联对象类型 { ... }
    if (ts.isTypeLiteralNode(type)) {
        const properties: ParsedProperty[] = type.members
            .filter(ts.isPropertySignature)
            .map(parsePropertySignature); // 复用之前的 parsePropertySignature
        return { kind: "object", properties };
    }

    // 6️⃣ 类型引用（TypeReferenceNode）: Record, Array, 自定义类型
    if (ts.isTypeReferenceNode(type)) {
        const name = type.typeName.getText();
        const typeArgs = type.typeArguments?.map(parseTypeNode);
        return { kind: "reference", name, typeArguments: typeArgs };
    }

    // 7️⃣ 括号包裹类型
    if (ts.isParenthesizedTypeNode(type)) {
        return parseTypeNode(type.type);
    }

    // 8️⃣ fallback
    return { kind: "raw", text: printNode(type, 'parseMember') };
}



type ParsedType =
    | { kind: "unknown" }
    | { kind: "keyword"; name: string }
    | { kind: "literal"; value: string | number | boolean }
    | { kind: "array"; elementType: ParsedType }
    | { kind: "union"; types: ParsedType[] }
    | { kind: "reference"; name: string; typeArguments?: ParsedType[] }
    | { kind: "object"; properties: ParsedProperty[] }
    | { kind: "raw"; text: string }; // fallback

type ParsedProperty = {
    kind: "property";
    name: string;
    optional: boolean;
    type: ParsedType;
};

function parsePropertySignature(
    property: ts.PropertySignature,
): ParsedProperty {
    return {
        kind: "property",
        name: parsePropertyName(property.name),
        optional: !!property.questionToken,
        type: parseTypeNode(property.type),
    };
}
