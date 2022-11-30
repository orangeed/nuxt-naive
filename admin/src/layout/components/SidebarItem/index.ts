/*
 * @Author: orange
 * @Date: 2022-10-24 15:56:57
 * @LastEditors: orange
 * @LastEditTime: 2022-11-30 13:47:16
 * @FilePath: \nuxt-naive\admin\src\layout\components\SidebarItem\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by orange, All Rights Reserved.
 */
import { isExternal } from "../../../utils/validate";
import path from "path-browserify";
import { defineComponent, reactive, toRefs, ref, Ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "SidebarItem",
  components: {},
  props: {
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: "",
    },
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  setup(prop) {
    const route = useRoute();
    const activeColor: Ref<string> = ref("orange");
    const resolvePath = (routePath: string) => {
      console.log("routePath", routePath);
      console.log("route", route.path);
      // if (routePath === route.path) {
      //   activeColor.value = 'orange';
      // }
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(prop.basePath)) {
        return prop.basePath;
      }
      return path.resolve(prop.basePath, routePath);
    };
    const theme = {
      color: "red",
    };
    return { resolvePath, activeColor, theme };
  },
});
