import type { GeneratedOperation } from "@core/genRequest/operation.ts";
import type { OpenAPI3 } from "openapi-typescript";
import type Stream from "stream";

export type OpenAPISource =
  | string
  | URL
  | OpenAPI3
  | Buffer<ArrayBufferLike>
  | Stream.Readable;

export type Middleware =
  | {
    onRequest: MiddlewareOnRequest;
    onResponse?: MiddlewareOnResponse;
    onError?: MiddlewareOnError;
  }
  | {
    onRequest?: MiddlewareOnRequest;
    onResponse: MiddlewareOnResponse;
    onError?: MiddlewareOnError;
  }
  | {
    onRequest?: MiddlewareOnRequest;
    onResponse?: MiddlewareOnResponse;
    onError: MiddlewareOnError;
  };

export interface MiddlewareCallbackParams { }

type MiddlewareOnRequest = (
  options: MiddlewareCallbackParams,
) =>
  | void
  | Request
  | Response
  | undefined
  | Promise<Request | Response | undefined | void>;

type MiddlewareOnResponse = (
  options: MiddlewareCallbackParams & { response: Response },
) => void | Response | undefined | Promise<Response | undefined | void>;

type MiddlewareOnError = (
  options: MiddlewareCallbackParams & { error: unknown },
) => void | Response | Error | Promise<void | Response | Error>;


/**
 * 定义核心 HTTP 类型
 *
 * 包含：
 * - OperationParams<O>：从 GeneratedOperation 提取请求参数类型
 * - OperationResponse<O>：从 GeneratedOperation 提取响应类型（Promise 包装）
 * - HttpMethod：支持的 HTTP 方法类型
 * - HttpRequest：标准化请求对象
 * - HttpAdapter：抽象请求适配器接口
 *
 * 用途：
 * - client 和 endpoints 层的类型约束
 * - 支持跨端和不同请求库
 */

export type HttpMethod =
  | "get"
  | "post"
  | "put"
  | "patch"
  | "delete"
  | "options"
  | "head"
  | "trace";

export type OperationParams<O extends GeneratedOperation> = O["request"];

export type OperationResponse<O extends GeneratedOperation> = Promise<O["response"]>;



export interface HttpRequest {
  url: string;
  method: HttpMethod | string;
  headers?: Record<string, string>;
  query?: Record<string, any>;
  body?: unknown;
}

export interface HttpAdapter {
  request<R = unknown>(req: HttpRequest): Promise<R>;
}
