import ts from "typescript";

export function isNeverLike(type: ts.TypeNode | undefined): boolean {
  if (!type) return true;

  // never
  if (type.kind === ts.SyntaxKind.NeverKeyword) {
    return true;
  }

  if (ts.isUnionTypeNode(type)) {
    return type.types.every(
      (t) =>
        t.kind === ts.SyntaxKind.NeverKeyword ||
        t.kind === ts.SyntaxKind.UndefinedKeyword,
    );
  }

  return false;
}
