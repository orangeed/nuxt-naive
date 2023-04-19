/*
 * @Author: orange
 * @Date: 2022-10-11 21:56:20
 * @LastEditors: orange
 * @LastEditTime: 2022-12-04 17:13:10
 * @FilePath: \nuxt-naive\nuxt3-blog\nuxt.config.ts
 * @Description:
 *
 * Copyright (c) 2022 by orange, All Rights Reserved.
 */
import { defineNuxtConfig } from "nuxt"
import Components from "unplugin-vue-components/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile:
      process.env.NODE_ENV === "production"
        ? ["naive-ui", "vueuc", "@css-render/vue3-ssr", "@juggle/resize-observer"]
        : ["@juggle/resize-observer"],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  vite: {
    optimizeDeps: {
      include: process.env.NODE_ENV === "development" ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"] : []
    },
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()] // Automatically register all components in the `components` directory
      })
    ]
  },
  buildModules: ["@nuxtjs/style-resources"],
  css: ["~/styles/tailwind.css"],
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      // title: "橘子的分享",
      link: [
        {
          rel: "icon",
          href: "./assets/ico/logo.ico"
        }
      ],
      meta: [
        // { name: "description", content: "My amazing site." }
        { name: "referrer", content: "no-referrer" }
      ],
      script: [
        {
          type: "text/javascript",
          src: "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",
          body: true //<script>是否在body中
        }
      ]
    }
  }
  // index: {
  //   head: {
  //     title: "在线Excel文件转换成数组json格式数据-六月初工具站",
  //     meta: [
  //       {
  //         name: "keywords",
  //         content: "在线excle数据1"
  //       }
  //     ],
  //     script: [
  //       {
  //         type: "text/javascript",
  //         src: "https://code.jquery.com/jquery-3.1.1.min.js",
  //         body: true //<script>是否在body中
  //       }
  //     ]
  //   }
  // }
})
