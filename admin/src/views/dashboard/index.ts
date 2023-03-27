/*
 * @Author: orange
 * @Date: 2022-10-25 20:40:23
 * @LastEditors: orange
 * @LastEditTime: 2022-11-29 22:42:32
 * @FilePath: \nuxt-naive\admin\src\views\dashboard\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by orange, All Rights Reserved.
 */
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
        status: 1
      })
    }

    // 删除
    let deletePointX = 0

    // 删除-鼠标按下事件
    const handleMouseDown = (e: any) => {
      console.log("鼠标按下事件", e)
      deletePointX = e.x
      document.getElementById(e.target.id)?.addEventListener("mousemove", (event) => {
        console.log("鼠标移动事件", event)
        // 如果移动 x 小于 按下的 x ，出现删除
        if (event.x < deletePointX) {
          
        }
      })
    }
    // 删除-鼠标移动事件
    const handleMouseMove = (e: any) => {
      console.log("鼠标移动事件", e)
    }
    // 删除-鼠标松开事件
    const handleMouseUp = (e: any) => {
      console.log("鼠标松开事件", e)
      // 如果终点 - 起点 > 40 ，则显示删除，否则隐藏删除
      if (e.x - deletePointX > 40) {
        console.log("删除")
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
    return { timeText, ...toRefs(data), fullScreen, todoList, handleMouseDown, handleMouseMove, handleMouseUp }
  }
})
