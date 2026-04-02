// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

// https://astro.build/config
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const checkoutApiBase = env.CHECKOUT_API_BASE ?? "http://localhost:7071";

  return {
    vite: {
      server: {
        proxy: {
          "/api": {
            target: checkoutApiBase,
            changeOrigin: true,
          },
        },
      },
    },
  };
});
