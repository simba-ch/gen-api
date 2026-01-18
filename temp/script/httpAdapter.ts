import type { HttpAdapter, HttpRequest } from "@core/genRequest/types.ts";

export const fetchAdapter: HttpAdapter = {
  async request<R>(req: HttpRequest) {
    const res = await fetch(req.url, {
      method: req.method,
      headers: req.headers as any,
      body: req.body !== undefined ? JSON.stringify(req.body) : undefined,
    });

    const data = await res.json().catch(() => undefined);

    return {
      status: res.status,
      data,
    } as unknown as R;
  },
};
