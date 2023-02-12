<!-- Pagination -->
<template>
  <div class="flex justify-end">
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageConfig.current"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageConfig.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageConfig.total"
      background
    >
    </el-pagination>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>
.pagination {
  @apply fixed bottom-20;
}
</style>
