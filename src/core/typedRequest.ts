// typedRequest.ts
import type { paths } from "../../openapi-ts/types.ts";

/* ---------------------------------- */
/* 1️⃣ 核心基础类型 */
/* ---------------------------------- */

type HttpMethod = Exclude<keyof paths[keyof paths], "parameters">;
//   | "get"
//   | "post"
//   | "put"
//   | "patch"
//   | "delete"
//   | "options"
//   | "head"
//   | "trace";

// Typed Request 层不关心序列化细节
export interface HttpRequest {
  url: string;
  method: HttpMethod | string;
  headers?: unknown;
  query?: unknown;
  body?: unknown;
}

// Adapter：完全自由
export interface HttpAdapter {
  request<R = unknown>(req: HttpRequest): Promise<R>;
}

/* ---------------------------------- */
/* 2️⃣ Response 类型推导（扁平化 union + data） */
/* ---------------------------------- */

export type ExtractJson<T> = T extends {
  content: { "application/json": infer R };
}
  ? R
  : never;

export type ResponseUnionFromResponses<R> = {
  [S in keyof R]: S extends number
    ? R[S] extends { content: any }
      ? { status: S; data: ExtractJson<R[S]> } // 有 content
      : { status: S; data: never } // 无 content
    : never;
}[keyof R];

// Path + Method → ResponseUnion（最终返回类型）
export type ResponseUnion<
  P extends keyof paths,
  M extends keyof paths[P],
> = paths[P][M] extends { responses: infer R }
  ? ResponseUnionFromResponses<R>
  : never;

/* ---------------------------------- */
/* 3️⃣ RequestArgs 推导 */
/* ---------------------------------- */

type ExtractParams<T> = T extends { parameters: infer P } ? P : {};

export type RequestArgs<
  P extends keyof paths,
  M extends keyof paths[P],
> = Partial<{
  path: ExtractParams<paths[P][M]> extends { path: infer Path } ? Path : never;
  query: ExtractParams<paths[P][M]> extends { query: infer Query }
    ? Query
    : never;
  header: ExtractParams<paths[P][M]> extends { header: infer Header }
    ? Header
    : never;
  cookie: ExtractParams<paths[P][M]> extends { cookie: infer Cookie }
    ? Cookie
    : never;
  body: paths[P][M] extends { requestBody: infer Body }
    ? ExtractJson<Body>
    : never;
}>;

/* ---------------------------------- */
/* 4️⃣ Typed Request 核心实现 */
/* ---------------------------------- */

export function createRequester(adapter: HttpAdapter) {
  return async function request<
    P extends keyof paths,
    M extends keyof paths[P],
  >(
    path: P,
    method: M,
    args?: RequestArgs<P, M>
  ): Promise<ResponseUnion<P, M>> {
    let url = path as string;

    // 替换 path 参数
    if (args?.path) {
      for (const key in args.path) {
        url = url.replace(
          `{${key}}`,
          encodeURIComponent(String((args.path as any)[key]))
        );
      }
    }

    const httpReq: HttpRequest = {
      url,
      method: method as HttpMethod,
      query: args?.query,
      headers: args?.header,
      body: args?.body,
    };

    // 假设 Adapter 返回 {status, data} 形式，直接 cast 为 ResponseUnion
    const res = await adapter.request(httpReq);
    return res as ResponseUnion<P, M>;
  };
}
