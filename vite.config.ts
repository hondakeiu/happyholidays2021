import { defineConfig } from "vite";
import path from "path";
import handlebars from "vite-plugin-handlebars";

/**
 * htmlファイルのモジュール化目的で[handlebars](https://handlebarsjs.com/)を使う
 * - `vite-plugin-handlebars`: Vite向けhandlebarsプラグイン
 */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: path.resolve(__dirname, "./src/partials/"),
      context: {
        data: {
          productionRoot: "", //ここは本番ドメインのルートを記載するところ
        },
      },
      helpers: {
        array: (...args) => args.slice(0, -1),
        equals: (a: unknown, b: unknown): boolean => a === b,
        capitalize: (value) => value.toUpperCase(),
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, "./index.html"),
      },
    },
  },
  server: {
    host: true,
  },
});
