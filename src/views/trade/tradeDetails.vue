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
    <k></k>
    <div class="type">
      <div class="down">深度</div>
      <div>市值</div>
    </div>
    <div class="busell">
      <div class="buy">买入</div>
      <div class="sell">卖出</div>
    </div>
  </section>
</template>
<script>
import k from "./K"; //深度
export default {
  name: "tradeDetails",
   components: {
    k
   }
};
</script>
<style lang="scss" scoped>
.tradeDetails {
  
  padding-top: 50px ;
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
  .type{
    display: flex;
    justify-content: space-between;
   
    div{
      width: 50%;
      height: 50px;
      line-height: 45px;
      font-size: 14px;
      color:$color3;
      text-align: center;
    }
  }
  .busell{
     border-top: 1px solid $border;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 10px 15px;
    div{
      width: 48%;
      border-radius: 6px;
      color: $white;
      height: 44px;
      line-height: 44px;
      text-align: center
    }
    .buy{
      background: $down;
    }
    .sell{
      background: $up;
    }
  }
}
</style>

