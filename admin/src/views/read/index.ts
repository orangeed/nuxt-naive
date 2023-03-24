import { defineComponent, reactive, Ref, toRefs } from "vue"
import { useTable } from "../../hooks/useTable"
import { createRead, findOneRead, readList, upDateOneRead, deleteOneRead } from "../../server/read"
import { FullScreen, PageConfig } from "../../types/views/article.type"
import { CreateBook, ReadForm } from "../../types/views/read.type"
import { Delete, Edit, Plus, Search, Refresh } from "@element-plus/icons-vue"
import { ElMessage, ElMessageBox } from "element-plus"
export default defineComponent({
  name: "Read",
  components: {},
  setup() {
    const readForm: ReadForm = reactive({
      title: ""
    })
    const pageConfig: PageConfig = reactive({
      current: 1,
      pageSize: 10,
      total: 0
    })
    // 抽屉
    const showDrawer: Ref<boolean> = ref(false)
    // 抽屉title
    const drawerTitle: Ref<string> = ref("")
    // 新增图书
    const createForm: CreateBook = reactive({
      name: "",
      author: "",
      img: "",
      time: "",
      introduction: "",
      content: ""
    })

    // 表格数据
    const tableData = ref([])
    const { _getTableData, _search, _reset, _sizeChange, _currentChange } = useTable(readList, {
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
      handleBindData(_search, { title: readForm.title })
    }

    // 重置
    const handleReset = () => {
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

    const fullScreen: FullScreen | any = inject("FULL_SCREEN")

    // 编辑
    const handleEdit = (row: any) => {
      console.log(row)
      showDrawer.value = true
      drawerTitle.value = "编辑"
      findOneRead(row.id).then((res) => {
        Object.assign(createForm, res.data)
      })
    }

    // 删除
    const handleDelete = (row: any) => {
      ElMessageBox.confirm("确认删除本篇文章吗？", "提示", {
        type: "error",
        icon: markRaw(Delete),
        confirmButtonText: "删除",
        confirmButtonClass: "deleteConfirm"
      })
        .then(() => {
          deleteOneRead(row.id).then((res) => {
            ElMessage.success(res.message)
            handleGetFileData()
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }

    // 上架图书
    const handleCreate = () => {
      showDrawer.value = true
      drawerTitle.value = "新增"
    }

    // 取消上架
    const handleCancel = () => {
      showDrawer.value = false
    }

    // 确认上架
    const handleCreateEnter = () => {
      // 编辑
      if (createForm.id) {
        upDateOneRead(createForm.id, createForm).then((res) => {
          showDrawer.value = false
          ElMessage.success(res.message)
          handleGetFileData()
          handleResetCreate()
        })
      } else {
        // 新增
        createRead(createForm).then((res) => {
          showDrawer.value = false
          ElMessage.success(res.message)
          handleGetFileData()
          handleResetCreate()
        })
      }
    }

    // 重置上架表单
    const handleResetCreate = () => {
      createForm.author = ""
      createForm.name = ""
      createForm.img = ""
      createForm.time = ""
      createForm.introduction = ""
      createForm.content = ""
    }

    return {
      readForm,
      handleSearch,
      handleReset,
      handleSizeChnage,
      handleCurrentChange,
      tableData,
      fullScreen,
      pageConfig,
      Delete,
      Edit,
      Plus,
      Search,
      Refresh,
      handleCreate,
      handleEdit,
      handleDelete,
      showDrawer,
      drawerTitle,
      createForm,
      handleCancel,
      handleCreateEnter
    }
  }
})
