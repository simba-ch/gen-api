import ts from "typescript";
import { safeNameMap } from "./toSafeInterfaceName.ts";

export function toSafeEntityName(
  typeName: ts.EntityName
): ts.EntityName {
  // 情况 1：Foo
  if (ts.isIdentifier(typeName)) {
    const safe = safeNameMap.get(typeName.text);
    return safe
      ? ts.factory.createIdentifier(safe)
      : typeName;
  }

  // 情况 2：A.B（例如 namespace.Type）
  if (ts.isQualifiedName(typeName)) {
    return ts.factory.createQualifiedName(
      toSafeEntityName(typeName.left),
      typeName.right
    );
  }

  return typeName;
}
