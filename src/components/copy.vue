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
    props: ['copyText'],
    methods: {
        onCopy(){
            this.$toast.show(this.$t('copySucceed'))
        },
        onError(err){
            this.$toast.show(this.$t('copyError'))
        }
    }
}
</script>

<style lang="scss" scoped>


</style>