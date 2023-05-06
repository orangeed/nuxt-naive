import { defineNuxtConfig } from "nuxt"
import Components from "unplugin-vue-components/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"

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
    },
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
      meta: [{ name: "referrer", content: "no-referrer" }],
      script: [
        {
          type: "text/javascript",
          src: "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",
          body: true //<script>是否在body中
        }
      ]
    }
  }
})
