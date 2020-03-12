<template>
  <section class="coininfo">
    <!-- 币种 {{$t(`Trade.`)}}-->
    <div class="coin">
      <div class="coin_l">
        <img  @click="changeopen" src="../../assets/images/transaction_list_lower@2x.png" alt="" srcset="" v-if="!open">
         <img @click="changeopen"  src="../../assets/images/transaction_list_upper@2x.png" alt="" srcset="" v-else>
        <span @click="changeopen" >BTC/USDT</span>
        <div class="fudong">-0.87%</div>
      </div>
      <div class="coin-r"  @click="toRoute('tradeDetails')">
        <img src="../../assets/images/k_line@2x.png" alt="" srcset="">
      </div>
    </div>
    <!-- 币种选择弹窗  @click="changeopen"-->
    <div class="changecoin"   v-if="open">
      <div class="nav">
        <div> {{$t(`Trade.markets`)}}</div>
        <div>{{$t(`Trade.coin`)}}</div>
        <div>{{$t(`Trade.newprice`)}}</div>
        <div>{{$t(`Trade.tiemup`)}}</div>
      </div>
      <div class="coinall">
        <div class="coin_l">
          <div class="serch" :class="!searchstatus?'':'down'" @click="searchstatus =!searchstatus">
            <img src="../../assets/images/search_gray@2x.png" alt="" srcset="" v-if="!searchstatus">
             <img src="../../assets/images/search_gray_press@2x.png" alt="" srcset="" v-else>
            {{$t(`wallet.serch`)}}
          </div>
          <div @click.stop="tochangcoin(key)" v-for="(item,key) in coins" :key="key" class="coinbox" :class="key==checkcoin ?'down':''">
            {{key}}
          </div>
        </div>
        <div class="coin-r" >
          <div class="search" v-if="searchstatus">
            <input type="text" :placeholder="$t(`Trade.searchtext`)">
            <img  @click="searchstatus = false" src="../../assets/images/night_search_delete@2x.png" alt="" srcset="">
          </div>
          <div class="box" v-for="(item,index) in coins[checkcoin]" :key="item">
            <div>{{item}}/usdt</div>
            <div class="c">111.63</div>
            <div class="num" :class="index%2 ==0 ?'up':'down'">{{index%2 ==0 ?'+':'-'}}0.89%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "coininfo",
  data() {
    return {
      open: false,
      checkcoin: "usdt",
      searchstatus: false,
      coins: {
        usdt: ["btc",  "csc", "ccc", "bth", "snk"],
        eth: ["usdt", "eos", "btc"],
        btc: ["sbk", "eth", "csc", "eos"]
      }
    };
  },
  methods: {
    tochangcoin(key) {
      this.checkcoin = key;
    },
    changeopen() {
      this.open = !this.open;
    }
  }
};
</script>
<style lang="scss" scoped>
.coininfo {
  width: 100%;
  height: 100%;
  .coin {
    display: flex;
    justify-content: space-between;
    padding: 20px 15px;
    .coin_l {
      display: flex;
      align-items: center;
      img {
        width: 18px;
        height: 18px;
      }
      span {
        margin-left: 5px;
        color: $active;
      }
      .fudong {
        text-align: center;
        margin-left: 10px;
        line-height: 24px;
        width: 80px;
        height: 24px;
        background: $bg6;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 400;
        color: $down;
      }
    }
    .coin-r {
      img {
        width: 18px;
        height: 18px;
      }
    }
  }
  .changecoin {
    position: absolute;
    width: 100vw;
    min-height: 100%;
    height: 100%;
    background: $bg4;
    .nav {
      color: $color1;
      height: 42px;
      background: $nav-bg;
      font-size: 14px;

      div {
        display: inline-block;
        line-height: 42px;
      }
      div:nth-child(1) {
        padding-left: 15px;
        text-align: left;
        width: 25%;
      }
      div:nth-child(2) {
        width: 30%;
        padding-left: 15px;
      }
      div:nth-child(3) {
        width: 22.5%;
      }
      div:nth-child(4) {
        width: 22.5%;
        padding-right: 15px;
        text-align: right;
      }
    }
    .coinall {
      font-size: 14px;
      display: flex;
      background: $bg;
      .coin_l {
        padding: 0 10px;
        background: $nav-bg;
        width: 25%;
        color: $color1;
        .serch {
          padding: 15px 0;
          img {
            width: 14px;
            height: 14px;
            margin-right: 5px;
          }
        }
        .coinbox {
          padding: 10px 0;
        }
      }
      .coin-r {
        color: $color1;
        width: 75%;
        display: inline-block;
        .search {
          border: 1px solid $border;
          height: 40px;
          display: flex;
          margin: 15px;
          justify-content: space-between;
          align-items: center;
          padding: 0 5px;
          input {
            background: none;
            border: none;
            color: $color1;
            height: 100%;
          }
          img {
            width: 14px;
            height: 14px;
          }
        }
        .box {
          padding: 15px 0;
          display: flex;
          background: $bg;
          border-bottom: 1px solid $nav-bg;
          justify-content: space-around;
          font-size: 14px;
          div:nth-child(1) {
            padding-left: 15px;
            width: 40%;
          }
          div:nth-child(2) {
            padding-left: 15px;
            width: 30%;
          }
          div:nth-child(3) {
            text-align: right;
            padding-right: 15px;
            width: 30%;
          }
        }
      }
    }
  }
}
</style>
