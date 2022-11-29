import { defineComponent, reactive, Ref, toRefs } from "vue";
import { TimeArr } from "./interface";

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
    return { timeText };
  },
});
