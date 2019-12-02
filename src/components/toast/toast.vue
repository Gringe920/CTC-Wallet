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
  min-width: 40%;
  max-width: 60%;
  line-height: 1.4;
  background: rgba(23, 27, 41, 1);
  border-radius: 10px;
  opacity: 0.7;
  color: $white;
  padding: 15px 30px;
  z-index: 999999;
  text-align: center;
}
</style>