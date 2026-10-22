// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { loadEnv } from "vite";

const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const env = loadEnv(mode, process.cwd(), "");
const apiBase =
  env.API_BASE_URL || env.CHECKOUT_API_BASE || "http://localhost:7071";
const excludedSitemapPaths = new Set([
  "/checkout-placeholder",
  "/dziekujemy",
  "/platnosc-nieudana",
]);

// https://astro.build/config
export default defineConfig({
  site: "https://czytelniamalucha.pl",
  integrations: [
    sitemap({
      filter: (page) =>
        !excludedSitemapPaths.has(new URL(page).pathname.replace(/\/$/, "")),
    }),
  ],
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
