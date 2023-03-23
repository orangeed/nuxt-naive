import { defineComponent, reactive, Ref, toRefs } from "vue"
import { ArticleForm, FullScreen, PageConfig } from "../../../types/views/article.type"
import Pagination from "../../../components/Pagination/index.vue"
import { articleList, deleteArticle } from "../../../server/article"
import { Delete, Edit, Search, Refresh } from "@element-plus/icons-vue"
import { ElMessage, ElMessageBox } from "element-plus"
import { markRaw } from "vue"
import { useTable } from "../../../hooks/useTable"
import { stateList } from "../../../utils/enum"
import { useRouter } from "vue-router"
import { routerMap } from "../../../router/routerMap"

export default defineComponent({
  name: "ArticleList",
  components: { Pagination },
  setup() {
    // 搜索
    const articleForm: ArticleForm = reactive({
      articleName: "",
      beginTime: "",
      endTime: "",
      time: ""
    })

    const pageConfig: PageConfig = reactive({
      current: 1,
      pageSize: 10,
      total: 0
    })

    // 表格数据
    const tableData = ref([])
    const { _getTableData, _search, _reset, _sizeChange, _currentChange } = useTable(articleList, {
      pageSize: pageConfig.pageSize
    })

    // 绑定数据
    const handleBindData = async (fn: Function, val?: any) => {
      const result: any = await fn(val)
      console.log("result", result)
      tableData.value = result.list
      pageConfig.total = result.total
    }

    // 获取文章列表
    const handleGetFileData = () => {
      handleBindData(_getTableData)
    }
    handleGetFileData()

    // 搜索
    const handleSearch = () => {
      pageConfig.current = 1
      handleBindData(_search, { title: articleForm.articleName, beginTime: articleForm.beginTime, endTime: articleForm.endTime })
    }

    // 重置
    const handleReset = () => {
      articleForm.articleName = ""
      articleForm.beginTime = ""
      articleForm.endTime = ""
      articleForm.time = ""
      handleBindData(_reset)
    }

    // 切换一页显示的的数量
    const handleSizeChnage = (val: number) => {
      pageConfig.pageSize = val
      handleBindData(_sizeChange, val)
    }
    const handleCurrentChange = (val: number) => {
      pageConfig.current = val
      handleBindData(_currentChange, val)
    }

    // 选择搜索的时间
    const handleChangeTime = (val: any) => {
      articleForm.beginTime = articleForm.time[0]
      articleForm.endTime = articleForm.time[0]
    }

    // 编辑
    const router = useRouter()
    const handleEdit = (row: any) => {
      router.push({ path: routerMap.editArticle, query: { id: row.id } })
    }

    // 删除
    const handleDelete = (row: any) => {
      console.log("row", row)
      ElMessageBox.confirm("确认删除本篇文章吗？", "提示", {
        type: "error",
        icon: markRaw(Delete),
        confirmButtonText: "删除",
        confirmButtonClass: "deleteConfirm"
      })
        .then((res) => {
          console.log("delete", res)
          deleteArticle(row.id).then(() => {
            ElMessage.success("删除成功！")
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }

    const fullScreen: FullScreen | any = inject("FULL_SCREEN")

    return {
      articleForm,
      tableData,
      pageConfig,
      handleSearch,
      Delete,
      Edit,
      Search,
      Refresh,
      handleCurrentChange,
      handleSizeChnage,
      handleEdit,
      handleDelete,
      handleChangeTime,
      stateList,
      fullScreen,
      handleReset
    }
  }
})
