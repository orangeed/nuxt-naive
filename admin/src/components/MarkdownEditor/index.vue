<!-- MarkdownEditor -->
<template>
  <div id="editor">
    <MdEditor
      v-model="editorText"
      :theme="isDark ? 'light' : 'dark'"
      @onSave="handleGetMarkdownHtml"
    />
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" scoped>
#editor {
  height: 100%;
}
.md-editor {
  height: 100%;
}
</style>
