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
      <div @click="shizhi = !shizhi" :class="shizhi != true? 'down':''">深度</div>
      <div @click="shizhi = !shizhi" :class="shizhi == true? 'down':''">市值</div>
    </div>
    <div class="shizhibox" v-if="shizhi">
      <div class="box">
        <span>比特币总市值</span>
        <span>5434.3亿</span>
      </div>
       <div class="box">
        <span>比特币挂单量</span>
        <span>24755.34</span>
      </div>
       <div class="box">
        <span>比特币成交量</span>
        <span>24755.34</span>
      </div>
       <div class="box">
        <span>全网用户量</span>
        <span>12,334,12</span>
      </div>
      
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
        color: $color3;
        font-size: 14px;
      }
    }
    .toubox_r {
      div {
        font-size: 12px;
        color: $white;
        margin-top: 10px;
        span:nth-child(1) {
          padding-right: 20px;
          color: $color3;
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
      color: $color3;
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
        color: $color3;
      }
        span:nth-child(2) {
        color: $white;
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
      color: $white;
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

