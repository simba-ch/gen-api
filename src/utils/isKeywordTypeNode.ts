import ts from "typescript";

export function isKeywordTypeNode(node: ts.TypeNode): node is ts.KeywordTypeNode {
    switch (node.kind) {
        case ts.SyntaxKind.StringKeyword:
        case ts.SyntaxKind.NumberKeyword:
        case ts.SyntaxKind.BooleanKeyword:
        case ts.SyntaxKind.BigIntKeyword:
        case ts.SyntaxKind.SymbolKeyword:
        case ts.SyntaxKind.VoidKeyword:
        case ts.SyntaxKind.UndefinedKeyword:
        case ts.SyntaxKind.NullKeyword:
        case ts.SyntaxKind.NeverKeyword:
        case ts.SyntaxKind.UnknownKeyword:
        case ts.SyntaxKind.ObjectKeyword:
            return true;
        default:
            return false;
    }
}