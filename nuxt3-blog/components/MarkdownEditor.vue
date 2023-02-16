<!-- MarkdownEditor -->
<template>
  <div id="editor">
    <MdEditor v-model="editorText" :previewOnly="true" :theme="theme === 'dark' ? 'dark' : 'light'" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, nextTick } from "vue"
import MdEditor from "md-editor-v3"
import "md-editor-v3/lib/style.css"
import { emitter } from "../utils/mitt"

export default defineComponent({
  name: "MarkdownEditor",
  components: { MdEditor },
  props: {
    editorText: {
      type: String,
      default: () => {
        return {}
      }
    }
  },
  setup() {
    const theme: Ref<string | null> = ref("")
    const color: Ref<string> = ref("")
    nextTick(() => {
      theme.value = window.localStorage.getItem("THEME")
      console.log("theme", theme.value)
    })
    emitter.on("theme", (themeItem: any) => {
      if (themeItem) {
        theme.value = "dark"
        color.value = "#101014"
      } else {
        theme.value = "light"
        color.value = ""
      }
    })
    return { theme, color }
  }
})
</script>
<style lang="scss" scoped>
#editor {
  height: 100%;
}
.md-editor {
  height: 100%;
}
:deep(.md-editor-dark) {
  background-color: v-bind("color") !important;
}
:deep(blockquote) {
  border-left-color: rgb(239, 112, 96) !important;
  background: #fff9f9 !important;
  display: block;
  font-size: 0.9em;
  overflow: auto;
  border-left: 3px solid rgba(0, 0, 0, 0.4);
  //   color: #6a737d;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
}
:deep(h2) {
  margin-top: 30px;
  margin-bottom: 15px;
  padding: 0px;
  font-weight: bold;
  color: black;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  border-bottom: 2px solid rgb(239, 112, 96);
  a {
    display: inline-block;
    font-weight: bold;
    background: rgb(239, 112, 96);
    color: #ffffff;
    padding: 3px 10px 1px;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    margin-right: 3px;
  }
}
:deep(h2::after) {
  display: inline-block;
  content: " ";
  vertical-align: bottom;
  border-bottom: 36px solid #efebe9;
  border-right: 20px solid transparent;
}
:deep(code) {
  color: rgb(239, 112, 96);
  font-size: 14px;
  word-wrap: break-word;
  padding: 2px 4px;
  border-radius: 4px;
  margin: 0 2px;
  background-color: rgba(27, 31, 35, 0.05);
  font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
  word-break: break-all;
}
</style>
