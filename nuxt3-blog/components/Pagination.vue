<!-- Pagination -->
<template>
  <n-pagination
    v-if="props.total > 0"
    v-model:page="props.pageNum"
    :page-size="props.pageSize"
    :page-count="Math.ceil(props.total / props.pageSize)"
    :page-sizes="[10, 20, 30, 40]"
    size="medium"
    show-quick-jumper
    show-size-picker
    :on-update:page="handleChangePageNum"
    :on-update:page-size="handleChangePageSize"
  />
</template>

<script setup lang="ts">
interface Props {
  pageNum: number
  pageSize: number
  total: number
}
const props = withDefaults(defineProps<Props>(), {
  pageNum: 1,
  pageSize: 10,
  total: 0
})

const emit = defineEmits(["CHANGE_PAGENUM", "CHANGE_PAGESIZE"])

const handleChangePageNum = (val: number | string) => {
  emit("CHANGE_PAGENUM", Number(val))
}

const handleChangePageSize = (val: number | string) => {
  emit("CHANGE_PAGESIZE", Number(val))
}
</script>

<style scoped></style>
