<template>
  <section>
    <div class="header">
      <img @click="reply" src="../../assets/images/return_black@2x.png" alt class="icon_l" />
    </div>
    <div class="container">
      <div class="l-tit">登录密码</div>
      <div class="l-info-box">
        <input placeholder="请输入密码" type="number" v-model="account" class="account"/>
        <div class="line"></div>
        <div class="code-box">
          <input placeholder="请输入验证码" type="password" />
          <span>发送验证码</span>
        </div>
        <div class="line"></div>
        <r-button text="下一步" class="btn-login"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isAllow: true,
      account: ''
    };
  },
  methods: {
    reply() {
      if (this.leftEv()) {
        return;
      }
      if (typeof plus == "object") {
        let webview = plus.webview.getLaunchWebview();
        webview.back();
      } else {
        this.$router.go(-1);
      }
    }
  },
  watch: {
    account(val){
      if(val){}
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  .header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 0 15px;
    span {
      line-height: 50px;
      font-size: 14px;
      color: #1771ed;
    }
    img {
      width: 20px;
      height: 20px;
      margin-top: 13px;
    }
  }
  .container {
    padding: 0 15px;
    .l-tit {
      margin-top: 30px;
      font-size: 23px;
      margin-bottom: 10px;
    }
    .l-info-box {
      .code-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
          color: #1771ED;
          font-size: 14px;
          text-align: right;
        }
      }
      input {
        padding: 15px 0;
      }
      .btn-login{
        margin:30px 0;
      }
      .forget{
        font-size: 14px;
        color: #1771ED;
      }
    }
  }
}
</style>