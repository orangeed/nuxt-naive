<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
          class="no-redirect"
          >{{ item.meta.title }}</span
        >
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from "path-to-regexp";

// export default {
//   data() {
//     return {
//       levelList: null
//     }
//   },
//   watch: {
//     $route(route) {
//       // if you go to the redirect page, do not update the breadcrumbs
//       if (route.path.startsWith('/redirect/')) {
//         return
//       }
//       this.getBreadcrumb()
//     }
//   },
//   created() {
//     this.getBreadcrumb()
//   },
//   methods: {
//     getBreadcrumb() {
//       // only show routes with meta.title
//       let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
//       const first = matched[0]

//       if (!this.isDashboard(first)) {
//         matched = [{ path: '/dashboard', meta: { title: 'Dashboard' }}].concat(matched)
//       }

//       this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
//     },
//     isDashboard(route) {
//       const name = route && route.name
//       if (!name) {
//         return false
//       }
//       return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
//     },
//     pathCompile(path) {
//       // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
//       const { params } = this.$route
//       var toPath = pathToRegexp.compile(path)
//       return toPath(params)
//     },
//     handleLink(item) {
//       const { redirect, path } = item
//       if (redirect) {
//         this.$router.push(redirect)
//         return
//       }
//       this.$router.push(this.pathCompile(path))
//     }
//   }
// }
import {
  defineComponent,
  reactive,
  toRefs,
  watch,
  ref,
} from "@vue/composition-api";
export default defineComponent({
  name: "",
  components: {},
  setup(prop, { root }) {
    const levelList = ref(null);
    watch(
      () => root.$route,
      (route) => {
        if (route.path.startsWith("/redirect/")) {
          return;
        }
        getBreadcrumb();
      }
    );
    const getBreadcrumb = () => {
      // only show routes with meta.title
      let matched = root.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      const first = matched[0];

      if (!isDashboard(first)) {
        matched = [{ path: "/dashboard", meta: { title: "Dashboard" } }].concat(
          matched
        );
      }

      levelList.value = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    };
    const isDashboard = (route) => {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return (
        name.trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase()
      );
    };
    const pathCompile = (path) => {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route;
      const toPath = pathToRegexp.compile(path);
      return toPath(params);
    };
    const handleLink = (item) => {
      const { redirect, path } = item;
      if (redirect) {
        root.$router.push(redirect);
        return;
      }
      root.$router.push(this.pathCompile(path));
    };
    return { levelList };
  },
});
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
