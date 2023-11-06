import { ElMessage } from "element-plus"
import { defineComponent, reactive, toRefs } from "vue"
import { useRoute } from "vue-router"
import MarkdownEditor from "../../../components/MarkdownEditor"
import { createActicle, findDetails, patchArticle } from "../../../server/article"
import { Data } from "../../../types/views/article.type"
import { stateList } from "../../../utils/enum"
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
        img: ""
      },
      editorText: " "
    })

    // 如果编辑的话,请求接口，获取数据
    const route = useRoute()
    const handleGetMarkdownInfo = () => {
      const id: any = route.query.id
      if (!id) return
      findDetails({ id }).then((res) => {
        data.editorText = res.data.content
        data.markDownInfo.title = res.data.title
        data.markDownInfo.author = res.data.author
        data.markDownInfo.img = res.data.img
        res.data.tags.forEach((v: number) => {
          stateList.forEach((item: any) => {
            if (item.value == v) {
              data.markDownInfo.tags.push(item.label)
            }
          })
        })
      })
    }
    handleGetMarkdownInfo()

    // 保存
    const markdownEditor: any = ref(null)
    const handleSave = () => {
      // 编辑
      if (route.query.id) {
        patchArticle({
          id: route.query.id,
          title: data.markDownInfo.title,
          author: data.markDownInfo.author,
          tags: data.markDownInfo.tags,
          content: data.markDownInfo.content,
          img: data.markDownInfo.img
        }).then((res) => {
          ElMessage.success(res.message)
        })
      } else {
        // 新增
        createActicle({
          title: data.markDownInfo.title,
          author: data.markDownInfo.author,
          tags: data.markDownInfo.tags,
          content: data.markDownInfo.content,
          img: data.markDownInfo.img
        }).then((res) => {
          ElMessage.success(res.message)
        })
      }
    }

    // 获取html
    const handleGetHtml = (val: any) => {
      data.markDownInfo.content = val
    }

    // onUnmounted(() => {
    //   data.markDownInfo.title = ""
    //   data.markDownInfo.author = ""
    //   data.markDownInfo.tags = []
    //   data.markDownInfo.content = ""
    //   data.markDownInfo.img = ""
    //   data.editorText = ""
    // })
    return {
      ...toRefs(data),
      markdownEditor,
      handleSave,
      handleGetHtml,
      stateList
    }
  }
})
