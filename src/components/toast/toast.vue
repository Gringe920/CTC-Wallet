<template>
  <div class="container" v-show="isShowToast">
    <span class="toast-text">{{content}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowToast: false
    };
  }
};
</script>

<style lang="scss" scoped>
.toast-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 200px;
  max-width: 80%;
  line-height: 1.4;
  background: $bg;
  border-radius: 10px;
  color: $color1;
  padding: 10px 20px;
  z-index: 999999;
  text-align: center;
}
</style>