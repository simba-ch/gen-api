function safeStringify(obj: any, space = 2) {
  const seen = new WeakSet();

  return JSON.stringify(
    obj,
    (_, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) return "[Circular]";
        seen.add(value);
      }

      // 过滤函数 / AST / Buffer 等
      if (typeof value === "function") return undefined;
      if (value instanceof Buffer) return "[Buffer]";

      return value;
    },
    space
  );
}

export { safeStringify };
