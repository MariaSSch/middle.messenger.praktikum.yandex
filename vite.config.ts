import { resolve } from "path";
import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";
import vitePluginPugPrecompile from "./vite-plugin-pug-precompile";

export default defineConfig ({
  plugins: [
    pugPlugin({ pretty: true }),
    vitePluginPugPrecompile(),
  ],
  base: "./",
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
