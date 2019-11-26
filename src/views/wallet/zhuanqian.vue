<template>
  <section class="zhuanqian">
      <Header :title="$t(`wallet.fu`)" :rightEv='toacceptCoin' :rightIcon="require('../../assets/images/record@2x.png')"></Header>
      <div class="cointype">
        <div class="l">{{coin}}</div>
        <div class="r" @click="toclose">
         {{$t(`wallet.zhuanqian1`)}}
          <img src="../../assets/images/triangle@2x.png" alt="" srcset="">
        </div>
      </div>
      <div class="box2">
        <div class="text1"> {{$t(`wallet.zhuanqian3`)}}</div>
        <div class="text2">
          <input type="text" :placeholder="$t(`wallet.zhuanqian9`)">
          <img src="../../assets/images/add_scan_white@2x(2).png" alt="" srcset="">
        </div>
      </div>
       <div class="box2">
        <div class="text1"> {{$t(`wallet.zhuanqian2`)}}</div>
        <div class="text2">
          <input type="text" :placeholder="$t(`wallet.zhuanqian8`)" class="in2">
          <div class="r">
            <span>btc&nbsp;&nbsp;|</span>&nbsp;&nbsp; {{$t(`wallet.zhuanqian4`)}}
          </div>
        </div>
         <div class="l">* {{$t(`wallet.can`)}}：0.0000 BTC； {{$t(`wallet.zhuanqian5`)}}：0.0000 RCP</div>
      </div>
      <div class="btn" @click="submit" > {{$t(`wallet.zhuanqian6`)}}</div>
      <div class="coinchange" v-if="close" @click="toclose">
        <div class="coinbox">
          <div @click="coin= item" class="coin" v-for="item in coins" :key='item'>
            <img src="../../assets/images/btc@2x.png" alt="" srcset="">
            <div>{{item}}</div>
          </div>
           <div class="coin cg" >
            <div @click.stop="toclose"> {{$t(`wallet.zhuanqian7`)}}</div>
          </div>
        </div>
      </div>
      <r-modal :title="$t(`wallet.zhuanqian10`)"
        @on-ok="submitPsw"
        :show="isShowPswModal"
        @on-cancel="isShowPswModal = false">
      <div class="inp-password">
          <input type="password" :placeholder="$t(`wallet.zhuanqian12`)">
      </div>
    </r-modal>
  </section>
</template>
<script>
export default {
  name: "zhuanqian",
  data() {
    return {
      close: false,
      isShowPswModal: false,
      coins: ["btc", "xrp", "eos", "bth"],
      coin: this.$route.query.coin
    };
  },
  methods: {
    submit(){
      this.isShowPswModal = true
    },
    submitPsw(){

    },
    changeAddrModal() {
      this.isShowModal = true;
    },
    toclose() {
      this.close = !this.close;
    },
    toacceptCoin() {
      this.$router.push({
        path: "/acceptCoin",
        query: {
          type: 1
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.zhuanqian {
  text-transform: uppercase;
  margin-top: 65px;
  padding: 0 15px;
  .cointype {
    margin-bottom: 15px;
    border-radius: 4px;
    display: flex;
    color: $white;
    justify-content: space-between;
    padding: 15px;
    align-items: center;
    background: $bg2;
    .r {
      color: $color1;
      font-size: 13px;
    }
    img {
      width: 8px;
      height: 8px;
    }
  }
  .box2 {
    margin-bottom: 15px;
    color: $white;
    font-size: 14px;
    background: $bg2;
    padding: 15px;
    border-radius: 4px;
    .l {
      color: $color1;
      padding-top: 15px;
      margin-top: 10px;
      border-top: 1px solid $bg;
    }
    .text2 {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 30px;
      .r {
        span {
          color: $color1;
        }
      }
      img {
        width: 20px;
        height: 20px;
      }
      input {
        height: 100%;
        border: none;
        min-width: 90%;
        color: $white;
        background: none;
      }
      .in2 {
        min-width: 70%;
      }
      .r {
        bottom: 1px solid red;
      }
    }
  }
  .coinchange {
    width: 100%;
    height: 100vh;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    background: $bg4;
    .coinbox {
      position: absolute;
      bottom: 0;
      background: $bg;
      width: 100%;
      .cg {
        border-top: 10px solid $nav-bg;
      }
      .coin {
        width: 100%;
        text-align: center;

        height: 48px;
        color: $color1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid $nav-bg;
        img {
          width: 20px;
          height: 20px;
        }
        div {
          margin-left: 6px;
          display: inline-block;
        }
      }
    }
  }
}
</style>
