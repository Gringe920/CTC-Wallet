<template>
  <section class="tradeDetails">
    <Header title="BTC/USDT"></Header>
    <div class="toubox">
      <div class="toubox_l">
        <div class="text1 down">3543.63</div>
        <div class="text2">
          <span>=￥2439.11</span>&nbsp;
          <span class="down">-0.62%</span>
        </div>
      </div>
      <div class="toubox_r">
          <div><span>高</span><span>3573.86</span> </div>
          <div><span>低</span><span>3573.86</span></div>
          <div><span>24h</span><span>15678</span></div>

      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "tradeDetails"
};
</script>
<style lang="scss" scoped>
.tradeDetails {
  
  padding: 50px 0;
  .toubox{
    padding: 0 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid $border;
    justify-content: space-between;
    display: flex;
    .toubox_l{
      .text1{
        font-size: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .text2{
        color:$color3;
        font-size: 14px;
      }
    }
    .toubox_r{
      div{
         font-size: 12px;
         color: $white;
         margin-top: 10px;
        span:nth-child(1){
          padding-right: 20px;
            color:$color3;
       
        }
      }
    }

  }
}
</style>

