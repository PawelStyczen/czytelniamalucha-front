// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const env = loadEnv(mode, process.cwd(), "");
const apiBase =
  env.API_BASE_URL || env.CHECKOUT_API_BASE || "http://localhost:7071";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      proxy: {
        "/api": {
          target: apiBase,
          changeOrigin: true,
        },
      },
    },
  },
});
