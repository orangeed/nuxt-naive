<!--
 * @Author: orange
 * @Date: 2022-11-06 22:24:54
 * @LastEditors: orange
 * @LastEditTime: 2022-11-20 21:36:08
 * @FilePath: \nuxt-naive\nuxt3-blog\pages\album.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by orange, All Rights Reserved. 
-->
<!-- album -->
<template>
    <div id="album" class="text-center">
        <!-- 筛选 -->
        <n-calendar v-model:value="time" #="{ year, month, date }" :is-date-disabled="isDateDisabled"
            @update:value="handleUpdateValue">
            {{ year }}-{{ month }}-{{ date }}
        </n-calendar>
        <!-- 图片 -->
        <div class="p-20">
            <n-image-group>
                <n-image v-for="i in 30" :key="i" class="w-52 h-52 m-8" lazy src="../assets/img/header.jpg"
                    :intersection-observer-options="{ root: '#image-scroll-container' }">
                    <template #placeholder>
                        <div class="w-52 h-52 flex items-center justify-center bg-gray-300 m-5">
                            Loading
                        </div>
                    </template>
                </n-image>
            </n-image-group>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useMessage } from 'naive-ui'
import { isYesterday, addDays } from 'date-fns/esm'
export default defineComponent({
    name: '',
    components: {},
    setup() {
        const message = useMessage()
        const handleUpdateValue = (
            _: number,
            { year, month, date }: { year: number; month: number; date: number }
        ) => {
            message.success(`${year}-${month}-${date}`)
            // TODO 获取到时间,请求后端接口获取数据
        }
        return {
            time: ref(addDays(Date.now(), 1).valueOf()),
            handleUpdateValue,
            isDateDisabled(timestamp: number) {
                if (isYesterday(timestamp)) {
                    return true
                }
                return false
            }
        }
    },
});

</script>

<style lang="scss" scoped>

</style>

<style lang="scss">
#album {
    .n-image img {
        margin: 20px;
        // box-shadow: 0px 0px 5px 10px #ccc !important;

        &:hover {
            transform: scale(1.1);
            transition: all .5s;
            box-shadow: 0px 0px 20px 4px #e2e2e2;
        }
    }
}
</style>
