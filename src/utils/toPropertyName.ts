import ts from "typescript";

export function toPropertyName(name: string | ts.PropertyName): ts.PropertyName {
    if (typeof name === "string") {
        return ts.factory.createIdentifier(name);
    }
    return name;
}
