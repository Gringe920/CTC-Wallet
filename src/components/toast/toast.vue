<template>
    <div class="container" v-show = "isShowToast">
        <span class="toast-text">{{content}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShowToast: false
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.toast-text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 60%;
    background:rgba(23,27,41,1);
    border-radius:10px;
    opacity:0.7;
    color: $white;
    padding: 15px 30px;
}
</style>