import { request } from "./core/httpAdapter.ts";

async function test() {
  const res = await request("/todos/{id}", "get", {
    path: { id: 1 },
  });
}

test();
