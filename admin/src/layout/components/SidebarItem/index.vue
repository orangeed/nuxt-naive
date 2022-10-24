<!-- SidebarItem -->
<template>
  <div v-if="!item.meta.hidden">
    <template v-if="!item.children || item.children.length === 0">
      <router-link :to="resolvePath(item.path)">
        <el-menu-item :index="resolvePath(item.path)">
          <el-icon>
            <component :is="item.meta && item.meta.icon" />
          </el-icon>
          <template #title>
            <span v-if="!isCollapse">{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </router-link>
    </template>

    <el-sub-menu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template #title>
        <el-icon>
          <component :is="item.meta && item.meta.icon" />
        </el-icon>
        <span v-if="!isCollapse">{{ item.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-sub-menu>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped></style>
