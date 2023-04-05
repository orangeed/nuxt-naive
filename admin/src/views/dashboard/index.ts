import axios from "axios"
import { defineComponent, reactive, Ref, toRefs } from "vue"
import { TimeArr, Dashboard, TodoList } from "../../types/views/dashboard.typs"
import { FullScreen } from "../../types/views/article.type"

export default defineComponent({
  name: "Dashboard",
  components: {},
  setup() {
    const timeArr: TimeArr[] = [
      {
        label: "早上好",
        range: 11
      },
      {
        label: "中午好",
        range: 13
      },
      {
        label: "下午好",
        range: 20
      },
      {
        label: "晚上好",
        range: 24
      }
    ]
    const timeText: Ref<string> = ref("")

    // 获取当前时间，显示问候语
    const handleGetTime = () => {
      const time = new Date().getHours()
      console.log(time)
      for (let i = 0; i < timeArr.length; i++) {
        const element = timeArr[i]
        if (time < element.range) {
          timeText.value = element.label
          break
        }
      }
      console.log("timeText", timeText)
    }
    handleGetTime()

    // 获取天气信息
    const data: Dashboard = reactive({
      weather: {
        updateTime: "",
        temp: "",
        feelsLike: "",
        icon: "",
        text: "",
        humidity: "",
        vis: ""
      }
    })
    const handleGetWeather = () => {
      axios({
        url: import.meta.env.VITE_WEATHER_URL,
        method: "GET"
      }).then((response: any) => {
        console.log("response", response.data.now)
        data.weather.updateTime = response.data.updateTime
        data.weather.temp = response.data.now.temp
        data.weather.feelsLike = response.data.now.feelsLike
        data.weather.icon = response.data.now.icon
        data.weather.text = response.data.now.text
        data.weather.humidity = response.data.now.humidity
        data.weather.vis = response.data.now.vis
      })
    }
    handleGetWeather()

    const fullScreen: FullScreen | any = inject("FULL_SCREEN")

    // 将要做
    const todoList: Ref<TodoList[]> = ref([])
    for (let i = 0; i < 10; i++) {
      todoList.value.push({
        label: `TODO-${i}`,
        status: 1,
        deleteRight: -100
      })
    }

    // 进行中
    const doingList: Ref<TodoList[]> = ref([])
    for (let i = 0; i < 10; i++) {
      doingList.value.push({
        label: `DOING-${i}`,
        status: 1,
        deleteRight: -100
      })
    }

    // 已完成
    const doList: Ref<TodoList[]> = ref([])
    for (let i = 0; i < 10; i++) {
      doList.value.push({
        label: `DONE-${i}`,
        status: 1,
        deleteRight: -100
      })
    }

    // 删除
    const currentListItem: TodoList = reactive({
      label: "",
      status: 1,
      deleteRight: -100
    })
    // 删除-鼠标按下事件
    const handleMouseDown = (item: any) => {
      Object.assign(currentListItem, item)
      document.getElementById(item.label)?.addEventListener("mousemove", handerle, false)
    }
    // 删除-鼠标松开事件
    const handleMouseUp = (e: any) => {
      document.getElementById(currentListItem.label)?.removeEventListener("mousemove", handerle, false)
      const type = currentListItem.label.split("-")[0]
      if (type === "TODO") {
        todoList.value.forEach((v) => {
          if (v.label === currentListItem.label) {
            if (v.deleteRight < -10) {
              v.deleteRight = -100
            }
          }
        })
      } else if (type === "DOING") {
        doingList.value.forEach((v) => {
          if (v.label === currentListItem.label) {
            if (v.deleteRight < -10) {
              v.deleteRight = -100
            }
          }
        })
      } else {
        doList.value.forEach((v) => {
          if (v.label === currentListItem.label) {
            console.log('v',v);
            if (v.deleteRight < -10) {
              v.deleteRight = -100
            }
          }
        })
      }
    }
    // 移动事件
    const handerle = (e: any) => {
      const type = currentListItem.label.split("-")[0]
      if (type === "TODO") {
        const right = document.getElementById(currentListItem.label)?.clientWidth! - e.pageX + 20
        todoList.value.forEach((v) => {
          if (v.label === currentListItem.label) {
            if (right <= 0) {
              v.deleteRight = right
            }
          }
        })
      } else if (type === "DOING") {
        const right = document.getElementById(currentListItem.label)?.clientWidth! - e.pageX / 2 + 20
        doingList.value.forEach((v) => {
          if (v.label === currentListItem.label) {
            if (right <= 0) {
              v.deleteRight = right
            }
          }
        })
      } else {
        const right = document.getElementById(currentListItem.label)?.clientWidth! - e.pageX / 3 + 20
        console.log('right',right);
        doList.value.forEach((v) => {
          if (v.label === currentListItem.label) {
            if (right <= 0) {
              v.deleteRight = right
            }
          }
        })
      }
    }

    watch(
      () => data.weather,
      (val) => {
        if (val) {
          console.log("val", val)
        }
      },
      {
        deep: true,
        immediate: true
      }
    )
    return { timeText, ...toRefs(data), fullScreen, todoList, doingList, doList, handleMouseDown, handleMouseUp }
  }
})
