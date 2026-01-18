import ts from "typescript";
import fs from "fs";
import { safeNameMap, toSafeInterfaceName } from "./toSafeInterfaceName.ts";
import { printNode } from "./parseOpenapi.ts";
import { transformPropertyType } from "./transformPropertyType.ts";

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


export function printSchemaMembers(componentsInterface: ts.InterfaceDeclaration) {
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
        // let newMember = member
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

        if (rawSchemaName != safeSchemaName) {
            // 需要更新接口名
            // newMember = ts.factory.updatePropertySignature(
            //     member,
            //     member.modifiers,
            //     ts.factory.createStringLiteral(schemaName),
            //     member.questionToken,
            //     member.type
            // );
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
        // if (!newMember.type || !ts.isTypeLiteralNode(newMember.type)) continue;

        // const iface = ts.factory.createInterfaceDeclaration(
        //     /* modifiers */[
        //         ts.factory.createModifier(ts.SyntaxKind.ExportKeyword),
        //     ],
        //     schemaName,
        //     /* typeParameters */ undefined,
        //     /* heritageClauses */ undefined,
        //     /* members */ newMember.type.members
        // );

        interfaceCode += printNode(iface, virtualSourceFile) + "\n\n";


    }
    fs.writeFileSync("./temp/types/schemas.ts", interfaceCode);
    // fs.writeFileSync('./temp/safeNameMap.json', JSON.stringify(safeNameMap, replacer));
}

