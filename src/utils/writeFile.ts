import fs from "fs/promises";
import path from "path";

export async function writeFile(outputFile: string, content: string) {
  await fs.mkdir(path.dirname(outputFile), { recursive: true });
  await fs.writeFile(outputFile, content, "utf-8");
}
