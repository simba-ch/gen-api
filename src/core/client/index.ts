import { Client, MediaType, Middleware } from "@shared-types/client.ts";
import type { paths } from "@/gen/types/origin-types.ts";

export function createClient(): Client<paths, MediaType> {
  return {
    async request(method, url, ...init) {
      throw new Error("Function not implemented.");
    },
    async get(url, ...options) {
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
