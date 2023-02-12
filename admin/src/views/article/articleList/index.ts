import { defineComponent, reactive, Ref, toRefs } from "vue";
import { ArticleForm, PageConfig } from "../../../types/views/article.type";
import Pagination from "../../../components/Pagination/index.vue";
import { articleList } from "../../../server/article";
import { Delete, Edit } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { markRaw } from "vue";

export default defineComponent({
  name: "ArticleList",
  components: { Pagination },
  setup() {
    // 搜索
    const articleForm: ArticleForm = reactive({
      articleName: "",
      beginTime: "",
      endTime: "",
      time: "",
    });

    const pageConfig: PageConfig = reactive({
      current: 1,
      pageSize: 10,
      total: 0,
    });

    // 表格数据
    const tableData = ref([]);

    // 获取文章列表
    const handleGetArticleList = () => {
      const params = {
        current: pageConfig.current,
        pageSize: pageConfig.pageSize,
        articleName: articleForm.articleName,
        beginTime: articleForm.beginTime,
        endTime: articleForm.endTime,
      };
      articleList(params).then((res) => {
        console.log("获取文章列表", res);
        tableData.value = res.list;
        pageConfig.total = res.total;
      });
    };
    handleGetArticleList();

    // 翻页
    const handleCurrentChange = (val: number) => {
      pageConfig.current = val;
      handleGetArticleList();
    };

    // 分页数据改变
    const handleSizeChnage = (val: number) => {
      pageConfig.pageSize = val;
      handleGetArticleList();
    };

    // 选择搜索的时间
    const handleChangeTime = (val: any) => {
      articleForm.beginTime = articleForm.time[0];
      articleForm.endTime = articleForm.time[0];
    };

    // 搜索
    const handleSearch = () => {
      handleGetArticleList();
    };

    // 编辑
    // TODO 带上id到markdown编辑的页面
    const handleEdit = (row: any) => {
      console.log("编辑", row);
    };

    // 删除
    const handleDelete = (row: any) => {
      console.log("row", row);
      ElMessageBox.confirm("确认删除本篇文章吗？", "提示", {
        type: "error",
        icon: markRaw(Delete),
        confirmButtonText: "删除",
        confirmButtonClass: "deleteConfirm",
      })
        .then((res) => {
          console.log("delete", res);
          ElMessage.success("删除成功！");
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      articleForm,
      tableData,
      pageConfig,
      handleSearch,
      Delete,
      Edit,
      handleCurrentChange,
      handleSizeChnage,
      handleEdit,
      handleDelete,
      handleChangeTime,
    };
  },
});
