<template>
  <section>
    <div class="header">
      <img @click="reply" src="../../assets/images/return_black@2x.png" alt class="icon_l" />
      <span @click="$router.push({path: '/phoneRegist'})">注册</span>
    </div>
    <div class="container">
      <div class="l-tit">用户登录</div>
      <div class="l-info-box">
        <input placeholder="手机" type="number" v-model="account" class="account"/>
        <div class="line"></div>
        <input placeholder="密码" type="text" v-model="password"/>
        <div class="line"></div>
        <div @click="submit">
        <r-button text="立即登录" class="btn-login"/>
        </div>
        <span class="forget"  @click="$router.push({ path: '/forget'})">忘记密码？</span>
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
        this.$toast.show("手机号码不能为空");
        return;
      }
      if (!this.isValidPhone(account)) {
        this.$toast.show("手机号格式错误");
        return;
      }
      if (this.isEmpty(password)) {
        this.$toast.show("登陆密码不能为空");
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
          this.$toast.show("登陆成功!");
          this.getLoginInfo();
        })
        .catch(err => {
          self.submitstatus = false;
          this.$toast.show({ msg: "登录失败，请重试" });
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
        let webview = plus.webview.getLaunchWebview();
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