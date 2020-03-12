<template>
  <section>
    <div class="search-header">
      <div class="search-inp">
        <i></i>
        <input type="text" placeholder="搜索银行名称"/>
      </div>
      <span class="cancel" @click="$router.go(-1)">取消</span>
    </div>
    <div class="line"></div>
    <div class="bank-list">
      <div class="bank-item">招商银行</div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.search-header{
  display: flex;
  padding: 4px 15px;
  align-items: center;
  justify-content: space-between;
  .search-inp{
    background-color: #F7F9FC;
    border-radius:4px;
    font-size: 14px;
    padding: 8px;
    width: 81%;
    i{
      display: inline-block;
      width: 14px;
      height: 14px;
      background-image: url('../../assets/images/search_gray@2x.png');
      background-size: 100% 100%;
      vertical-align: middle;
      margin-top: -2px;
    }
    input{
      background-color: transparent;
      padding-left: 5px;
    }
  }
  span.cancel{
    color: #97A2AF;
    font-size: 14px;
  }
}
.bank-list{
  .bank-item{
    padding: 15px;
    font-size: 14px;
  }
}
</style>