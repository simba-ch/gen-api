// 约束请求方法和参数类型，适配 OpenAPI 3.0.x 标准

import type { paths } from "../../openapi-ts/types-hr.ts";

/* ---------------------------------- */
/* 0️⃣ 工具类型 */
/* ---------------------------------- */

type IsNeverOrUndefined<T> = [T] extends [never]
  ? true
  : undefined extends T
    ? true
    : false;

/**
 * 过滤掉：
 * - parameters
 * - 值为 never 的 method（get?: never）
 */
type ValidMethods<P extends keyof paths> = {
  [M in keyof paths[P]]: M extends "parameters"
    ? never
    : IsNeverOrUndefined<paths[P][M]> extends true
      ? never
      : M;
}[keyof paths[P]];

/* ---------------------------------- */
/* 1️⃣ 核心基础类型 */
/* ---------------------------------- */

/**
 * 所有 path 上真实存在的 Http Method
 */
export type HttpMethod = {
  [P in keyof paths]: ValidMethods<P>;
}[keyof paths];

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
/* 2️⃣ Response 类型推导 */
/* ---------------------------------- */

export type ExtractJson<T> = T extends {
  content: { "application/json": infer R };
}
  ? R
  : never;

export type ResponseUnionFromResponses<R> = {
  [S in keyof R]: S extends number
    ? R[S] extends { content: any }
      ? { status: S; data: ExtractJson<R[S]> }
      : { status: S; data: never }
    : never;
}[keyof R];

export type ResponseUnion<
  P extends keyof paths,
  M extends ValidMethods<P>,
> = paths[P][M] extends { responses: infer R }
  ? ResponseUnionFromResponses<R>
  : never;

/* ---------------------------------- */
/* 3️⃣ RequestArgs 推导 */
/* ---------------------------------- */

type ExtractParams<T> = T extends { parameters: infer P } ? P : {};

export type RequestArgs<
  P extends keyof paths,
  M extends ValidMethods<P>,
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
    M extends ValidMethods<P>,
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

    const res = await adapter.request(httpReq);
    return res as ResponseUnion<P, M>;
  };
}
