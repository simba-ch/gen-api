import { Client, ClientOptions, FetchResponse, MediaType, Middleware } from "@shared-types/client.ts";
import type { paths } from "@/gen/types/origin-types.ts";
import { HttpMethod } from "@core/typedRequest.ts";

export function createClient(clientOptions: ClientOptions): Client<paths, MediaType> {
    const {
        baseUrl = "",
        Request: CustomRequest = globalThis.Request,
        fetch: baseFetch = globalThis.fetch,
        querySerializer: globalQuerySerializer,
        bodySerializer: globalBodySerializer,
        headers: baseHeaders,
        requestInitExt = undefined,
        ...baseOptions
    } = clientOptions


    return {
        async request(method, url, ...init) {
            return coreFetch({
                method,
                url: baseUrl + url,
                ...init
            });
        },
        async get(url, ...init) {
            throw new Error("Function not implemented.");
        },
        async put(url, ...init) {
            throw new Error("Function not implemented.");
        },
        async post(url, ...init) {
            throw new Error("Function not implemented.");
        },
        async delete(url, ...init) {
            throw new Error("Function not implemented.");
        },
        async options(url, ...init) {
            throw new Error("Function not implemented.");
        },
        async head(url, ...init) {
            throw new Error("Function not implemented.");
        },
        async patch(url, ...init) {
            throw new Error("Function not implemented.");
        },
        async trace(url, ...init) {
            throw new Error("Function not implemented.");
        },
        use(...middleware) {
            throw new Error("Function not implemented.");
        },
        eject(...middleware) {
            throw new Error("Function not implemented.");
        },
    };
}

const globalMiddleware: Middleware[] = [];

type coreFetchParams = {
    method: string;
    url: string;
    init?: RequestInit | undefined;
};
async function coreFetch(params: coreFetchParams) {

    return {

    } as FetchResponse<any, any, MediaType>;
}