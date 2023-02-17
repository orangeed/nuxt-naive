<!-- movies -->
<template>
    <div id="movies">
        movies
        很懒，还在写
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue"
export default defineComponent({
    name: "",
    components: {},
    setup() {
        const data = reactive({

        })
        return {
            ...toRefs(data)
        }
    }
})
</script>

<style lang="scss" scoped>

</style>
