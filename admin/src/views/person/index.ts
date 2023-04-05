import { Ref, defineComponent, reactive, toRefs } from "vue"
import { getUserInfo, updateUserInfo } from "../../server/person"
import { UserForm } from "../../types/views/person.type"
import { ElMessage } from "element-plus"
import { getStorge } from "../../utils/storage"

export default defineComponent({
  name: "person",
  components: {},
  setup() {
    const userForm: UserForm = reactive({
      zhihuAddress: "",
      wxAddress: "",
      GitHubAddress: "",
      intro: "",
      avatar: "",
      name: "",
      id: ""
    })

    Object.assign(userForm, getStorge("USERINFO"))

    // 编辑
    const isEdit: Ref<boolean> = ref(false)
    const handleEditORSave = () => {
      if (isEdit.value) {
        // 保存
        updateUserInfo(userForm).then((res) => {
          ElMessage.success(res.message)
        })
      } else {
        isEdit.value = !isEdit.value
      }
    }
    return {
      userForm,
      isEdit,
      handleEditORSave
    }
  }
})
