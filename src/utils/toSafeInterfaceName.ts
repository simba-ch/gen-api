
const safeNameMap = new Map<string, string>();
export function toSafeInterfaceName(name: string): string {
  let safe = name.replace(/\?$/, "Optional").replace(/[^\w$]/g, "_");
  if (/^\d/.test(safe)) safe = `Safe_Type_${safe}`;
  safeNameMap.set(name, safe);
  return safe;
}


export {
  safeNameMap
}