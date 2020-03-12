<template>
  <section class="chat">
       <Header title="聊天嗨起来" :leftIcon='require("../../assets/images/top_off_black@2x.png")'></Header>
       <div class="order">
         <div class="top">
           <div class="left">
             <span>买</span>
            USDT
           </div>
           <div class="r">待打款</div>
         </div>
         <div class="last">
           交易金额:&nbsp;87898&nbsp;CNY
         </div>
       </div>
       <div class="date">
         <div class="dae">2018-12-25 08:02:20</div>
          <div class="status">
          您已成功下单，请及时支付。
        </div>
       </div>
       <div class="chatinfo">
         <div class="img"></div>
       </div>
       <div class="btnsub">
         <input type="text" placeholder="在此输入你的对话">
         <img src="../../assets/images/chat_picture@2x.png" alt="" srcset="">
       </div>
  </section>
</template>
<script>
export default {
  name: "chat",
  data() {
    return {};
  },
  methods: {
    
  }
};
</script>
<style lang="scss" scoped>
.chat {
  padding-top: 50px;
  .order {
    margin: 15px;
    margin-top: 15px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.03);
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 15px;
    .top {
      display: flex;
      font-size: 13px;
      justify-content: space-between;
      padding-bottom: 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      .left {
        color: $active;

        span {
          color: $white;
          border-radius: 100%;
          margin-right: 5px;
          background: $btnDefalutBg;
          padding: 5px;
        }
      }
      .r {
        color: $fontActive;
      }
    }
    .last {
      color: $fontActive;
      font-size: 16px;
      margin-top: 10px;
    }
  }
  .date {
    text-align: center;
    color: $color1;
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 20px;
    .dae {
      padding-bottom: 5px;
    }
    .status {
      display: inline;
      background: rgba(216, 216, 216, 0.2);
      padding: 2px 5px;
    }
  }
  .btnsub {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    align-items: center;
    box-shadow: 0px 2px 14px 0px rgba(30, 49, 107, 0.1);
    img {
      width: 22px;
      height: 22px;
    }
    input {
      min-width: 80%;
    }
  }
}
</style>
