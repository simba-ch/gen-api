/**
 * 从路径生成 operationId
 * 例如: "/auth/login/check" + "post" -> "AuthLoginCheckController_post"
 */
export function generateOperationId(path: string, method: string): string {
  // 移除开头的 / 并按 / 分割
  const segments = path.replace(/^\//, "").split("/");

  // 将每个段转换为 PascalCase
  const pascalCaseParts = segments.map((segment) => {
    // 处理路径参数，例如 {id} -> by-id
    const cleanSegment = segment.replace(/\{(\w+)\}/g, "by-$1");

    // 转换为 PascalCase
    return cleanSegment
      .split(/[-_]/) // 支持 kebab-case 和 snake_case
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("");
  });

  // 拼接成最终格式
  return `${pascalCaseParts.join("")}Controller_${method}`;
}
