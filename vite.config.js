import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";
import {resolve} from "path";

export default defineConfig ({
    plugins: [pugPlugin({pretty: true})],
    build: {
      outDir: resolve(__dirname, "dist"),
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          changepass: resolve(__dirname, 'src/pages/change-pass/index.html'),
          changeprofile: resolve(__dirname, 'src/pages/change-profile/index.html'),
          chats: resolve(__dirname, 'src/pages/chats/index.html'),
          error: resolve(__dirname, 'src/pages/error/index.html'),
          login: resolve(__dirname, 'src/pages/login/index.html'),
          profile: resolve(__dirname, 'src/pages/profile/index.html'),
          registration: resolve(__dirname, 'src/pages/registration/index.html'),
        },
      },
    }
})


