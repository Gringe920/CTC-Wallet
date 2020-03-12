<template>
  <div class="container">
    <Header title="修改手机号" />
    <div class="content">
      <div class="box">
        <div class="password">原手机验证码</div>
        <input class="psw-input" type="text" placeholder="请输入短信验证码" />
        <span class="verify-code">获取验证码</span>
        <div class="divider"></div>
      </div>

      <div class="password">新手机号码</div>
      <input class="psw-input" type="text" placeholder="请输入新手机号码" />
      <div class="divider"></div>
    </div>
    <div class="error-msg" v-if="false">*原安全密码不正确</div>
    <r-button text="确定" width="90%" class="comfirm" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  margin: 70px 15px 0px;

  .password {
    font-size: 12px;
    color: $active;
    margin-bottom: 15px;
  }

  .psw-input {
    font-size: 14px;
    color: $active;
    outline: none;
    border: none;
    background: none;
    width: 100%;
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: #e2e2e2;
    margin: 15px 0;
  }
  .verify-code {
    font-size: 14px;
    position: absolute;
    right: 15px;
  }
}
.error-msg {
  color: $up;
  font-size: 12px;
  padding: 12px 0 0 15px;
}
.comfirm {
  position: absolute;
  bottom: 20px;
  transform: translateX(-50%);
  left: 50%;
}
</style>