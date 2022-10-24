import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  computed,
  onMounted,
} from "vue";

import SidebarItem from "./components/SidebarItem/index.vue";

import TagsView from "./components/TagsView/index.vue";

import { setting } from "../settings";
import { useRoute } from "vue-router";
import { useDark, useToggle } from "@vueuse/core";

export default defineComponent({
  name: "",
  components: { SidebarItem, TagsView },
  setup() {
    const isDark = useDark();
    // 切换夜间和白天模式
    const toggleDark = useToggle(isDark);
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
          title: "多级菜单",
          icon: "HomeFilled",
        },
        children: [
          {
            path: "/categreg",
            meta: {
              hidden: false,
              title: "二级菜单",
            },
            children: [
              {
                path: "/categregChild",
                meta: {
                  hidden: false,
                  title: "三级菜单",
                },
              },
            ],
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
      isDark,
      toggleDark,
    };
  },
});
