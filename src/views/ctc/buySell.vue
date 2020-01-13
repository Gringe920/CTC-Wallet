<template>
  <section class="buySellbox" >
    <div class="infos">
      <div class="top top2">
        <div class="l ">购买</div>
        <img class="img2" src="" alt="" srcset="">
      </div>
      <div class="top">
        <div class="l2">单笔限额</div>
        <div class="r">¥199.00 - ¥20000.00</div>
      </div>
      <div class="top">
        <div class="l2">委托价格</div>
        <div class="r2">6.89CNY</div>
      </div>
      <div class="top">
        <div class="l2">付款方式</div>
          <div class="right">
            <img src="../../assets/images/otc_bank_card@2x.png" alt="" srcset="">
            <img src="../../assets/images/otc_wechat@2x.png" alt="" srcset="">
            <img src="../../assets/images/otc_alipay@2x.png" alt="" srcset="">
          </div>
      </div>
       <div class="n">余额：8000.00 USDT &nbsp;去划转</div>
       <div class="inpbox">
         <div class="left">
           <div class="inp bt br">
             <input type="text" placeholder="最大可卖出20000.00">
             <span>CNY</span>
           </div>
            <div class="inp br">
             <input type="text" placeholder="最大可卖出169888.26">
             <span>USdt</span>
           </div>
         </div>
         <div class="right"> <span>全部</span></div>
       </div>
       <div class="btn"> 出售</div>
    </div>
  </section>
</template>
<script>
export default {
  name: "buySellbox",
  props: {
    show: {
      // 背景色
      type: String,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
.buySellbox {
  width: 100vw;
  position: absolute;
  height: 100%;
  z-index: 100;
  top: 50px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.5);
  .infos {
    width: 100%;
    background: $white;
    padding: 20px 15px;
    .top {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .l {
        font-size: 18px;
        color: $color2;
      }
      .l2 {
        font-size: 14px;
        color: $color1;
      }
      .right {
        img {
          width: 15px;
          height: 15px;
          margin-left: 10px;
        }
      }
      .r2 {
        font-family: 14px;
        color: $fontActive;
      }
      .img2 {
        width: 15px;
        height: 15px;
      }
    }
    .top2 {
      margin-bottom: 20px;
    }
    .n {
      margin-top: 20px;
      font-size: 14px;
      color: $color1;
    }
    .inpbox {
      margin-bottom: 25px;
      margin-top: 12px;
      display: flex;
      align-items: center;
      border-radius: 3px;
      border: 1px solid $border;
      .left {
        width: 80%;
        .inp {
          padding: 0 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 50px;
          span {
            color: $color2;
            text-transform: uppercase;
            font-size: 14px;
          }
          input {
            border: none;
            width: 80%;
            height: 100%;
          }
        }
        .br {
          border-right: 1px solid $border;
        }
        .bt {
          border-bottom: 1px solid $border;
        }
      }
      .right {
        width: 20%;
        text-align: center;
        font-size: 14px;
        color: $fontActive;
      }
    }
  }
}
</style>

