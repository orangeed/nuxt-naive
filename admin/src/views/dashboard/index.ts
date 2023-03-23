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
import { getHomeProjectList, getProjectListAnalyse } from "../../server/home";
import { lineEcharts } from "../../utils/echarts";
import { TimeArr, Dashboard } from "../../types/views/dashboard.typs";

export default defineComponent({
  name: "Dashboard",
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
    // const weather: Weather = reactive({
    //   updateTime: "",
    //   temp: "",
    //   feelsLike: "",
    //   icon: "",
    //   text: "",
    //   humidity: "",
    //   vis: "",
    // });
    const data: Dashboard = reactive({
      weather: {
        updateTime: "",
        temp: "",
        feelsLike: "",
        icon: "",
        text: "",
        humidity: "",
        vis: "",
      },
      projectList: [],
    });
    const handleGetWeather = () => {
      axios({
        url: import.meta.env.VITE_WEATHER_URL,
        method: "GET",
      }).then((response: any) => {
        console.log("response", response.data.now);
        data.weather.updateTime = response.data.updateTime;
        data.weather.temp = response.data.now.temp;
        data.weather.feelsLike = response.data.now.feelsLike;
        data.weather.icon = response.data.now.icon;
        data.weather.text = response.data.now.text;
        data.weather.humidity = response.data.now.humidity;
        data.weather.vis = response.data.now.vis;
      });
    };
    handleGetWeather();

    // 获取个人项目信息
    const handleGetProjectList = () => {
      getHomeProjectList().then((res: any[]) => {
        console.log("获取个人项目信息", res);
        data.projectList = res;
      });
    };
    // handleGetProjectList();

    // 获取项目访问量数据统计
    const line = ref(null);
    const handleGetProjectAnalyse = () => {
      getProjectListAnalyse({ time: "2022-12-18" }).then((resss: any[]) => {
        console.log("获取项目访问量数据统计", resss);
        const res = [
          {
            projectName: "员光重还已",
            projectId: "88",
            time: "2010-11-01 11:50:24",
            num: 68,
          },
          {
            projectName: "的结则点",
            projectId: "52",
            time: "1990-11-25 05:00:58",
            num: 4,
          },
          {
            projectName: "本月布象活",
            projectId: "70",
            time: "1979-12-19 19:11:25",
            num: 83,
          },
          {
            projectName: "员光重还已",
            projectId: "88",
            time: "2010-11-02 11:50:24",
            num: 200,
          },
          {
            projectName: "的结则点",
            projectId: "52",
            time: "1990-11-03 05:00:58",
            num: 44,
          },
          {
            projectName: "本月布象活",
            projectId: "70",
            time: "1979-12-04 19:11:25",
            num: 111,
          },
        ];
        const xAxisData = res.map((v) => {
          return v.time;
        });
        let series: any = [];
        res.forEach((v) => {
          series.push({
            name: v.projectName,
            type: "line",
            data: res
              .filter((item) => item.projectName === v.projectName)
              .map((ele) => {
                return ele.num;
              }),
          });
        });
        console.log("series", series);
        lineEcharts(line.value, xAxisData, series);
      });
    };
    // handleGetProjectAnalyse();

    watch(
      () => data.weather,
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
    return { timeText, ...toRefs(data), line };
  },
});
