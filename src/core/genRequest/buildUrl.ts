// core/buildUrl.ts
/**
 * 构建请求 URL 的工具函数
 *
 * 功能：
 * - 将 path 中的占位符 `{param}` 替换为 pathParams 对应的值
 * - 拼接 query 参数，自动进行 encodeURIComponent
 * - 支持数组类型 query（会生成多个同名参数）
 *
 * 用途：
 * - 在 client 请求中生成完整 URL
 */


export function buildUrl(
  path: string,
  pathParams?: Record<string, string | number>,
  query?: Record<string, any>
) {
  let url = path;

  if (pathParams) {
    for (const key of Object.keys(pathParams)) {
      url = url.replace(`{${key}}`, encodeURIComponent(String(pathParams[key])));
    }
  }

  if (query && Object.keys(query).length > 0) {
    const search = new URLSearchParams();
    for (const key in query) {
      const value = query[key];
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((v) => search.append(key, String(v)));
        } else {
          search.append(key, String(value));
        }
      }
    }
    url += `?${search.toString()}`;
  }

  return url;
}
