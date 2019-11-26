<template>
    <div class="copy-container"
         v-clipboard:copy="copyText"
         v-clipboard:success="onCopy"
         v-clipboard:error="onError">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

export default {
    props: {
        copyText: String,

    },
    methods: {
        onCopy(){
            this.$toast.show('复制成功')
        },
        onError(err){
            console.log(err)
        }
    }
}
</script>

<style lang="scss" scoped>


</style>