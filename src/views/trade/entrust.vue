<template>
  <section class="entrust">
    <div class="nav">
      <div class="nav-l">当前委托</div>
      <div class="nav-r">
        <img src="../../assets/images/transaction_record@2x.png" alt="" srcset="">
        <span>历史记录</span>
      </div>
    </div>
    <div class="content">
      <Empty></Empty>
    </div>
  </section>
</template>
<script>
export default {
  name:'entrust'
}
</script>
<style lang="scss" scoped>
.entrust{
  margin-top: 20px;
  border-top: 5px solid $nav-bg;
  padding: 0 15px;
  .nav{
    padding: 15px 0;
    border-bottom: 1px solid $nav-bg;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-l{
      color: $white;
      font-size: 16px;
    }
    .nav-r{
      display: flex;
      align-items: center;
      img{
        width: 14px;
        height: 14px;
        margin-right: 5px;
      }
      color: $color3;
      font-size: 14px;
    }
  }
}
</style>
