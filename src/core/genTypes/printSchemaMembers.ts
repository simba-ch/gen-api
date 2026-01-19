import ts from "typescript";
import { toSafeInterfaceName } from "@utils/toSafeInterfaceName.ts";
import { printNode } from "@utils/printNode.ts";
import { transformPropertyType } from "@utils/transformPropertyType.ts";
import fs from "fs/promises";
import path from "path";

function parsePropertyName(name: ts.PropertyName): string {

    if (ts.isComputedPropertyName(name)) {
        throw new Error("Computed property name is not supported in schema");
    }

    if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
        return name.text;
    }

    // 理论上到不了这里
    throw new Error("Unknown property name type");
}


export async function printSchemaMembers(componentsInterface: ts.InterfaceDeclaration, outputFile: string) {
    const schemasProp = componentsInterface.members.find(
        (m): m is ts.PropertySignature =>
            ts.isPropertySignature(m) &&
            ts.isIdentifier(m.name) &&
            m.name.text === "schemas"
    );

    if (!schemasProp?.type || !ts.isTypeLiteralNode(schemasProp.type)) {
        return;
    }
    const virtualSourceFile = ts.createSourceFile(
        "printSchemaMembers.ts",
        "",
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TS
    );
    // 注册安全名映射
    for (const member of schemasProp.type.members) {
        if (!ts.isPropertySignature(member) || !member.type) continue;
        const rawSchemaName = parsePropertyName(member.name);
        toSafeInterfaceName(rawSchemaName)
    }

    let interfaceCode = ''
    for (const member of schemasProp.type.members) {
        if (!ts.isPropertySignature(member) || !member.type) continue;
        const rawSchemaName = parsePropertyName(member.name);
        const safeSchemaName = toSafeInterfaceName(rawSchemaName)

        if (!safeSchemaName) continue;
        let iface: ts.Statement;
        let newMembers: ts.TypeElement[] = []
        if (member.type && ts.isTypeLiteralNode(member.type)) {
            newMembers = member.type.members.map((m) => {
                if (!ts.isPropertySignature(m) || !m.type) return m;

                return ts.factory.updatePropertySignature(
                    m,
                    m.modifiers,
                    m.name,
                    m.questionToken,
                    transformPropertyType(m.type)
                );
            });
        }


        if (ts.isTypeLiteralNode(member.type)) {
            iface = ts.factory.createInterfaceDeclaration(
                [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
                safeSchemaName,
                undefined,
                undefined,
                newMembers
            );
        } else {
            iface = ts.factory.createTypeAliasDeclaration(
                [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
                safeSchemaName,
                undefined,
                member.type,
            );
        }
        const rawSchemaNameComment = rawSchemaName != safeSchemaName ? `// 原始 schema 名称: "${rawSchemaName}"\n` : "";
        interfaceCode += rawSchemaNameComment + printNode(iface, virtualSourceFile) + "\n\n";
    }
    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    await fs.writeFile(outputFile, interfaceCode, 'utf-8');
}

