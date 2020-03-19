<template>
  <section>
       <Header title="支付方式" ></Header>
    <div class="container">
      <div class="tips">*请至少添加一种支付方式</div>
      <div class="line"></div>
      <div class="pay-box"  @click="$router.push({path: '/addWechat'})">
        <div class="pay-logo">
          <img src="../../assets/images/set_wechat@2x.png" alt />
        </div>
        <div class="pay-info">
          <div class="p-tit">微信</div>
        </div>
        <div class="turn-right ">
          <span :class='user.wechat_state == 1 ? "blue" :""'> {{user.wechat_state == 1 ? '已设置':'未设置'}}</span>
          <i></i>
        </div>
      </div>
      <div class="line"></div>
      <div class="pay-box" @click="$router.push({path: '/addAlipay'})">
        <div class="pay-logo">
          <img src="../../assets/images/set_alipay@2x.png" alt />
        </div>
        <div class="pay-info">
          <div class="p-tit">支付宝</div>
        </div>
        <div class="turn-right">
      <span :class='user.alipay_state == 1 ? "blue" :""'> {{user.alipay_state == 1 ? '已设置':'未设置'}}</span>
          <i></i>
        </div>
      </div>
      <div class="line"></div>
      <div class="pay-box" @click="$router.push({path: '/addBank'})">
        <div class="pay-logo">
          <img src="../../assets/images/set_card@2x.png" alt />
        </div>
        <div class="pay-info">
          <div class="p-tit">银行卡</div>
        </div>
        <div class="turn-right">
       <span :class='user.bankcard_state == 1 ? "blue" :""'> {{user.bankcard_state == 1 ? '已设置':'未设置'}}</span>
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
    delWechat(){
       this.axios({
        url: "/service/user_info",
        params: {
          pwd: '123',
          code:''
        }
      })
        .then(res => {
          this.$toast.show("设置成功");
        })
        .catch(err => {
          this.$toast.show("设置失败");
        });
    }
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