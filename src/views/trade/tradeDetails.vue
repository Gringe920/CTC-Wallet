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
          <div><span>{{$t(`Trade.height`)}}</span><span>3573.86</span> </div>
          <div><span>{{$t(`Trade.low`)}}</span><span>3573.86</span></div>
          <div><span>{{$t(`Trade.tiemup`)}}</span><span>15678</span></div>
      </div>
    </div>
    <k></k>
    <div class="type">
      <div @click="shizhi = !shizhi" :class="shizhi != true? 'down':''">深度</div>
      <div @click="shizhi = !shizhi" :class="shizhi == true? 'down':''">市值</div>
    </div>
    <div class="shizhibox" v-if="shizhi">
      <div class="box">
        <span>比特币{{$t(`Trade.marketmoney`)}}</span>
        <span>5434.3亿</span>
      </div>
       <div class="box">
        <span>比特币{{$t(`Trade.gudannum`)}}</span>
        <span>24755.34</span>
      </div>
       <div class="box">
        <span>比特币{{$t(`Trade.volume`)}}</span>
        <span>24755.34</span>
      </div>
       <div class="box">
        <span> {{$t(`Trade.allusernum`)}}</span>
        <span>12,334,12</span>
      </div>
      
    </div>
    <div class="busell">
      <div class="buy"> {{$t(`Trade.canbuy`)}}</div>
      <div class="sell"> {{$t(`Trade.cansell`)}}</div>
    </div>
  </section>
</template>
<script>
import k from "./K"; //深度
export default {
  name: "tradeDetails",
  data(){
    return{
      shizhi:false
    }
  },
  
  components: {
    k
  }
};
</script>
<style lang="scss" scoped>
.tradeDetails {
  padding-top: 50px;
  .toubox {
    padding: 0 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid $border;
    justify-content: space-between;
    display: flex;
    .toubox_l {
      .text1 {
        font-size: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .text2 {
        color: $color1;
        font-size: 14px;
      }
    }
    .toubox_r {
      div {
        font-size: 12px;
        color: $active;
        margin-top: 10px;
        span:nth-child(1) {
          padding-right: 20px;
          color: $color1;
        }
      }
    }
  }
  .type {
    display: flex;
    justify-content: space-between;

    div {
      width: 50%;
      height: 50px;
      line-height: 45px;
      font-size: 14px;
      color: $color1;
      text-align: center;
    }
  }
  .shizhibox {
    padding: 0 15px;
    .box {
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      span:nth-child(1) {
        color: $color1;
      }
        span:nth-child(2) {
        color: $active;
      }
    }
  }
  .busell {
    // width: 100vw;
    // position: fixed;
    // border: 1px solid red;
    // bottom: 0px;
    border-top: 1px solid $border;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    div {
      width: 48%;
      border-radius: 6px;
      color: $black;
      height: 44px;
      line-height: 44px;
      text-align: center;
    }
    .buy {
      background: $down;
    }
    .sell {
      background: $up;
    }
  }
}
</style>

