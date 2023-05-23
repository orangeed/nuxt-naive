<!-- comment -->
<template>
    <no-ssr>
        <div class="artalk-comments"></div>
    </no-ssr>
</template>

<script lang="ts" setup name="comment">
import { onMounted } from 'vue'
import 'artalk/dist/Artalk.css'
import Artalk from 'artalk'

onMounted(() => {
    Artalk.init({
        // @ts-ignore
        el: document.getElementsByClassName('artalk-comments')[0],
        pageKey: '',
        pageTitle: '',
        server: 'https://www.orangecj.cn:8080',
        site: '橘子的分享',
    })
})
</script>

<style lang="scss" scoped></style>
