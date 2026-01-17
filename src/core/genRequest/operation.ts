// core/operation.ts

/**
 * 定义 GeneratedOperation 类型
 *
 * 功能：
 * - 封装单个 API 的请求参数和响应类型
 * - request 包含 query、body、headers
 * - response 定义返回值类型
 *
 * 用途：
 * - 为 endpoints 生成的类型提供结构化 TS 类型
 */


export interface GeneratedOperation<Req = unknown, Res = unknown> {
  request: {
    query?: Req extends { query: infer Q } ? Q : unknown;
    body?: Req extends { body: infer B } ? B : unknown;
    headers?: Req extends { headers: infer H } ? H : unknown;
  };
  response: Res;
}
