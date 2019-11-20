<template>
  <section class="header" >
        <img  @click="reply" src="../assets/images/home_search_white.png" alt="" class="icon_l">
        <span>钱包</span>
        <img src="../assets/images/record@2x.png" alt="" class="icon-r">
  </section>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    reply() {
      if (this.backFunc) {
        this.backFunc();
        return;
      }
      if (typeof plus == "object") {
        let webview = plus.webview.getLaunchWebview();
        webview.back();
      } else {
        if (
          this.$route.name == "set" ||
          this.$route.name == "invite" ||
          this.$route.name == "tradePaw"
        ) {
          this.$router.push({ name: "safety" });
        } else {
          this.$router.go(-1);
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: $bg;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 25px;
    height: 25px;
  }
  .icon_l {
    margin-left: 2%;
  }
  .icon-r {
    padding-right: 2% !important;
  }
}
</style>