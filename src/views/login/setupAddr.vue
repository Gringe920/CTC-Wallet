<template>
  <section>
      <Header title="创建地址" />
      <div class="container">
          <div class="psw-step-one">请设置一个安全密码</div>
          <div class="inp-password">
              <input type="text" placeholder="请输入密码" />
          </div>
      </div>
      <r-button text="确定" class="btn"></r-button>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{
    padding-top: 70px;
    margin: 0 15px;
    .psw-step-one{
        font-size: 14px;
        color: #fff;
        margin-bottom: 12px;
    }
    .inp-password{
        background-color: #323645;
        border-radius:4px;
        padding: 12px 15px;
        font-size: 14px;
        input{
            appearance: none;
            border: 0;
            outline: none;
            width: 100%;
            background-color: transparent;
            color: #fff;
        }
    }
}
</style>