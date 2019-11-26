<template>
  <section class="buysell">
    <div class="type">
      <div @click="type='buy'" :class="type== 'buy'? 'buy':'' ">{{$t(`Trade.canbuy`)}}</div>
      <div @click="type='sell'" :class="type== 'sell'? 'sell':'' ">{{$t(`Trade.cansell`)}}</div>
    </div>
    <div class="price">
      <div>{{$t(`Trade.price`)}}</div>
      <input type="text" placeholder="{{$t(`Trade.pricein`)}}" v-model="price" >
    </div>
    <div class="yue">=8976.0CNY</div>
    <div class="price">
       <div >{{$t(`wallet.zhuanqian2`)}}</div>
      <input type="Number" :placeholder="$t(`wallet.zhuanqian8`)" v-model="num">
    </div>
    <div class="yue">
      <span>{{$t(`Trade.can2`)}}</span>
      <span>{{cannum}}usdt</span>
    </div>
    <div class="changnum">
      <div :class="num == cannum*item ? 'changnumactive':''"  v-for="item in percents" :key="item" @click="changenum(item)">{{item*100}}%</div>
    </div>
    <div class="allmoney">{{$t(`Trade.turnover`)}} 
      <span>---</span>
    </div>
    <div class="btn2" :class='type=="buy"?"buybg":"sellbg"'>{{type=='buy'? $t(`Trade.canbuy`):$t(`Trade.cansell`)}}</div>
  </section>
</template>
<script>
export default {
  name: "buysell",
  data() {
    return {
      num: "",
      cannum: 300,
      type: "buy",
      price: 8970,
      percents: [0.25, 0.5, 0.75, 1]
    };
  },
  methods: {
    changenum(item) {
      this.num = this.cannum * item;
    }
  }
};
</script>
<style lang="scss" scoped>
.buysell {
  height: 100%;
  display: inline-block;
  vertical-align: text-top;
  color: $color1;
  width: 50%;
  padding-left: 15px;
  .type {
    display: flex;
    div {
      height: 35px;
      width: 50%;
      line-height: 35px;
      text-align: center;
      color: $color1;
      background: $nav-bg;
    
    }
    .buy {
      color: $white;
      background-color: $nav-bg;
      background-image: url("../../assets/images/buy_bj_press@2x.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .sell {
      color: $white;
       background-color: $nav-bg;
      background-image: url('../../assets/images/sell_bj_press@2x.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
  .price {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    height: 32px;
    align-items: center;
    border: 1px solid $border3;
    margin: 15px 0 10px 0;
    div {
      font-size: 14px;
      color: $color3;
    }
    input {
      height: 100%;
      background: none;
      color: $white;
      border: none;
      width: 70%;
      text-align: right;
    }
  }
  .yue {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $color3;
    font-size: 10px;
  }
  .changnum {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    .changnumactive {
      background: $bg6;
      color: $active;
    }
    div {
      color: $color1;
      width: 23%;
      font-size: 10px;
      height: 26px;
      line-height: 26px;
      background: $nav-bg;
      border-radius: 4px;
      text-align: center;
    }
  }
  .allmoney {
    font-size: 14px;
    margin-top: 55px;
    span {
      color: $white;
    }
  }
  .btn2 {
    margin-top: 15px;
    background: $active;
    color: $white;
    text-align: center;
    height: 32px;
    line-height: 32px;
  }
}
</style>
