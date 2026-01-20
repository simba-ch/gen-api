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

export interface MiddlewareCallbackParams {}

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
