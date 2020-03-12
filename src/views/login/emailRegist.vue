<template>
  <section>
    <div class="header">
      <img @click="reply" src="../../assets/images/return_black@2x.png" alt class="icon_l" />
      <span @click="$router.push({path: '/login'})">登录</span>
    </div>
    <div class="container">
      <div class="l-tit">邮箱注册</div>
      <div class="l-info-box">
        <div class="region">中国<i></i></div>
        <div classs="account-box">
          <input placeholder="请输入邮箱地址" v-model="account" class="account"/>
        </div>
        <div class="line"></div>
        <div class="code-box">
          <input placeholder="请输入验证码" type="password" />
          <span class="">发送验证码</span>
        </div>
        <div class="line"></div>
        <div class="allow">
          <i></i>
          同意《用户服务条款与用户隐私协议》
        </div>
        <r-button text="下一步" class="btn-login"/>
        <span class="forget">邮箱注册</span>
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
      margin-bottom: 35px;
    }
    .l-info-box {
      .region{
        font-size: 14px;
        margin-bottom: 25px;
        i{
          display: inline-block;
          width: 8px;
          height: 4px;
          background-image: url('../../assets/images/triangle_lower@2x.png');
          background-size: 100% 100%;
          margin-left: 5px;
          
        }
      }
      .area-code{
        font-size: 14px;
        margin-right: 10px;
      }
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
      .allow{
        font-size: 12px;
        color: #97A2AF;
        margin-top: 20px;
        i{
          display: inline-block;
          width: 12px;
          height: 12px;
          background-image: url('../../assets/images/night_asset_unchecked@2x.png');
          background-size: 100% 100%;
          margin-right: 8px;
          vertical-align: middle;
        }
        i.checked{
          background-image: url('../../assets/images/asset_selection@2x.png');
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