<template>
  <section>
    <div class="header">
      <img @click="reply" src="../../assets/images/home_search_white@2x(1).png" alt class="icon_l" />
    </div>
    <div class="container">
      <div class="l-tit" >{{next?$t('user.userMsg42'):$t('user.userMsg43')}}</div>
      <div class="l-info-box">
        <input v-show="!next" :placeholder="$t('user.userMsg44')" type="text" v-model="account" class="account"/>
        <div class="line" v-show="!next"></div>
        <div class="code-box" v-show="!next">
          <input :placeholder="$t('user.userMsg45')" type="text" v-model="code" />
          <span @click="getcode" :class="isTiktok ?'timechecked':''">{{isTiktok ? `${remainedTime}s`:$t('user.userMsg46') }}</span>
        </div>
        <div class="line"></div>
              <input v-show="next" :placeholder="$t('user.userMsg33')" type="Password"  v-model=" Password"/>
        <div class="line" v-show="next"></div>
        <input v-show="next" :placeholder="$t('user.userMsg34')" type="Password"  v-model="rePassword"/>
        <div class="line" v-show="next"></div>
         <div  class="btn-login" @click="nextshow()" v-show="!next">
        <r-button :text="$t('user.userMsg47')"/>
      </div>
      <div  class="btn-login" @click="submit()" v-show="next">
        <r-button :text="$t('user.userMsg21')"/>
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
        this.$toast.show(this.$t('user.userMsg48'));
        return;
      }
      if (!this.isValidPhone(account)) {
        this.$toast.show(this.$t('user.userMsg49'));
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
        this.$toast.show(this.$t('user.userMsg37'));
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
        url: "/service/find_deal_pwd",
        params: {
          phone: self.account,
          pwd: Password,
          code: self.code,
          district: "+86"
        }
      })
        .then(res => {
          self.submitstatus = false;
          this.$toast.show(this.$t('user.userMsg52'));
          this.account = ''
          this.Password=''
          this.code =''
          this.rePassword = ''
        })
        .catch(err => {
          self.submitstatus = false;
               this.errorMsg(err.code)
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
        this.$toast.show(this.$t('user.userMsg48'));
        return;
      }
      if (!this.isValidPhone(account)) {
        this.$toast.show(this.$t('user.userMsg49'));
        return;
      }
      if (this.codeStatus) return;
      this.codeStatus = true;
      this.axios({
        url: "/c2c/getVerifyCode",
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
               this.errorMsg(err.code)
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