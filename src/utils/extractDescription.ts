import ts from "typescript";

/** 提取 @description 注释 */
export function extractDescription(member: ts.PropertySignature): string | undefined {
  const tags = ts.getJSDocTags(member);
  for (const tag of tags) {
    if (tag.tagName.text === "description" && tag.comment) {
      const comment = tag.comment;
      if (typeof comment === "string") return comment.trim();
      if (Array.isArray(comment)) return comment.map(c => c.getText().trim()).join(" ");
    }
  }
  return undefined;
}
