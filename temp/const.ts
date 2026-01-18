import path from "node:path";
import { fileURLToPath } from "node:url";

// 当前文件路径
export const __filename = fileURLToPath(import.meta.url);
// 当前文件目录
export const __dirname = path.dirname(__filename);
