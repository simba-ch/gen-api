import { createRequester } from "./typedRequest.ts";
import type { HttpAdapter } from "./typedRequest.ts";
const mockAdapter: HttpAdapter = {
  async request(req) {
    console.log("HTTP Adapter called:", req);
    return { status: 200, data: { id: 1, title: "mock" } } as any;
  },
};

export const request = createRequester(mockAdapter);
