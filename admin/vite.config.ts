/*
 * @Author: orange
 * @Date: 2022-10-24 15:56:57
 * @LastEditors: orange
 * @LastEditTime: 2022-11-30 09:57:16
 * @FilePath: \nuxt-naive\admin\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2022 by orange, All Rights Reserved.
 */
// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 9008,
    proxy: {
      "/apis": {
        target: "http://127.0.0.1:4523/m1/603885-0-default/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apis/, ""),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        modifyVars: {},
        javascriptEnabled: true,
        additionalData: `@import "src/styles/var.scss";`,
      },
    },
  },
});
