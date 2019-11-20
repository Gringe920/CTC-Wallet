<template>
  <section class="detais">
      <Header :title="type ==1 ?'收款详情':'转账详情'" ></Header>
      <div class="text">{{type ==1 ?'转入':'转出'}}500 PYC{{type}}</div>
      <div class="text2">{{type ==1 ?'转入':'支出'}}</div>
      <div class="text3">{{type ==1 ?'+':'-'}}500 PYC</div>
      <div class="text2">对方地址</div>
      <div class="text3">RKWPDQTXW3FUPZTUNVCEAUG8HEDXEX7ZWQUPZTUNVCEAUG8HEDXEX7ZWQ</div>
      <div class="text2">创建时间</div>
      <div class="text3">2019/01/03 08:00</div>
  </section>
</template>
<script>
export default {
  name: "detais",
  data(){
    return{
      type:this.$route.params.id,
    }
  },
  mounted(){
    console.log(this.$route.params.id)
     console.log(this.$route.params)
  }
};
</script>
<style lang="scss" scoped>
.detais {
  overflow: hidden;
  margin-top: 50px;
  padding: 0 15px;
  .text2 {
    font-size: 12px;
    color: $color1;
    padding: 10px 0;
    word-wrap: break-word;
  }
  .text {
    color: $white;
    font-size: 14px;
    padding: 15px 0;
    border-top: 1px solid $border;
    border-bottom: 1px solid $border;
    word-wrap: break-word;
  }
  .text3 {
    padding-bottom: 10px;
    color: $white;
    font-size: 14px;
    width: 100%;
    word-wrap: break-word;
  }
}
</style>

