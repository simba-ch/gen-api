import { parseOpenapi } from "../../utils/parseOpenapi.ts";
import type { OpenAPISource } from "../../../types/index.d.ts";
export async function generateTypes(suorece: OpenAPISource) {
  const parseOption = {};
  const content = await parseOpenapi(suorece, parseOption);
  console.log("🚀 ~ generateTypes ~ content:", content);
}
