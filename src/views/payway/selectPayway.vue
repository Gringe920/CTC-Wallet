<template>
  <section>
       <Header :title="$t(`pay.pay54`)" ></Header>
    <div class="container">
      <div class="tips">*{{$t(`pay.pay55`)}}</div>
      <div class="line"></div>
      <div class="pay-box"  @click="$router.push({path: '/addWechat'})">
        <div class="pay-logo">
          <img src="../../assets/images/set_wechat@2x.png" alt />
        </div>
        <div class="pay-info">
          <div class="p-tit">{{$t(`pay.pay56`)}}</div>
        </div>
        <div class="turn-right ">
          <span :class='user.wechat_state == 1 ? "blue" :""'> {{user.wechat_state == 1 ? $t(`pay.pay57`):$t(`pay.pay58`)}}</span>
          <i></i>
        </div>
      </div>
      <div class="line"></div>
      <div class="pay-box" @click="$router.push({path: '/addAlipay'})">
        <div class="pay-logo">
          <img src="../../assets/images/set_alipay@2x.png" alt />
        </div>
        <div class="pay-info">
          <div class="p-tit">{{$t(`pay.pay59`)}}</div>
        </div>
        <div class="turn-right">
      <span :class='user.alipay_state == 1 ? "blue" :""'> {{user.alipay_state == 1 ? $t(`pay.pay57`):$t(`pay.pay58`)}}</span>
          <i></i>
        </div>
      </div>
      <div class="line"></div>
      <div class="pay-box" @click="$router.push({path: '/addBank'})">
        <div class="pay-logo">
          <img src="../../assets/images/set_card@2x.png" alt />
        </div>
        <div class="pay-info">
          <div class="p-tit">{{$t(`pay.pay60`)}}</div>
        </div>
        <div class="turn-right">
       <span :class='user.bankcard_state == 1 ? "blue" :""'> {{user.bankcard_state == 1 ?  $t(`pay.pay57`): $t(`pay.pay58`)}}</span>
          <i></i>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isWechat: false,
      isAlipay: false,
      isBank: false
    };
  },
     computed: {
    ...mapState(['user'])
  },
  methods:{
  },
  watch: {
    isWechat(val) {
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
      color: $color1;
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