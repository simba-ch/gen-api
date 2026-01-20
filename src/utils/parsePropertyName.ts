import ts from "typescript";

export function parsePropertyName(name: ts.PropertyName): string {
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
