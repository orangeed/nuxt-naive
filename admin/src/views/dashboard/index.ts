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
import axios from "axios";
import { defineComponent, reactive, Ref, toRefs } from "vue";
import { TimeArr, Weather } from "./interface";

export default defineComponent({
  name: "",
  components: {},
  setup() {
    const timeArr: TimeArr[] = [
      {
        label: "早上好",
        range: 11,
      },
      {
        label: "中午好",
        range: 13,
      },
      {
        label: "下午好",
        range: 20,
      },
      {
        label: "晚上好",
        range: 24,
      },
    ];
    const timeText: Ref<string> = ref("");

    // 获取当前时间，显示问候语
    const handleGetTime = () => {
      const time = new Date().getHours();
      console.log(time);
      for (let i = 0; i < timeArr.length; i++) {
        const element = timeArr[i];
        if (time < element.range) {
          timeText.value = element.label;
          break;
        }
      }
      console.log("timeText", timeText);
    };
    handleGetTime();

    // 获取天气信息
    const weather: Weather = reactive({
      updateTime: "",
      temp: "",
      feelsLike: "",
      icon: "",
      text: "",
      humidity: "",
      vis: "",
    });
    const handleGetWeather = () => {
      // axios({
      //   url: "https://geoapi.qweather.com/v2/city/lookup?location=chengdu&key=d855604542724045b8514b85c4859f33",
      //   method: "GET",
      // }).then((res) => {
      //   console.log("获取天气信息", res);
      //   const location = res.data.location.filter((v: any) => {
      //     return v.name === "双流";
      //   });
      //   console.log("location", location[0]);
      //   axios({
      //     url: `https://api.qweather.com/v7/weather/now?location=${location[0].lon},${location[0].lat}&key=d855604542724045b8514b85c4859f33`,
      //     method:'GET'
      //     // url: `https://api.qweather.com/v7/weather/now?location=101270106&key=d855604542724045b8514b85c4859f33`,
      //   }).then((response) => {
      //     console.log("response", response);
      //   });
      // });
      axios({
        url: "https://devapi.qweather.com/v7/weather/now?location=101270106&key=d855604542724045b8514b85c4859f33",
        method: "GET",
      }).then((response) => {
        console.log("response", response.data.now);
        weather.updateTime = response.data.updateTime;
        weather.temp = response.data.now.temp;
        weather.feelsLike = response.data.now.feelsLike;
        weather.icon = response.data.now.icon;
        weather.text = response.data.now.text;
        weather.humidity = response.data.now.humidity;
        weather.vis = response.data.now.vis;
      });
    };
    handleGetWeather();

    watch(
      () => weather,
      (val) => {
        if (val) {
          console.log("val", val);
        }
      },
      {
        deep: true,
        immediate: true,
      }
    );
    return { timeText, weather };
  },
});
