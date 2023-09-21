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
        // changepass: resolve(__dirname, "src/pages/change-pass/index.html"),
        // changeprofile: resolve(__dirname, "src/pages/change-profile/index.html"),
        // chats: resolve(__dirname, "src/pages/chats/index.html"),
        // error404: resolve(__dirname, "src/pages/error404/index.html"),
        // error500: resolve(__dirname, "src/pages/error500/index.html"),
        // login: resolve(__dirname, "src/pages/login/index.html"),
        // profile: resolve(__dirname, "src/pages/profile/index.html"),
        // registration: resolve(__dirname, "src/pages/registration/index.html"),
      },
    },
  },
});
