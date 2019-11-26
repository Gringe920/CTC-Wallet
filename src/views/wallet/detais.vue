<template>
  <section class="detais">
      <Header :title="type ==0 ?$t(`wallet.info1`):type==1?$t(`wallet.info2`):$t(`wallet.info3`)" ></Header>
      <div class="text">{{type ==0 ?$t(`wallet.info4`):type== 1?$t(`wallet.zhuanchu`):$t(`wallet.duhuan`)}}500 PYC</div>
      <div class="text2">{{type ==0 ?$t(`wallet.info5`):$t(`wallet.info6`)}}</div>
      <div class="text3">{{type ==0 ?'+':'-'}}500 PYC</div>
      <div class="text2">{{$t(`wallet.info7`)}}</div>
      <div class="text3">RKWPDQTXW3FUPZTUNVCEAUG8HEDXEX7ZWQUPZTUNVCEAUG8HEDXEX7ZWQ</div>
      <div class="text2">{{$t(`wallet.info8`)}}</div>
      <div class="text3">2019/01/03 08:00</div>
  </section>
</template>
<script>
export default {
  name: "detais",
  data(){
    
    return{
        //0 收款 1 转账 2 兑换
      type:this.$route.params.id,
    }
  },
  mounted(){
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

