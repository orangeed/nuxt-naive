import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  watch,
  computed,
  onMounted,
  provide,
  Ref,
} from "vue";

import SidebarItem from "./components/SidebarItem/index.vue";

import TagsView from "./components/TagsView/index.vue";

import { setting } from "../settings";
import { useRoute, useRouter } from "vue-router";
// import { useDark, useToggle } from "@vueuse/core";
import { getStorge, clearStorge } from "../utils/storage";
import { emitter } from "../utils/mitt";
import { changeTheme } from "../utils/changeTheme";

export default defineComponent({
  name: "",
  components: { SidebarItem, TagsView },
  setup() {
    // const isDark = useDark();
    // // 切换夜间和白天模式
    // const toggleDark = useToggle(isDark);
    const route = useRoute();
    // 这个菜单是后端返回的
    const permission_routes = [
      {
        path: "/dashboard",
        meta: {
          hidden: false,
          title: "首页",
          icon: "HomeFilled",
        },
      },
      {
        path: "/",
        meta: {
          hidden: false,
          title: "文章",
          icon: "document",
        },
        children: [
          {
            path: "/article/articleList",
            meta: {
              hidden: false,
              title: "文章列表",
            },
          },
          {
            path: "/article/editArticle",
            meta: {
              hidden: false,
              title: "编辑文章",
            },
          },
        ],
      },
    ];
    // 是否展开
    const isCollapse = ref(false);
    // 侧边菜单的宽度
    const asideWidth = ref("");
    asideWidth.value = setting.asideWidth;
    // 顶部菜单的高度
    const headerHight = ref("");
    headerHight.value = setting.headerHight;
    // 打开菜单
    const handleOpen = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    // 关闭菜单
    const handleClose = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    // 打开菜单的回调
    const handleShow = () => {
      isCollapse.value = false;
      asideWidth.value = "200px";
    };
    // 关闭菜单的回调
    const handleCloseMenu = () => {
      isCollapse.value = true;
      asideWidth.value = "64px";
    };
    // 给页面绑定的key
    const key = computed(() => {
      route.path;
    });
    // 当前点亮的菜单
    const activeMenu = computed(() => {
      const { meta, path } = route;
      if (meta?.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    });

    // watch(
    //   isDark,
    //   (val: any) => {
    //     console.log("vueuse-color-scheme", val);
    //     emitter.emit("THEME", val);
    //   },
    //   {
    //     deep: true,
    //     immediate: true,
    //   }
    // );

    // 切换显示模式
    const { themeData, handleChangeThemes } = changeTheme();
    emitter.emit("THEME", false);

    // 退出
    const router = useRouter();
    const handleLogout = () => {
      console.log("退出");
      clearStorge();
      router.replace("login");
    };

    // 去个人中心
    const handleGotoPerson = () => {
      router.push("/person");
    };

    return {
      isCollapse,
      asideWidth,
      handleOpen,
      handleClose,
      handleShow,
      handleCloseMenu,
      key,
      permission_routes,
      activeMenu,
      headerHight,
      setting,
      // isDark,
      // toggleDark,
      ...toRefs(themeData),
      handleChangeThemes,
      handleLogout,
      handleGotoPerson,
    };
  },
});
