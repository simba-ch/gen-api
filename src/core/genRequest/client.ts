// core/client.ts
/**
 * 创建 HTTP 客户端实例
 *
 * 功能：
 * - 接收一个 HttpAdapter（可用 fetch、axios 或自定义实现）
 * - 提供 request 方法，接收 path、method、params（body、query、headers）
 * - 自动调用 buildUrl 构建完整请求 URL
 * - 返回类型严格的 Promise 响应
 *
 * 用途：
 * - endpoints 文件内部调用 client.request 发送请求
 */


import type { paths } from "../../../openapi-ts/types";
import type { HttpAdapter, OperationParams, OperationResponse } from "./types";
import { buildUrl } from "./buildUrl";

export function createClient(adapter: HttpAdapter) {
  return {
    request: async <P extends keyof paths, M extends keyof paths[P]>(
      path: P,
      method: M,
      params: OperationParams<paths[P][M]>
    ): Promise<OperationResponse<paths[P][M]>> => {
      return adapter.request({
        url: buildUrl(path as string, params?.path as any, params?.query as any),
        method: method as string,
        body: params?.body,
        headers: params?.headers,
      });
    },
  };
}
