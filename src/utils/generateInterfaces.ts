// 定义 Schema 属性类型
interface SchemaProperty {
  $ref?: string;
  type?: "string" | "integer" | "number" | "boolean" | "array" | "object";
  items?: {
    type?: "string" | "integer" | "number" | "boolean" | "object";
    properties?: Record<string, SchemaProperty>;
  };
  properties?: Record<string, SchemaProperty>;
  description?: string;
  example?: any;
}

function generateInterfacesFromSchemas(
  schemas: Record<string, any>
): string {
  let result = "";

  // 递归生成 interface
  function generate(schemaName: string, schema: any, parentName?: string) {
    if (!schema || schema.type !== "object" || !schema.properties) return;

    const required = new Set(schema.required || []);
    const interfaceName = parentName ? `${parentName}_${schemaName}` : schemaName;

    result += `export interface ${interfaceName} {\n`;

    for (const [propName, propSchema] of Object.entries(schema.properties)) {
      let tsType = "any";
      let optional = !required.has(propName) ? "?" : "";
      const schemaProp = propSchema as SchemaProperty;

      if (!schemaProp) tsType = "any";
      else if (schemaProp.$ref) {
        // 处理 $ref 简单方式
        tsType = schemaProp.$ref.split("/").pop() || "any";
      } else if (schemaProp.type === "string") tsType = "string";
      else if (schemaProp.type === "integer" || schemaProp.type === "number")
        tsType = "number";
      else if (schemaProp.type === "boolean") tsType = "boolean";
      else if (schemaProp.type === "array") {
        if (schemaProp.items?.type === "object") {
          // 数组嵌套对象
          const nestedName = `${interfaceName}_${propName}`;
          tsType = `${nestedName}[]`;
          generate(propName, schemaProp.items, interfaceName); // 递归
        } else if (
          schemaProp.items?.type === "string" ||
          schemaProp.items?.type === "integer" ||
          schemaProp.items?.type === "number" ||
          schemaProp.items?.type === "boolean"
        ) {
          const itemType =
            schemaProp.items.type === "integer" || schemaProp.items.type === "number"
              ? "number"
              : schemaProp.items.type === "boolean"
              ? "boolean"
              : "string";
          tsType = `${itemType}[]`;
        } else tsType = "any[]";
      } else if (schemaProp.type === "object") {
        // 嵌套对象
        const nestedName = `${interfaceName}_${propName}`;
        tsType = nestedName;
        generate(propName, schemaProp, interfaceName); // 递归
      }

      // JSDoc
      let description = schemaProp.description
        ? ` * @description ${schemaProp.description}\n`
        : "";
      let example =
        schemaProp.example !== undefined
          ? ` * @example ${schemaProp.example}\n`
          : "";

      if (description || example) {
        result += `  /**\n${description}${example}  */\n`;
      }

      result += `  ${propName}${optional}: ${tsType};\n`;
    }

    result += `}\n\n`;
  }

  for (const [schemaName, schema] of Object.entries(schemas)) {
    generate(schemaName, schema);
  }

  return result;
}

export { generateInterfacesFromSchemas };
