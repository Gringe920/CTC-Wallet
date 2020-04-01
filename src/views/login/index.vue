<template>
  <section>
    <div class="header">
      <img @click="reply" src="../../assets/images/home_search_white@2x(1).png" alt class="icon_l" />
      <span @click="$router.push({path: '/phoneRegist'})">{{$t('login.regist')}}</span>
    </div>
    <div class="container">
      <div class="l-tit">{{$t('login.userLogin')}}</div>
      <div class="l-info-box">
        <input :placeholder="$t('login.placeholder0')" type="number" v-model="account" class="account"/>
        <div class="line"></div>
        <input :placeholder="$t('login.placeholder1')" type="Password" v-model="password"/>
        <div class="line"></div>
        <div @click="submit">
        <r-button :text="$t('login.btn0')" class="btn-login"/>
        </div>
        <span class="forget"  @click="$router.push({ path: '/forget'})">{{$t('login.forget')}}</span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isAllow: true,
      account: "",
      submitstatus: false,
      password: ""
    };
  },
  created() {},
  methods: {
    submit() {
      const { account, password } = this;
      if (this.isEmpty(account)) {
        this.$toast.show(this.$t('login.toast0'));
        return;
      }
      if (!this.isValidPhone(account)) {
        this.$toast.show(this.$t('login.toast1'));
        return;
      }
      if (this.isEmpty(password)) {
        this.$toast.show(this.$t('login.toast2'));
        return;
      }
      var self = this;
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/login",
        params: {
          phone: self.account,
          pwd: self.password,
          district: "+86"
        }
      })
        .then(res => {
          self.submitstatus = false;
          this.$toast.show(this.$t('login.toast3'));
          this.getLoginInfo();
        })
        .catch(err => {
          self.submitstatus = false;
          this.errorMsg(err.code)
        });
    },
    getLoginInfo() {
      var self = this;
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/user_info",
        params: {}
      })
        .then(res => {
          self.submitstatus = false;
          setTimeout(function() {
            self.$router.push("/ctc");
          }, 1000);
        })
        .catch(err => {
          self.submitstatus = false;
        });
    },
    reply() {
      if (typeof plus == "object") {
        let webview = plus.webview.getWebviewById('otc');
        webview.back();
      } else {
        this.$router.go(-1);
      }
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
      margin-bottom: 10px;
    }
    .l-info-box {
      input {
        padding: 15px 0;
        width: 100%;
      }
      .btn-login {
        margin: 30px 0;
      }
      .forget {
        font-size: 14px;
        color: #1771ed;
      }
    }
  }
}
</style>