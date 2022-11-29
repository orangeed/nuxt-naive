import { defineComponent, reactive, toRefs, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { basisRoutes } from "../../../router/index";
import {
  LocationQueryRaw,
  RouteLocationPathRaw,
  RouteLocationNamedRaw,
} from "vue-router";

interface visitedViews {
  path: string;
  query: LocationQueryRaw;
  fullPath: RouteLocationPathRaw | RouteLocationNamedRaw;
  title: string;
}
interface Data {
  visitedViews: visitedViews[];
  cachedViews: [];
  affixTags: [];
}

export default defineComponent({
  name: "TagsView",
  components: {},
  props: {
    themeData: {
      type: Boolean,
      default: false,
    },
  },
  setup(prop) {
    const router = useRouter();
    const route = useRoute();
    const data: Data = reactive({
      visitedViews: [],
      cachedViews: [],
      affixTags: [],
    });
    const addVisitedView = (view: any) => {
      // if (data.visitedViews.some((v: any) => v.path === view.path)) return;
      if (data.visitedViews.some((v: any) => v.name === view.name)) return;
      data.visitedViews.push(
        // @ts-ignore
        Object.assign({}, view, {
          title: view.meta.title || "no-name",
        })
      );
      console.log("visitedViews", data.visitedViews);
    };

    const initTags = () => {
      data.affixTags = filterAffixTags(basisRoutes);
      const affixTags = data.affixTags;
      for (const tag of affixTags) {
        // @ts-ignore
        if (tag.name) {
          addVisitedView(tag);
        }
      }
    };

    const filterAffixTags = (routes: any, basePath = "/") => {
      let tags: any = [];
      routes.forEach((route: any) => {
        console.log("route", route);
        if (route.meta && route.meta.affix) {
          tags.push({
            fullPath: route.path,
            path: route.path,
            name: route.name,
            meta: { ...route.meta },
          });
        }
        if (route.children) {
          const tempTags = filterAffixTags(route.children, route.path);
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags];
          }
        }
      });
      return tags;
    };
    const isActive = (routeItem: any) => {
      // console.log("route.path", routeItem.path);
      // console.log("root.$route.path", route.path);
      // return routeItem.path === route.path;
      return route.path === routeItem.path;
    };
    const isAffix = (tag: any) => {
      return tag.meta && tag.meta.affix;
    };
    const closeSelectedTag = (view: any) => {
      for (const [i, v] of data.visitedViews.entries()) {
        // @ts-ignore
        if (v.path === view.path) {
          data.visitedViews.splice(i, 1);
          break;
        }
      }
      // @ts-ignore
      const index = data.cachedViews.indexOf(view.name);
      index > -1 && data.cachedViews.splice(index, 1);
      data.visitedViews = [...data.visitedViews];
      data.cachedViews = [...data.cachedViews];
      if (isActive(view)) {
        toLastView(data.visitedViews, view);
      }
    };

    const toLastView = (visitedView: any, view: any) => {
      const latestView = visitedView.slice(-1)[0];
      if (latestView) {
        router.push(latestView.fullPath);
      } else {
        // todo 这里可以随便改成哪一个需要的名称
        if (view.name === "dashboard") {
          router.replace({ path: "/redirect" + view.fullPath });
        } else {
          router.push("/");
        }
      }
    };
    initTags();
    watch(
      () => route,
      (val) => {
        console.log("val", val);
        addVisitedView(val);
      },
      {
        immediate: true,
        deep: true,
      }
    );
    return {
      ...toRefs(data),
      isActive,
      isAffix,
      closeSelectedTag,
    };
  },
});
