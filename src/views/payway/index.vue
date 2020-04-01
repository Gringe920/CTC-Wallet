<template>
  <section>
    <Header title="收款方式"  />
    <div class="container">
      <div class="empty">
        <img src="../../assets/images/blank_page_book@2x.png" alt="" srcset="">
        <div>暂无收款方式</div>
      </div>
      <div v-if="false">
      <div class="tips">*请至少添加一种支付方式</div>
        
        <div class="line"></div>
      <div class="pay-box">
        <div class="pay-logo">
          <img src="../../assets/images/set_wechat@2x.png" alt />
        </div>
        <div class="pay-info">
          <div class="p-tit">微信</div>
          <div class="p-num">13823240890</div>
        </div>
        <div class="select-radio">
          <r-switch v-model="isWechat" />
        </div>
      </div>
      <div class="line"></div>
      <div class="pay-box">
        <div class="pay-logo">
          <img src="../../assets/images/set_alipay@2x.png" alt />
        </div>
        <div class="pay-info">
          <div class="p-tit">支付宝</div>
          <div class="p-num">13823240890</div>
        </div>
        <div class="select-radio">
          <r-switch v-model="isAlipay" />
        </div>
      </div>
      <div class="line"></div>
      <div class="pay-box">
        <div class="pay-logo">
          <img src="../../assets/images/set_card@2x.png" alt />
        </div>
        <div class="pay-info">
          <div class="p-tit">工商银行卡</div>
          <div class="p-num">13823240890</div>
        </div>
        <div class="select-radio">
          <r-switch v-model="isBank" />
        </div>
      </div>
      <div class="line"></div>

      </div>
      <r-button text="添加收款方式" width="90%" class="btn-submit" :tocomfirm="addpay()"/>
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

  },
  methods:{
    addpay(){
        this.$router.push({path: '/selectPayway'})

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


  .empty{
    margin-top: 60px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    div{
      margin-top: 10px;
      color: $color1;
    }
    img{
      width: 80px;
      height: 8opx;
    }

  }
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
          color: $color1;
      }
      .p-num {
        color: $color1;
        font-size: 12px;
      }
    }
    .select-radio {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
    }
  }
}
</style>