<template>
  <section>
    <div class="header">
      <img @click="reply" src="../../assets/images/home_search_white@2x(1).png" alt class="icon_l" />
    </div>
    <div class="container">
      <div class="l-tit" >{{next? $t('login.setNew') :$t('login.forgetPwd')}}</div>
      <div class="l-info-box">
        <input v-show="!next" :placeholder="$t('user.userMsg44')" type="text" v-model="account" class="account"/>
        <div class="line" v-show="!next"></div>
        <div class="code-box" v-show="!next">
          <input :placeholder="$t('user.userMsg45')" type="text" v-model="code" />
          <span @click="getcode" :class="isTiktok ?'timechecked':''">{{isTiktok ? `${remainedTime}s`: $t('user.userMsg46') }}</span>
        </div>
        <div class="line"></div>
              <input v-show="next" :placeholder="$t('lang12')" type="Password"  v-model="Password"/>
        <div class="line" v-show="next"></div>
        <input v-show="next" :placeholder="$t('login.placeholder4')" type="Password"  v-model="rePassword"/>
        <div class="line" v-show="next"></div>
         <div  class="btn-login" @click="nextshow()" v-show="!next">
        <r-button :text="$t('login.next')"/>
      </div>
      <div  class="btn-login" @click="submit()" v-show="next">
        <r-button :text="$t('confirm')"/>
      </div>
      </div>
      </div>
      <div >
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isAllow: true,
      account: "",
      Password: "",
      rePassword: "",
      time: 60,
      isTiktok: false,
      code: "",
      remainedTime: 60,
      next: false,
      checked: false,
      district: "+86",
      codeStatus: false,
      timeStatus: false,
      submitstatus: false
    };
  },
  methods: {
    nextshow() {
      const { account } = this;
      if (this.isEmpty(account)) {
        this.$toast.show(this.$t('login.toast0'));
        return;
      }
      if (!this.isValidPhone(account)) {
        this.$toast.show(this.$t('login.toast1'));
        return;
      }
      if (!this.isTiktok) {
        this.$toast.show(this.$t('user.userMsg50'));
        return;
      }
      if (!this.code) {
        this.$toast.show(this.$t('user.userMsg51'));
        return;
      }
      this.next = !this.next;
    },
    submit() {
      const { Password, rePassword } = this;
      if (this.isEmpty(Password)) {
        this.$toast.show(this.$t('user.userMsg73'));
        return;
      }
      if (this.isEmpty(rePassword)) {
        this.$toast.show(this.$t('user.userMsg38'));
        return;
      }
      if (Password != rePassword) {
        this.$toast.show(this.$t('user.userMsg39'));
        return;
      }
      var self = this;
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/find_pwd",
        params: {
          phone: self.account,
          pwd: self.Password,
          code: self.code,
          district: "+86"
        }
      })
        .then(res => {
          self.submitstatus = false;
          this.$toast.show(this.$t('user.userMsg76'));
          setTimeout(function(){
            self.$router.push("login");
          },1000)
        })
        .catch(err => {
          self.submitstatus = false;
          this.$toast.show(this.$t('user.userMsg77'));
        });
    },
    reply() {
      if (typeof plus == "object") {
        let webview = plus.webview.getWebviewById('otc');
        webview.back();
      } else {
        this.$router.go(-1);
      }
    },

    getcode() {
      var self = this;
      const {account} = this;
      if (this.isEmpty(account)) {
        this.$toast.show(this.$t('login.toast0'));
        return;
      }
      if (!this.isValidPhone(account)) {
        this.$toast.show(this.$t('login.toast1'));
        return;
      }
      if (this.codeStatus) return;
      this.codeStatus = true;
      this.axios({
        url: "/service/findPwdVerify",
        params: {
          phone: self.account,
          district: self.district
        }
      })
        .then(res => {
          self.codeStatus = false;
          this.$toast.show(this.$t('user.userMsg53'));
          this.startCountdown();
        })
        .catch(err => {
          self.codeStatus = false;
          this.$toast.show(this.$t('user.userMsg78'));
        });
    },
    startCountdown() {
      this.isTiktok = true; // start tiktok
      this.remainedTime = 60 // init time
      this.timer = setInterval(() => {
        this.remainedTime -= 1;
        if (this.remainedTime <= 0) {
          clearInterval(this.timer);
          this.timer = null;
          this.isTiktok = false;
        }
      }, 1000);
    }
  },
  watch: {
    account(val) {
      if (val) {
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.timechecked {
  color: $color1 !important;
}
section {
  .header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 0 15px;
    span {
      line-height: 50px;
      font-size: 14px;
      color: #1771ed;
    }
    img {
      width: 20px;
      height: 20px;
      margin-top: 13px;
    }
  }
  .container {
    padding: 0 15px;
    .l-tit {
      margin-top: 30px;
      font-size: 23px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .l-info-box {
      .code-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          color: #1771ed;
          font-size: 14px;
          text-align: right;
        }
      }
      input {
        padding: 15px 0;
      }
      .btn-login {
        padding: 30px 0 !important;
      }
      .forget {
        font-size: 14px;
        color: #1771ed;
      }
    }
  }
}
</style>