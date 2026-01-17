import type { OpenAPI3 } from "openapi-typescript";
import type Stream from "stream";

export type OpenAPISource =
  | string
  | URL
  | OpenAPI3
  | Buffer<ArrayBufferLike>
  | Stream.Readable;
