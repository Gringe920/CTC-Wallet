<template>
  <section>
    <Header title="选择收款方式" />
    <div class="container">
      <div class="tips">*请至少添加一种支付方式</div>
      <div class="line"></div>
      <div class="pay-box">
        <div class="pay-logo">
          <img src="../../assets/images/set_wechat@2x.png" alt />
        </div>
        <div class="pay-info">
          <div class="p-tit">微信</div>
        </div>
        <div class="turn-right ">
          <span>未添加</span>
          <i></i>
        </div>
      </div>
      <div class="line"></div>
      <div class="pay-box">
        <div class="pay-logo">
          <img src="../../assets/images/set_alipay@2x.png" alt />
        </div>
        <div class="pay-info">
          <div class="p-tit">支付宝</div>
        </div>
        <div class="turn-right">
          <span>未添加</span>
          <i></i>
        </div>
      </div>
      <div class="line"></div>
      <div class="pay-box">
        <div class="pay-logo">
          <img src="../../assets/images/set_card@2x.png" alt />
        </div>
        <div class="pay-info">
          <div class="p-tit">工商银行卡</div>
        </div>
        <div class="turn-right">
          <span class="blue">已添加</span>
          <i></i>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isWechat: false,
      isAlipay: false,
      isBank: false
    };
  },
  watch: {
    isWechat(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  height: 100%;
}
.container {
  padding: 50px 15px 0;
  height: 100%;
  .tips {
    color: #97a2af;
    font-size: 12px;
    padding: 15px 0;
  }
  .pay-box {
    display: flex;
    align-items: center;
    padding: 15px 0;
    position: relative;
    .pay-logo {
      width: 34px;
      margin-right: 10px;
      img {
        width: 100%;
      }
    }
    .pay-info {
      .p-tit {
        font-size: 14px;
      }
      .p-num {
        color: #97a2af;
        font-size: 12px;
      }
    }
    .turn-right{
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      .blue{
        color: $fontActive;
      }
    }
  }
}
</style>