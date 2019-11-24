<template>
  <section class="dapp">
      <div class="header">DAPP</div>
      <div class="bg"></div>
      <div class="content">
        <div class="text1">共识</div>
        <div class="navbox" @click="$router.push({path: './convolution'})">
          <div class="left">
            <img src="../../assets/images/convolution@2x.png" alt="" srcset="">
            <div class="text">
              <div class="t">卷积</div>
              <div class="l">神经网络卷积BTC兑换RCP</div>
            </div>
          </div>
          <div class="r">
            <img src="../../assets/images/triangle@2x.png" alt="" srcset="">
          </div>
        </div>
        <div class="navbox" @click="$router.push({path: './digMine'})">
          <div class="left">
            <img src="../../assets/images/mining@2x.png" alt="" srcset="">
            <div class="text">
              <div class="t">挖矿</div>
              <div class="l">RCP遗传算法挖矿</div>
            </div>
          </div>
          <div class="r">
            <img src="../../assets/images/triangle@2x.png" alt="" srcset="">
          </div>
        </div>
         <div class="navbox" @click="toroute('trade')">
          <div class="left">
            <img src="../../assets/images/transaction@2x.png" alt="" srcset="">
            <div class="text">
              <div class="t">交易</div>
              <div class="l">去中心化交易所</div>
            </div>
          </div>
          <div class="r">
            <img src="../../assets/images/triangle@2x.png" alt="" srcset="">
          </div>
        </div>
        <div class="text1 text2">社区</div>
           <div class="navbox">
          <div class="left">
            <img src="../../assets/images/x@2x.png" alt="" srcset="">
            <div class="text">
              <div class="t">X算力争霸</div>
            </div>
          </div>
          <div class="r">
            <img src="../../assets/images/triangle@2x.png" alt="" srcset="">
          </div>
        </div>
        <div class="navbox">
          <div class="left">
            <img src="../../assets/images/y@2x.png" alt="" srcset="">
            <div class="text">
              <div class="t">Y算力竞赛</div>
            </div>
          </div>
          <div class="r">
            <img src="../../assets/images/triangle@2x.png" alt="" srcset="">
          </div>
        </div>
         <div class="navbox">
          <div class="left">
            <img src="../../assets/images/award@2x.png" alt="" srcset="">
            <div class="text">
              <div class="t">新人奖</div>
            </div>
          </div>
          <div class="r">
            <img src="../../assets/images/triangle@2x.png" alt="" srcset="">
          </div>
        </div>
           <div class="navbox">
          <div class="left">
            <img src="../../assets/images/trading_competition@2x.png" alt="" srcset="">
            <div class="text">
              <div class="t">交易大赛</div>
            </div>
          </div>
          <div class="r">
            <img src="../../assets/images/triangle@2x.png" alt="" srcset="">
          </div>
        </div>
        <div class="navbox" @click="$router.push({path: '/hashGuess'})">
          <div class="left">
            <img src="../../assets/images/hash@2x.png" alt="" srcset="">
            <div class="text">
              <div class="t">HASH竞猜</div>
            </div>
          </div>
          <div class="r">
            <img src="../../assets/images/triangle@2x.png" alt="" srcset="">
          </div>
        </div>
         <div class="navbox" @click="$router.push({path: '/sequence'})">
          <div class="left">
            <img src="../../assets/images/solitaire@2x.png" alt="" srcset="">
            <div class="text">
              <div class="t">接龙</div>
            </div>
          </div>
          <div class="r">
            <img src="../../assets/images/triangle@2x.png" alt="" srcset="">
          </div>
        </div>
      </div>
  </section>
</template>
<script>
export default {
  name: "dapp",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
// xm 2019/11/21 
.dapp {
  margin-bottom:60px;
  .header {
    background: url("../../assets/images/dapp_bj@2x.png");
    height: 60px;
    padding-top: 20px;
    background-repeat: no-repeat;
    background-size: cover;
    color: $white;
    text-align: center;
    font-weight: bold;
  }
  .bg{
    height: 5px;
    margin: 0 15px;
    border-radius:10px 10px 0px 0px;
    background-image: linear-gradient(270deg,rgba(0,194,143,0) 0%,rgba(0,194,143,1) 100%);  
  }
  .content{
    margin: 0 15px;
    background: $bg5;
    padding:0 15px;
    border-radius: 8px;
    // border: 10px solid linear-gradient(rgba(0,194,143,0),rgba(0,194,143,1));
    border: 10px solid linear-gradient(red,green);
    .navbox{
      padding: 8px 0;
      display: flex;justify-content: space-between;
      align-items: center;
      .left{
        display: flex;
        align-items: center;
        img{
          width: 35px;
          height: 35px;
        }
        .text{
          height: 100%;
          margin-left: 5px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .t{
            font-size: 14px;
            color: $white;
          }
          .l{
            // margin-top: 7px;
            font-size: 12px;
            color:$color1;
          }
        }

      }
      .r{
        img{
          width: 10px;
          height: 10px;
        }
      }

    }
    .text1{
      padding: 15px 0 10px 0;
      color: $white;
      font-size: 14px;
    }
    .text2{
          margin-top: 5px;
      border-top: 1px solid $border;
    }
  }
}
</style>
