<!-- album -->
<template>
    <div id="album">
        album
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
