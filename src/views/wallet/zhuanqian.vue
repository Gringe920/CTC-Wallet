<template>
  <section class="zhuanqian">
      <Header title="转账" :rightEv='toacceptCoin' :rightIcon="require('../../assets/images/record@2x.png')"></Header>
      <div class="cointype">
        <div class="l">BTC</div>
        <div class="r" @click="toclose">
          选择币种
          <img src="../../assets/images/triangle@2x.png" alt="" srcset="">
        </div>
      </div>
      <div class="box2">
        <div class="text1">接收地址</div>
        <div class="text2">
          <input type="text" placeholder="请输入或长按粘贴地址">
          <img src="../../assets/images/add_scan_white@2x(2).png" alt="" srcset="">
        </div>
      </div>
       <div class="box2">
        <div class="text1">数量</div>
        <div class="text2">
          <input type="text" placeholder="请输入数量" class="in2">
          <div class="r">
            <span>btc&nbsp;&nbsp;|</span>&nbsp;&nbsp;全部
          </div>
        </div>
         <div class="l">*可用：0.0000 BTC；手续费：0.0000 RCP</div>
      </div>
      <div class="btn">确定</div>
      <div class="coinchange" v-if="close" @click="toclose">
        <div class="coinbox">
          <div class="coin" v-for="item in 4 " :key='item'>
            <img src="../../assets/images/btc@2x.png" alt="" srcset="">
            <div>BTC</div>
          </div>
           <div class="coin cg" >
            <div @click.stop="toclose">取消</div>
          </div>
        </div>
      </div>
  </section>
</template>
<script>
export default {
  name: "zhuanqian",
  data() {
    return {
      close:false
    };
  },
  methods: {
    toclose(){
      this.close = ! this.close;
    },
    toacceptCoin() {
      this.$router.push({ path: "/acceptCoin" });
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
      .in2{
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
