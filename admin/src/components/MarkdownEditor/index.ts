import { defineComponent, reactive, toRefs, watch } from "vue";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { emitter } from "../../utils/mitt";

export default defineComponent({
  name: "MarkdownEditor",
  components: { MdEditor },
  props: {
    editorText: {
      type: String,
      default: () => {
        return {};
      },
    },
  },
  emits: ["MARKDOWM_HTML"],
  setup(props, ctx) {
    const data = reactive({
      editorText: "1",
      isDark: true,
    });
    emitter.on("THEME", (val: any) => {
      data.isDark = val;
    });

    // 获取markdown数据
    const handleGetMarkdownHtml = (v: any, h: any) => {
      // h.then((html: any) => {
      //   ctx.emit("MARKDOWM_HTML", html);
      // });
      ctx.emit('MARKDOWM_HTML',data.editorText)
    };

    watch(
      () => props.editorText,
      (val: any) => {
        console.log("watch", val);
        if (val) {
          data.editorText = val;
        }
      },
      {
        immediate: true,
        deep: true,
      }
    );

    return {
      ...toRefs(data),
      handleGetMarkdownHtml,
    };
  },
});
