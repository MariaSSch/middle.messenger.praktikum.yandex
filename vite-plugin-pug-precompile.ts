import { PluginOption } from "vite";
import pug from "pug";

export default function vitePluginPugPrecompile(): PluginOption {
  return {
    name: "vite-plugin-pug-precompile",
    transform(code, id) {
      if (id.endsWith(".pug")) {
        return {
          code: `
                    
                        ${pug.compileClient(code)};    

						export default template;
                    `,
        };
      }
    },
  };
}
