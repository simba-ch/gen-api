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
