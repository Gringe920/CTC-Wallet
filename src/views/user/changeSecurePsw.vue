<template>
  <div class="container">
    <Header title="修改安全密码" />
    <div class="content">
      <div class="password">原安全密码</div>
      <input class="psw-input" type="text" placeholder="请输入原安全密码" />
      <div class="divider"></div>
      <div class="password">新安全密码</div>
      <input class="psw-input" type="text" placeholder="请输入新安全密码" />
    </div>
    <div class="error-msg" v-if="false">*原安全密码不正确</div>
    <r-button text="确定" width="90%" class="comfirm"/>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  background-color: #323645;
  margin: 70px 15px 0px;
  padding: 15px;

  .password {
    font-size: 12px;
    color: white;
    margin-bottom: 15px;
  }

  .psw-input {
      font-size: 14px;
      color: white;
      outline: none;
      border: none;
      background: none;
      width: 100%;
  }

  .divider {
      width: 100%;
      height: 1px;
      background-color: #1F2332;
      margin: 15px 0;
  }
}
.error-msg{
    color: #FF615D;
    font-size: 12px;
    padding:12px 0 0 15px;
}
.comfirm{
    position: absolute;
    bottom: 20px;
    transform: translateX(-50%);
    left: 50%;
}
</style>