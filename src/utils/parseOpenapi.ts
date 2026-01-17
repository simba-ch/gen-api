import openapiTS, { astToString, OpenAPITSOptions } from "openapi-typescript";

import type { OpenAPISource } from "../../types/index.d.ts";

export async function parseOpenapi(
  source: OpenAPISource,
  options?: OpenAPITSOptions
): Promise<string> {
  const ast = await openapiTS(source, options);
  return astToString(ast);
}
