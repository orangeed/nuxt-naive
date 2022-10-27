<template>
  <div class="pl-40 pr-40" id="index">
    <div class="flex">
      <div class="flex-1 about-me text-center">
        <!-- <p class="text-2xl text-left">个人简介</p> -->
        <n-image
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
        <p class="text-xl">橘子</p>
        <p class="text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum
          augue erat ac eros. Cras ultricies mattis convallis.
        </p>
        <div class="text-left">
          <n-icon
            :component="Zhihu"
            size="40"
            class="bg-gray-100 rounded-xl p-2.5 ml-1 mr-1 cursor-pointer"
          />
          <n-icon
            :component="Weixin"
            size="40"
            class="bg-gray-100 rounded-xl p-2.5 ml-1 mr-1 cursor-pointer"
          />
          <n-icon
            :component="Github"
            size="40"
            class="bg-gray-100 rounded-xl p-2.5 ml-1 mr-1 cursor-pointer"
          />
        </div>
      </div>
      <div class="flex-3 pl-24">
        <p class="text-2xl font-familg-regular font-normal">最近文章</p>
        <n-tabs
          type="line"
          animated
          size="large"
          :on-update:value="handleChangeTabs"
        >
          <n-tab-pane name="all" tab="全部">
            <div
              v-for="item in data.artData"
              :key="item.id"
              class="mt-4 mb-4"
              @click="handleGotoDetail(item.id)"
            >
              <ArtCard :item="item" />
            </div>
          </n-tab-pane>
          <n-tab-pane name="JavaScript" tab="JavaScript">
            <div
              v-for="item in data.artData"
              :key="item.id"
              class="mt-4 mb-4"
              @click="handleGotoDetail(item.id)"
            >
              <ArtCard :item="item" />
            </div>
          </n-tab-pane>
          <n-tab-pane name="Vue" tab="Vue">
            <div
              v-for="item in data.artData"
              :key="item.id"
              class="mt-4 mb-4"
              @click="handleGotoDetail(item.id)"
            >
              <ArtCard :item="item" />
            </div>
          </n-tab-pane>
        </n-tabs>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { Zhihu, Weixin, Github } from "@vicons/fa";
import ArtCard from "../components/artCard.vue";

// 切换tabs的事件
const handleChangeTabs = (val: string) => {
  console.log("切换tabs的事件", val);
  // 通过val去查询对应字段的数据
  handleGetTabsData(val);
};

interface ArtDara {
  id: number;
  img: string;
  title: string;
  tag: string[];
  updataTime: string;
}

interface Data {
  artData: ArtDara[];
}

// 获取tabs下面的数据
const data: Data = reactive({ artData: [] });
const handleGetTabsData = (val: string) => {
  data.artData = [];
  console.log("获取tabs下面的数据", val);
  // 模拟的数据
  if (val === "all") {
    data.artData = [
      {
        id: 0,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript", "Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 1,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript", "Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 2,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript", "Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 3,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript", "Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 4,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript", "Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 5,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript", "Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 6,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript", "Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 7,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript", "Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 8,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript", "Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 9,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript", "Vue"],
        updataTime: "2022-10-26",
      },
    ];
  } else if (val === "JavaScript") {
    data.artData = [
      {
        id: 0,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript"],
        updataTime: "2022-10-26",
      },
      {
        id: 1,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript"],
        updataTime: "2022-10-26",
      },
      {
        id: 2,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript"],
        updataTime: "2022-10-26",
      },
      {
        id: 3,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript"],
        updataTime: "2022-10-26",
      },
      {
        id: 4,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript"],
        updataTime: "2022-10-26",
      },
      {
        id: 5,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript"],
        updataTime: "2022-10-26",
      },
      {
        id: 6,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript"],
        updataTime: "2022-10-26",
      },
      {
        id: 7,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript"],
        updataTime: "2022-10-26",
      },
      {
        id: 8,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript"],
        updataTime: "2022-10-26",
      },
      {
        id: 9,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["JavaScript"],
        updataTime: "2022-10-26",
      },
    ];
  } else {
    data.artData = [
      {
        id: 0,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 1,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 2,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 3,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 4,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 5,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 6,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 7,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 8,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["Vue"],
        updataTime: "2022-10-26",
      },
      {
        id: 9,
        img: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
        title: "这是第一个标题",
        tag: ["Vue"],
        updataTime: "2022-10-26",
      },
    ];
  }
};

handleGetTabsData("all");

// 跳转至详情
const router = useRouter();
const handleGotoDetail = (id: number) => {
  console.log("跳转至详情", id);
  console.log("router", router);
  router.push({ path: "/details", query: { name: id } });
};
</script>

<style lang="scss" scoped></style>

<style lang="scss">
#index {
  .about-me {
    .n-image > img {
      width: 132px;
      height: 132px;
      border-radius: 9999px;
    }
  }
}
</style>
