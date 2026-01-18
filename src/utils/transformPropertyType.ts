import ts from "typescript";
import { isComponentsSchemaRef } from "./isComponentsSchemaRef.ts";
import { getSchemaNameFromComponentsRef } from "./getSchemaNameFromComponentsRef.ts";
import { safeNameMap } from "./toSafeInterfaceName.ts";
export function transformPropertyType(
    type: ts.TypeNode
): ts.TypeNode {
    // components["schemas"]["X"]
    if (isComponentsSchemaRef(type)) {
        const schemaName = getSchemaNameFromComponentsRef(type);
        const safeSchemaName = safeNameMap.get(schemaName) ?? schemaName;
        return ts.factory.createTypeReferenceNode(safeSchemaName, undefined);
    }

    // 可扩展：数组 / union / nullable
    if (ts.isArrayTypeNode(type)) {
        return ts.factory.createArrayTypeNode(
            transformPropertyType(type.elementType)
        );
    }

    if (ts.isUnionTypeNode(type)) {
        return ts.factory.createUnionTypeNode(
            type.types.map(transformPropertyType)
        );
    }

    return type;
}

