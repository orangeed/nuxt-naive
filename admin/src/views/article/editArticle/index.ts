import { defineComponent, reactive, toRefs } from "vue";
import MarkdownEditor from "../../../components/MarkdownEditor";
import { createActicle } from "../../../server/article";
import { Data } from "../../../types/views/article.type";
export default defineComponent({
  name: "EditArticle",
  components: { MarkdownEditor },
  setup() {
    const data: Data = reactive({
      markDownInfo: {
        title: "",
        author: "",
        tags: [],
        content: "",
      },
      editorText: " ",
    });

    const tagList = [
      {
        value: 0,
        label: "JS/TS",
      },
      {
        value: 1,
        label: "Vue",
      },
      {
        value: 2,
        label: "生活",
      },
    ];

    // 如果编辑的话,请求接口，获取数据
    const handleGetMarkdownInfo = () => {
      data.editorText = "";
    };
    // handleGetMarkdownInfo();

    // 保存
    const markdownEditor: any = ref(null);
    const handleSave = () => {
      console.log("保存", data.markDownInfo);
      createActicle({
        title: data.markDownInfo.title,
        author: data.markDownInfo.author,
        tags: data.markDownInfo.tags,
        content: data.markDownInfo.content,
      }).then((res) => {
        console.log("handleSave", res);
      });
    };

    // 获取html
    const handleGetHtml = (val: any) => {
      console.log("获取html", val);
      data.markDownInfo.content = val;
    };
    return {
      ...toRefs(data),
      markdownEditor,
      handleSave,
      handleGetHtml,
      tagList,
    };
  },
});
