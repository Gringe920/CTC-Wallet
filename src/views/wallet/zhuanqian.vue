<template>
    <section class="zhuanqian">
        <Header title="提币" :rightEv='toacceptCoin' :rightIcon="require('../../assets/images/record_black@2x.png')"></Header>
        <div class="yue">可用：{{canCoin}}&nbsp;{{coin}}</div>
        <div class="cointype">
            <div class="l">币种</div>
            <div class="r" @click="toclose">
                {{coin?coin:$t(`wallet.zhuanqian1`)}}
                <img src="../../assets/images/next_black@2x.png" alt="" srcset="">
            </div>
        </div>
          <div class="cointype">
            <div class="l">接收地址</div>
            <div class="r">
                <span>{{address?address:'请选择接收地址'}}</span>
                <!-- <input type="text" v-model="address" placeholder=""> -->
                <img src="../../assets/images/next_black@2x.png" alt="" srcset="">
            </div>
        </div>

        <div class="cointype">
            <div class="l">转账数量</div>
            <div class="r">
                <input type="number" v-model="num" :placeholder="$t(`wallet.zhuanqian8`)" class="in2">
                <div class="r">
                    <small>&nbsp;&nbsp;|</small>&nbsp;&nbsp; <span @click=" num =canCoin">{{$t(`wallet.zhuanqian4`)}}</span>
                </div>
            </div>
        </div>
        <div class="yue">*提币手续费5RCP;最低提币数量100RCP，请输入正确的提币地址，地址出错币丢失。</div>
        <div class="btn" @click="submit" > {{$t(`wallet.zhuanqian6`)}}{{submitState ? '...' : ''}}</div>

        <div class="coinchange" v-if="close" @click="toclose">
            <div class="coinbox">
                <div @click="clickCoin(item, index)" class="coin" :class="coin == item ? 'active' : ''" v-for="(item, index) in coinVolume3" :key='item'>
                    <div>{{item}}</div>
                </div>
                <div class="coin cg" >
                    <div @click.stop="toclose"> {{$t(`wallet.zhuanqian7`)}}</div>
                </div>
            </div>
        </div>
        <div class="pswBox"  v-if="showPsw">
   <div class="pasword">
      <div class="top">
        <div class="l ">请输入交易密码</div>
        <img class="img2" @click="changebuySellShow" src="../../assets/images/top_off_black@2x.png" alt="" srcset="">
      </div>
      <div class="inp">
        <input type="password" v-model="password" placeholder="输入交易密码">
      </div>
        <div class="inp">
        <input type="password" v-model="code" placeholder="输入交易密码">
        <div class="code">获取验证码</div>
      </div>
       <div class="btn"> 确定</div>
    </div>
        </div>

    </section>
</template>
<script>
export default {
  name: "zhuanqian",
  data() {
    return {
      showPsw: true,
      password: "",
      close: false,
      code:'',
      isShowPswModal: true,
      num: "",
      address: "",
      submitState: false,
      canCoin: 8768,
      coin: "",
      clickAll: "",
      coinVolume3: ["RCP", "USDT", "ETH"]
    };
  },
  created() {},
  methods: {
    toclose() {
      this.close = !this.close;
    },
    changebuySellShow(){
this.showPsw = false;
    },
    toacceptCoin() {},
    submit() {this.showPsw = true;},
    clickCoin(item, index) {
      this.coin = item;
    }
  }
};
</script>
<style lang="scss" scoped>
.zhuanqian {
  text-transform: uppercase;

  position: relative;
  //  padding: 0 15px;
  min-height: 100%;
  padding-top: 55px;
  .pswBox{
    width: 100vw;
    height: 100%;
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background: rgba(0, 0, 0, 0.5);
      .pasword {
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: $white;
    padding: 25px 15px;
    border-radius: 16px 16px 0px 0px;
    .top {
      position: relative;
      margin-bottom: 25px;
      .l {
        text-align: center;
      }
      .img2 {
        position: absolute;
        right: 0;
        top: 0px;
        width: 15px;
        height: 15px;
        margin-left: 10px;
      }
    }
    .inp {
      display: flex;
      padding: 0 5px;
      font-size: 12px;
      justify-content: space-between;
      margin-bottom: 20px;
      border-radius: 6px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      height: 44px;
      input {
        min-width: 70%;
        line-height: 44px;
      }

      .code {
        line-height: 44px;
        padding-left: 10px;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }
  }

  .btn2 {
    margin: 0 20px;
    bottom: 20px;
    display: block;
    line-height: 44px;
    text-align: center;
    background: $fontActive;
    color: $white;
    height: 44px;
  }
  .yue {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 15px;
    font-size: 14px;
    color: $color1;
  }
  .cointype {
    border-radius: 4px;
    display: flex;
    color: $active;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 15px;
    align-items: center;
    .r {
      display: flex;
      align-items: center;
      color: $color1;
      font-size: 14px;
      input {
        text-align: right;
        font-size: 14px;
      }
      .r {
        span {
          color: $active;
          font-size: 14px;
        }
      }
    }
    img {
      width: 12px;
      height: 12px;
    }
  }
  .box2 {
    margin-bottom: 15px;
    color: $active;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
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
        small {
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
        background: none;
      }
      .in2 {
        min-width: 70%;
      }
      .r {
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
        color: $active !important;
        border-top: 5px solid rgba(0, 0, 0, 0.05);
      }
      .coin {
        width: 100%;
        text-align: center;
        color: $color1;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        &.active {
          color: $fontActive;
        }
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