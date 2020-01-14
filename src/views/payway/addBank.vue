<template>
  <section>
    <Header title="添加银行卡" />
    <div class="container">
      <div class="item-label">姓名</div>
      <input class="item-inp" type="text" placeholder="请输入姓名" />
      <div class="line"></div>
      <div class="item-label">开户银行</div>
      <div class="item-inp" @click="$router.push({path: '/searchBank'})">
        请选择开户银行
        <i class="right"></i>
      </div>
      <div class="line"></div>
      <div class="item-label">银行卡号</div>
      <input class="item-inp" type="text" placeholder="请输入银行卡号" />
      <div class="line"></div>
      <div class="item-label">开户支行</div>
      <input class="item-inp" type="text" placeholder="请输入开户支行" />
      <div class="line"></div>
      <r-button
        text="确定"
        width="90%"
        class="btn-submit"
        @click="$router.push({path: '/selectPayway'})"
      />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  .container {
    padding-top: 50px;
    height: 100%;
    margin: 0 15px;
    .item-label {
      font-size: 12px;
      color: $active;
      margin-bottom: 15px;
      margin-top: 20px;
    }

    .item-inp {
      font-size: 14px;
      color: $active;
      outline: none;
      border: none;
      background: none;
      width: 100%;
      padding-bottom: 15px;
      display: flex;
      justify-content: space-between;
      i.right {
        display: inline-block;
        width: 10px;
        background-size: 100% 100%;
        background-image: url("../../assets/images/next_black@2x.png");
        height: 10px;
        margin-left: 7px;
        vertical-align: middle;
      }
    }
  }
}
</style>