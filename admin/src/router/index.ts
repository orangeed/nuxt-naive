import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Layout from "../layout/index.vue"
import { routerMap } from "./routerMap"

export const basisRoutes: RouteRecordRaw[] = [
  {
    path: routerMap.login,
    name: routerMap.login,
    component: () => import("../views/login/index.vue"),
    meta: {
      hidden: true,
      affix: false
    }
  },
  {
    path: "/",
    component: Layout,
    name: "index",
    meta: {
      hidden: false,
      affix: false
    },
    redirect: routerMap.dashboard,
    children: [
      {
        path: routerMap.dashboard,
        name: routerMap.dashboard,
        component: () => import("../views/dashboard/index.vue"),
        meta: {
          hidden: false,
          affix: true, //是否显示在tagsview
          title: "dashboard"
        }
      },
      {
        path: routerMap.article,
        name: routerMap.article,
        meta: {
          hidden: false,
          affix: false,
          title: "文章列表"
        },
        redirect: routerMap.articleList,
        children: [
          {
            path: routerMap.articleList,
            name: routerMap.articleList,
            component: () => import("../views/article/articleList/index.vue"),
            meta: {
              hidden: false,
              affix: false, //是否显示在tagsview
              title: "文章列表"
            }
          },
          {
            path: routerMap.editArticle,
            name: routerMap.editArticle,
            component: () => import("../views/article/editArticle/index.vue"),
            meta: {
              hidden: false,
              affix: false, //是否显示在tagsview
              title: "编辑文章"
            }
          }
        ]
      },
      {
        path: routerMap.person,
        name: routerMap.person,
        component: () => import("../views/person/index.vue"),
        meta: {
          hidden: false,
          affix: true, //是否显示在tagsview
          title: "个人主页"
        }
      },
      {
        path: routerMap.read,
        name: routerMap.read,
        component: () => import("../views/read/index.vue"),
        meta: {
          hidden: false,
          affix: true, //是否显示在tagsview
          title: "图书馆"
        }
      },
      {
        path: routerMap.movies,
        name: routerMap.movies,
        component: () => import("../views/movies/index.vue"),
        meta: {
          hidden: false,
          affix: true, //是否显示在tagsview
          title: "电影/电视剧"
        }
      },
      {
        path: routerMap.project,
        name: routerMap.project,
        component: () => import("../views/project/index.vue"),
        meta: {
          hidden: false,
          affix: true, //是否显示在tagsview
          title: "个人项目"
        }
      }
    ]
  },

  {
    path: "/404",
    component: () => import("../views/error-page/404.vue"),
    name: "404",
    meta: {
      hidden: true,
      affix: false
    }
  },
  {
    path: "/401",
    component: () => import("../views/error-page/401.vue"),
    name: "401",
    meta: {
      hidden: true,
      affix: false
    }
  }

  // {
  //   path: "*",
  //   redirect: "/404",
  //   name: "404",
  //   meta: {
  //     hidden: true,
  //     affix: false,
  //   },
  // },
]

// export const asyncRoute = [
//   {
//     path: "/",
//     component: Layout,
//     name: "index",
//     meta: {
//       hidden: false,
//       affix: false,
//     },
//     redirect: "/dashboard",
//     children: [
//       {
//         path: "/dashboard",
//         name: "dashboard",
//         component: () => import("../views/dashboard/index.vue"),
//         meta: {
//           hidden: false,
//           affix: true, //是否显示在tagsview
//           title: "dashboard",
//         },
//       },
//       {
//         path: "categreg",
//         name: "categreg",
//         component: () => import("../views/home/index.vue"),
//         meta: {
//           hidden: false,
//           affix: false,
//           title: "多级菜单",
//         },
//         children: [
//           {
//             path: "/categregChild",
//             name: "categregChild",
//             component: () => import("../views/dashboard/index.vue"),
//             meta: {
//               hidden: false,
//               affix: false, //是否固定在tagsview
//               title: "三级菜单",
//             },
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: "/:pathMatch(.*)*",
//     name: "404",
//     meta: {
//       hidden: true,
//       affix: false,
//     },
//   },
// ];

const router = createRouter({
  history: createWebHistory(),
  routes: basisRoutes
})

export default router
