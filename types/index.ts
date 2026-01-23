import type { GeneratedOperation } from "@core/genRequest/operation.ts";
import type { OpenAPI3 } from "openapi-typescript";
import type Stream from "stream";

export type OpenAPISource =
  | string
  | URL
  | OpenAPI3
  | Buffer<ArrayBufferLike>
  | Stream.Readable;

export type OperationParams<O extends GeneratedOperation> = O["request"];

export type OperationResponse<O extends GeneratedOperation> = Promise<
  O["response"]
>;

// export interface HttpRequest {
//   url: string;
//   method: HttpMethod | string;
//   headers?: Record<string, string>;
//   query?: Record<string, any>;
//   body?: unknown;
// }

// export interface HttpAdapter {
//   request<R = unknown>(req: HttpRequest): Promise<R>;
// }
