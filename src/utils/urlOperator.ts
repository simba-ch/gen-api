import { QuerySerializer } from "@shared-types/client.ts";

export function removeTrailingSlash(url: string) {
    if (url.endsWith("/")) {
        return url.substring(0, url.length - 1);
    }
    return url;
}

export function createFinalURL<O>(pathname: string, options: {
    baseUrl: string;
    params: {
        query?: Record<string, unknown>;
        path?: Record<string, unknown>;
    };
    querySerializer: QuerySerializer<O>;
}) {
    let finalURL = `${options.baseUrl}${pathname}`;
    if (options.params?.path) {
        finalURL = defaultPathSerializer(finalURL, options.params.path);
    }
    let search = options.querySerializer(options.params?.query ?? {});
    if (search.startsWith("?")) {
        search = search.substring(1);
    }
    if (search) {
        finalURL += `?${search}`;
    }
    return finalURL;
}


const PATH_PARAM_RE = /\{[^{}]+\}/g;

export function defaultPathSerializer(pathname: string, pathParams: Record<string, unknown>) {
    let nextURL = pathname;
    for (const match of pathname.match(PATH_PARAM_RE) ?? []) {
        let name = match.substring(1, match.length - 1);
        let explode = false;
        let style: 'simple' | "label" | "matrix" = "simple";
        if (name.endsWith("*")) {
            explode = true;
            name = name.substring(0, name.length - 1);
        }
        if (name.startsWith(".")) {
            style = "label";
            name = name.substring(1);
        } else if (name.startsWith(";")) {
            style = "matrix";
            name = name.substring(1);
        }
        if (!pathParams || pathParams[name] === undefined || pathParams[name] === null) {
            continue;
        }
        const value = pathParams[name];
        if (Array.isArray(value)) {
            nextURL = nextURL.replace(match, serializeArrayParam(name, value, { style, explode }));
            continue;
        }
        if (value && typeof value === "object") {
            nextURL = nextURL.replace(match, serializeObjectParam(name, value, { style, explode }));
            continue;
        }
        if (style === "matrix") {
            nextURL = nextURL.replace(match, `;${serializePrimitiveParam(name, value)}`);
            continue;
        }
        nextURL = nextURL.replace(match, style === "label" ? `.${encodeURIComponent(value)}` : encodeURIComponent(value));
    }
    return nextURL;
}


export function serializeArrayParam(nam: string, value: unknown[], options: {
    style: "simple" | "label" | "matrix" | "form" | "spaceDelimited" | "pipeDelimited";
    explode: boolean;
    allowReserved?: boolean;
},) {
    if (!Array.isArray(value)) {
        return "";
    }

    // explode: false
    if (options.explode === false) {
        const joiner = { form: ",", spaceDelimited: "%20", pipeDelimited: "|" }[options.style] || ","; // note: for arrays, joiners vary wildly based on style + explode behavior
        const final = (options.allowReserved === true ? value : value.map((v) => encodeURIComponent(v))).join(joiner);
        switch (options.style) {
            case "simple": {
                return final;
            }
            case "label": {
                return `.${final}`;
            }
            case "matrix": {
                return `;${name}=${final}`;
            }
            // case "spaceDelimited":
            // case "pipeDelimited":
            default: {
                return `${name}=${final}`;
            }
        }
    }

    // explode: true
    const joiner = { simple: ",", label: ".", matrix: ";" }[options.style] || "&";
    const values = [];
    for (const v of value) {
        if (options.style === "simple" || options.style === "label") {
            values.push(options.allowReserved === true ? v : encodeURIComponent(v));
        } else {
            values.push(serializePrimitiveParam(name, v, options));
        }
    }
    return options.style === "label" || options.style === "matrix"
        ? `${joiner}${values.join(joiner)}`
        : values.join(joiner);
}


export function serializeObjectParam(name: string, value: Record<string, unknown>, optionss: {
    style: "simple" | "label" | "matrix" | "form" | "deepObject";
    explode: boolean;
    allowReserved?: boolean;
}) {
    if (!value || typeof value !== "object") {
        return "";
    }
    const values = [];
    const joiner =
        {
            simple: ",",
            label: ".",
            matrix: ";",
        }[options.style] || "&";

    // explode: false
    if (options.style !== "deepObject" && options.explode === false) {
        for (const k in value) {
            values.push(k, options.allowReserved === true ? value[k] : encodeURIComponent(value[k]));
        }
        const final = values.join(","); // note: values are always joined by comma in explode: false (but joiner can prefix)
        switch (options.style) {
            case "form": {
                return `${name}=${final}`;
            }
            case "label": {
                return `.${final}`;
            }
            case "matrix": {
                return `;${name}=${final}`;
            }
            default: {
                return final;
            }
        }
    }

    // explode: true
    for (const k in value) {
        const finalName = options.style === "deepObject" ? `${name}[${k}]` : k;
        values.push(serializePrimitiveParam(finalName, value[k], options));
    }
    const final = values.join(joiner);
    return options.style === "label" || options.style === "matrix" ? `${joiner}${final}` : final;
}

export function serializePrimitiveParam(name: string, value: string, options?: { allowReserved?: boolean }) {
    if (value === undefined || value === null) {
        return "";
    }
    if (typeof value === "object") {
        throw new Error(
            "Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.",
        );
    }
    return `${name}=${options?.allowReserved === true ? value : encodeURIComponent(value)}`;
}