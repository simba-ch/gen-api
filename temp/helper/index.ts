import fs from "node:fs";
import path from "node:path";

/* ---------------------------------- */
/* 工具：安全 stringify（避免循环引用） */
/* ---------------------------------- */
function safeStringify(data: unknown) {
  const seen = new WeakSet();
  return JSON.stringify(
    data,
    (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) return "[Circular]";
        seen.add(value);
      }
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    },
    2,
  );
}

/* ---------------------------------- */
/* 输出文件路径（基于 cwd） */
/* ---------------------------------- */
const DEBUG_OUTPUT_FILE = path.resolve(
  process.cwd(),
  "debug/log/openapi-transform-debug.log",
);

/* ---------------------------------- */
/* 追加写入工具 */
/* ---------------------------------- */
export function appendDebug(title: string, payload: unknown) {
  fs.appendFileSync(
    DEBUG_OUTPUT_FILE,
    `\n\n===== ${title} =====\n${safeStringify(payload)}\n`,
    "utf-8",
  );
}

/**
 * 将 ts.PropertySignature 类型的 schema 递归转换为干净的 JSON
 */
export function schemaTypesToJson(
  node: ts.PropertySignature | ts.TypeNode,
): any {
  if (ts.isPropertySignature(node)) {
    const name = ts.isIdentifier(node.name)
      ? node.name.text
      : ts.isStringLiteral(node.name)
      ? node.name.text
      : ts.isNumericLiteral(node.name)
      ? node.name.text
      : "(unknown)";

    const optional = !!node.questionToken;
    const type = node.type ? schemaTypesToJson(node.type) : "unknown";

    return { name, optional, type };
  }

  if (ts.isTypeLiteralNode(node)) {
    // 对象类型，递归成员
    return {
      kind: "object",
      members: node.members
        .filter(ts.isPropertySignature)
        .map((m) => schemaTypesToJson(m)),
    };
  }

  if (ts.isArrayTypeNode(node)) {
    return {
      kind: "array",
      elementType: schemaTypesToJson(node.elementType),
    };
  }

  if (ts.isUnionTypeNode(node)) {
    return {
      kind: "union",
      types: node.types.map(schemaTypesToJson),
    };
  }

  if (ts.isLiteralTypeNode(node)) {
    if (ts.isNumericLiteral(node.literal) || ts.isStringLiteral(node.literal)) {
      return node.literal.text;
    }
    if (
      node.literal.kind === ts.SyntaxKind.TrueKeyword ||
      node.literal.kind === ts.SyntaxKind.FalseKeyword
    ) {
      return node.literal.kind === ts.SyntaxKind.TrueKeyword;
    }
  }

  if (ts.isTypeReferenceNode(node)) {
    let name = "";
    if (ts.isIdentifier(node.typeName)) name = node.typeName.text;
    else name = node.typeName.getText();
    return { kind: "reference", name };
  }

  if (ts.isIndexedAccessTypeNode(node)) {
    // components["schemas"]["XXX"] 处理
    const objectType = schemaTypesToJson(node.objectType);
    const indexType = schemaTypesToJson(node.indexType);
    return { kind: "indexedAccess", objectType, indexType };
  }

  return ts.SyntaxKind[node.kind]; // fallback
}

// 用法示例：
/*
import fs from "fs";
const json = schemaTypesToJson(schemaTypes);
fs.writeFileSync("./schema.json", JSON.stringify(json, null, 2));
*/