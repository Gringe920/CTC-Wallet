<template>
<section>
  <div class="modal-wrap"></div>
  <div class="pasword">
    <div class="top">
      <div class="l">{{$t('wallet.zhuanqian12')}}</div>
      <img class="img2" @click="onClose" src="../assets/images/top_off_black@2x.png" alt srcset />
    </div>
    <div class="inp">
      <input type="password" v-model="password" :placeholder="$t('placeholder1')" />
    </div>
    <div class="inp">
      <input type="number" v-model="verifyCode" :placeholder="$t('placeholder2')" />
      <div class="code" @click="getVerifyCode">{{isTiktok ? `${remainedTime}s`: $t('user.userMsg46') }}</div>
    </div>
    <div class="btn" @click="onConfirm">{{$t('confirm')}}</div>
  </div>
</section>
  
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      isTiktok: false,
      remainedTime: this.countdown,
      verifyCode: "",
      password: ""
    };
  },
  computed: {},
  props: {

    countdown: {
      type: Number,
      default: 60
    },
  },
  methods: {
    getVerifyCode() {
   
      if (this.timer != null) {
        return;
      }
      this.axios({
        url: "/c2c/getVerifyCode",
        params: {}
      })
        .then(_ => {
          this.startCountdown();
          this.$toast.show(this.$t('toast0'));
        })
        .catch(err => {
          this.$toast.show(err.message || this.$t('toast1'));
        });
    },
    startCountdown() {
      this.isTiktok = true; // start tiktok
      this.remainedTime = this.countdown; // init time
      this.timer = setInterval(() => {
        this.remainedTime -= 1;
        if (this.remainedTime <= 0) {
          clearInterval(this.timer);
          this.timer = null;
          this.isTiktok = false;
        }
      }, 1000);
    },
    onConfirm() {
         const { password,isTiktok } = this;
      if (this.isEmpty(password)) {
        this.$toast.show(this.$t('user.userMsg73'));
        return;
      }
      if (!this.isTiktok) {
        this.$toast.show(this.$t('user.userMsg50'));
        return;
      }
      if (!this.verifyCode) {
        this.$toast.show(this.$t('user.userMsg51'));
        return;
      }
      this.$emit("onConfirm", this.password, this.verifyCode);
    },
    onClose() {
      this.$emit("onClose");
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
}
.modal-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
}
.pasword {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: $border2;
  padding: 25px 15px;
  border-radius: 16px 16px 0px 0px;
  z-index: 100;
  color:$color1;
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
    border: 1px solid $color1;
    height: 44px;
    input {
      min-width: 70%;
      line-height: 44px;
      padding: 5px;
    }

    .code {
      line-height: 44px;
      padding-left: 10px;
      padding-right: 5px;
      border-left: 0.3px solid $color1
    }
  }
}
</style>