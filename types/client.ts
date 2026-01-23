import { ErrorStatus, OkStatus } from "./http_status.ts";

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

export interface Client<Paths extends {}, Media extends MediaType = MediaType> {
  request: ClientRequestMethod<Paths, Media>;
  /** Call a GET endpoint */
  get: ClientMethod<Paths, "get", Media>;
  /** Call a PUT endpoint */
  put: ClientMethod<Paths, "put", Media>;
  /** Call a POST endpoint */
  post: ClientMethod<Paths, "post", Media>;
  /** Call a DELETE endpoint */
  delete: ClientMethod<Paths, "delete", Media>;
  /** Call a OPTIONS endpoint */
  options: ClientMethod<Paths, "options", Media>;
  /** Call a HEAD endpoint */
  head: ClientMethod<Paths, "head", Media>;
  /** Call a PATCH endpoint */
  patch: ClientMethod<Paths, "patch", Media>;
  /** Call a TRACE endpoint */
  trace: ClientMethod<Paths, "trace", Media>;
  /** Register middleware */
  use(...middleware: Middleware[]): void;
  /** Unregister middleware */
  eject(...middleware: Middleware[]): void;
}

export type ClientMethod<
  Paths extends Record<string, Record<HttpMethod, {}>>,
  Method extends HttpMethod,
  Media extends MediaType,
> = <
  Path extends PathsWithMethod<Paths, Method>,
  Init extends MaybeOptionalInit<Paths[Path], Method>,
>(
  url: Path,
  ...init: InitParam<Init>
) => Promise<FetchResponse<Paths[Path][Method], Init, Media>>;

export type ClientRequestMethod<
  Paths extends Record<string, Record<HttpMethod, {}>>,
  Media extends MediaType,
> = <
  Method extends HttpMethod,
  Path extends PathsWithMethod<Paths, Method>,
  Init extends MaybeOptionalInit<Paths[Path], Method>,
>(
  method: Method,
  url: Path,
  ...init: InitParam<Init>
) => Promise<FetchResponse<Paths[Path][Method], Init, Media>>;

export type MediaType = `${string}/${string}`;

export type PathsWithMethod<
  Paths extends {},
  PathnameMethod extends HttpMethod,
> = {
  [Pathname in keyof Paths]: Paths[Pathname] extends {
    [K in PathnameMethod]: any;
  }
    ? Pathname
    : never;
}[keyof Paths];

export type MaybeOptionalInit<Params, Location extends keyof Params> =
  RequiredKeysOf<FetchOptions<FilterKeys<Params, Location>>> extends never
    ? FetchOptions<FilterKeys<Params, Location>> | undefined
    : FetchOptions<FilterKeys<Params, Location>>;

export type FetchOptions<T> = RequestOptions<T> &
  Omit<RequestInit, "body" | "headers">;

type InitParam<Init> =
  RequiredKeysOf<Init> extends never
    ? [(Init & { [key: string]: unknown })?]
    : [Init & { [key: string]: unknown }];

export type RequiredKeysOf<T> =
  RequiredKeysOfHelper<T> extends undefined ? never : RequiredKeysOfHelper<T>;

type RequiredKeysOfHelper<T> = {
  // biome-ignore lint/complexity/noBannedTypes: `{}` is necessary here
  [K in keyof T]: {} extends Pick<T, K> ? never : K;
}[keyof T];

export type FetchResponse<
  T extends Record<string | number, any>,
  Options,
  Media extends MediaType,
> =
  | {
      data: ParseAsResponse<
        SuccessResponse<ResponseObjectMap<T>, Media>,
        Options
      >;
      error?: never;
      response: Response;
    }
  | {
      data?: never;
      error: ErrorResponse<ResponseObjectMap<T>, Media>;
      response: Response;
    };

export type ResponseObjectMap<T> = T extends { responses: any }
  ? T["responses"]
  : unknown;

export type SuccessResponse<
  T extends Record<string | number, any>,
  Media extends MediaType = MediaType,
> = GetResponseContent<T, Media, OkStatus>;

export type ParseAsResponse<T, Options> = Options extends {
  parseAs: ParseAs;
}
  ? BodyType<T>[Options["parseAs"]]
  : T;

export type ParseAs = keyof BodyType;

type BodyType<T = unknown> = {
  json: T;
  text: Awaited<ReturnType<Response["text"]>>;
  blob: Awaited<ReturnType<Response["blob"]>>;
  arrayBuffer: Awaited<ReturnType<Response["arrayBuffer"]>>;
  stream: Response["body"];
};

export type ErrorResponse<
  T extends Record<string | number, any>,
  Media extends MediaType = MediaType,
> = GetResponseContent<T, Media, ErrorStatus>;

export type GetResponseContent<
  T extends Record<string | number, any>,
  Media extends MediaType = MediaType,
  ResponseCode extends keyof T = keyof T,
> = ResponseCode extends keyof T
  ? {
      [K in ResponseCode]: T[K]["content"] extends Record<string, any>
        ? FilterKeys<T[K]["content"], Media> extends never
          ? T[K]["content"]
          : FilterKeys<T[K]["content"], Media>
        : K extends keyof T
          ? T[K]["content"]
          : never;
    }[ResponseCode]
  : never;

export type FilterKeys<Obj, Matchers> = Obj[keyof Obj & Matchers];

export type RequestOptions<T> = ParamsOption<T> &
  RequestBodyOption<T> & {
    baseUrl?: string;
    querySerializer?: QuerySerializer<T> | QuerySerializerOptions;
    bodySerializer?: BodySerializer<T>;
    parseAs?: ParseAs;
    fetch?: ClientOptions["fetch"];
    headers?: HeadersOptions;
    middleware?: Middleware[];
  };

export interface ClientOptions extends Omit<RequestInit, "headers"> {
  /** set the common root URL for all API requests */
  baseUrl?: string;
  /** custom fetch (defaults to globalThis.fetch) */
  fetch?: (input: Request) => Promise<Response>;
  /** custom Request (defaults to globalThis.Request) */
  Request?: typeof Request;
  /** global querySerializer */
  querySerializer?: QuerySerializer<unknown> | QuerySerializerOptions;
  /** global bodySerializer */
  bodySerializer?: BodySerializer<unknown>;
  headers?: HeadersOptions;
  /** RequestInit extension object to pass as 2nd argument to fetch when supported (defaults to undefined) */
  requestInitExt?: Record<string, unknown>;
}

export type HeadersOptions =
  | Required<RequestInit>["headers"]
  | Record<
      string,
      | string
      | number
      | boolean
      | (string | number | boolean)[]
      | null
      | undefined
    >;

export type QuerySerializerOptions = {
  /** Set serialization for arrays. @see https://swagger.io/docs/specification/serialization/#query */
  array?: {
    /** default: "form" */
    style: "form" | "spaceDelimited" | "pipeDelimited";
    /** default: true */
    explode: boolean;
  };
  /** Set serialization for objects. @see https://swagger.io/docs/specification/serialization/#query */
  object?: {
    /** default: "deepObject" */
    style: "form" | "deepObject";
    /** default: true */
    explode: boolean;
  };
  /**
   * The `allowReserved` keyword specifies whether the reserved characters
   * `:/?#[]@!$&'()*+,;=` in parameter values are allowed to be sent as they
   * are, or should be percent-encoded. By default, allowReserved is `false`,
   * and reserved characters are percent-encoded.
   * @see https://swagger.io/docs/specification/serialization/#query
   */
  allowReserved?: boolean;
};

export type ParamsOption<T> = T extends {
  parameters: any;
}
  ? RequiredKeysOf<T["parameters"]> extends never
    ? { params?: T["parameters"] }
    : { params: T["parameters"] }
  : DefaultParamsOption;

export interface DefaultParamsOption {
  params?: {
    query?: Record<string, unknown>;
  };
}

export type BodySerializer<T> = (body: OperationRequestBodyContent<T>) => any;

export type OperationRequestBodyContent<T> =
  FilterKeys<OperationRequestBodyMediaContent<T>, MediaType> extends never
    ?
        | FilterKeys<
            NonNullable<OperationRequestBodyMediaContent<T>>,
            MediaType
          >
        | undefined
    : FilterKeys<OperationRequestBodyMediaContent<T>, MediaType>;

export type OperationRequestBodyMediaContent<T> =
  IsOperationRequestBodyOptional<T> extends true
    ? ResponseContent<NonNullable<OperationRequestBody<T>>> | undefined
    : ResponseContent<OperationRequestBody<T>>;

export type OperationRequestBody<T> = "requestBody" extends keyof T
  ? T["requestBody"]
  : never;

export type IsOperationRequestBodyOptional<T> =
  RequiredKeysOf<PickRequestBody<T>> extends never ? true : false;
type PickRequestBody<T> = "requestBody" extends keyof T
  ? Pick<T, "requestBody">
  : never;
export type ResponseContent<T> = T extends { content: any }
  ? T["content"]
  : unknown;

export type QuerySerializer<T> = (
  query: T extends { parameters: any }
    ? NonNullable<T["parameters"]["query"]>
    : Record<string, unknown>,
) => string;

export type RequestBodyOption<T> =
  OperationRequestBodyContent<T> extends never
    ? { body?: never }
    : IsOperationRequestBodyOptional<T> extends true
      ? { body?: OperationRequestBodyContent<T> }
      : { body: OperationRequestBodyContent<T> };
