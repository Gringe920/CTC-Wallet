<template>
  <section class="walletall">
    <Header title="钱包" :rightEv='toacceptCoin' :leftShow='false' :rightIcon="require('../../assets/images/record@2x.png')" ></Header>
    <div class="walletbanner">
      <div class="w-t">
        <span>当前资产</span>
        <img  @click="hiddenmoney" src="../../assets/images/wallet_asset_eye@2x.png" alt="" srcset="" v-if="!hidden">
         <img  @click="hiddenmoney" src="../../assets/images/wallet_asset_eye_off@2x.png" alt="" srcset="" v-else>
      </div>
      <div class="w-t2">
        <span>{{hidden?'******':"8900.00"}}</span>&nbsp;{{hidden ?'******':"CNY"}}
      </div>
    </div>
    <div class="hiddenmoney">
      <div class="h_l" @click="hiddenmoney">
        <img src="../../assets/images/night_asset_unchecked@2x.png" alt="" srcset="" v-if="!hidden">
        <img src="../../assets/images/asset_selection@2x.png" alt="" srcset="" v-else>
        <span>隐藏小额资产</span>
      </div>
      <div class="h_r" :class="serchnow? 'searchwid':''">
        <img src="../../assets/images/night_asset_search@2x.png" alt="" srcset="">
        <input type="text" placeholder="搜索" v-model="searchmsg"> 
      </div>
    </div>
    <div class="money" v-for="(item,index) in coins" :key="index">
    <div class="coin">{{item.name}}</div>
      <div class="coin2">{{hidden?'******':item.CNY}} <span>{{hidden?'******':'= '+item.UST}}</span> </div>
      <div class="coin3">
        <div class="c_l">可用：&nbsp;  {{hidden?'******':item.can}}</div>
        <div class="c_l">冻结：&nbsp;  {{hidden?'******':item.nocan}} </div>
      </div> 
      <div class="coin4">
        <div class="shou"  @click="toroute('shoukuan')" >收款</div>
        <div class="zhuan" @click="toroute('zhuanqian')">转账</div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "wallet",
  data() {
    return {
      searchmsg: "",
      serchnow: false,
      hidden:false,
      coins: [
        {
          name: "BTC",
          CNY: "250.000",
          UST: "0.00000",
          can: 0.0,
          nocan: 32.421234
        },
        {
          name: "EOS",
          CNY: "2.500000",
          UST: "0.00000",
          can: 0.21320,
          nocan: 32.421234
        },
        {
          name: "USDT",
          CNY: "2500000",
          UST: "250",
          can: 10.022,
          nocan: 32.421234
        },
        { name: "EOS", CNY: "250", UST: "250", can: 0.2500, nocan: 32.421234 }
      ]
    };
  },
  watch: {
    searchmsg() {
      if (this.searchmsg != "") {
        this.serchnow = true;
      } else {
        this.serchnow = false;
      }
    }
  },
  methods:{
    hiddenmoney(){
      this.hidden = !this.hidden

    },
    toacceptCoin(){
        this.$router.push({ path: "/acceptCoin"});
    }
  }
  

};
</script>
<style lang="scss" scoped>
.walletall {
  padding: 0 15px;
  min-height: 90vh;
  margin-bottom: 50px;
  .walletbanner {
    margin-top: 60px;
    height: 137px;
    background: url(../../assets/images/wallet__card_bj@2x.png);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    padding: 0 20px;
    .w-t {
      display: flex;
      justify-content: space-between;
      color: $white;
      padding: 20px 0 20px 0;
      align-items: center;
      img {
        width: 22px;
        height: 22px;
      }
    }
    .w-t2 {
      font-size: 22px;
      color: $white;
      text-align: left;
      span {
        font-size: 40px;
      }
    }
  }
  .hiddenmoney {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    color: $color1;
    .h_l {
      img {
        margin-right: 5px;
        width: 12px;
        height: 12px;
      }
    }
    .h_r {
      height: 24px;
      width: 100px;
      display: flex;
      align-items: center;
      border-radius: 2px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      img {
        width: 12px;
        padding: 0 5px;
        height: 12px;
      }
      input {
        width: 70px;
        height: 20px;
        background: $bg;
        border: none;
        color: #fff;
      }
    }
    .searchwid {
      width: 150px;
      input {
        width: 120px;
      }
    }
  }
  .money {
    height: 100%;
    background: $bg2;
    margin-bottom: 20px;

    .coin {
      padding: 20px 15px 0 15px;
      font-size: 18px;
      font-weight: 500;
      color: $active;
    }
    .coin2 {
      padding: 0 15px;
      font-size: 24px;
      color: $white;
      margin: 15px 0;
      span {
        font-size: 18px;
      }
    }
    .coin3 {
      padding: 0 15px 10px 15px;
      font-size: 13px;
      font-weight: 600;
      color: $color1;

      display: flex;
      .c_l {
        width: 50%;
      }
    }
    .coin4 {
      border-top: 1px solid $bg;
      height: 40px;
      color: $white;
      font-size: 14px;
      div {
        line-height: 40px;
        width: 49%;
        display: inline-block;
        text-align: center;
      }
      div:hover {
        background: $active;
        color: $white;
      }
      .shou {
        border-right: 1px solid $bg;
      }
    }
  }
}
</style>
