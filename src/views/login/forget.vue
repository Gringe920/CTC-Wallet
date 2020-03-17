<template>
  <section>
    <div class="header">
      <img @click="reply" src="../../assets/images/return_black@2x.png" alt class="icon_l" />
    </div>
    <div class="container">
      <div class="l-tit" >{{next?'设置新登陆密码':'忘记密码'}}</div>
      <div class="l-info-box">
        <input v-show="!next" placeholder="请输入手机或邮箱" type="text" v-model="account" class="account"/>
        <div class="line" v-show="!next"></div>
        <div class="code-box" v-show="!next">
          <input placeholder="请输入验证码" type="text" v-model="code" />
          <span @click="getcode" :class="timeStatus?'timechecked':''">{{timeStatus?time+'s':"发送验证码"}}</span>
        </div>
        <div class="line"></div>
              <input v-show="next" placeholder="请输入密码" type="Password"  v-model="Password"/>
        <div class="line" v-show="next"></div>
        <input v-show="next" placeholder="请再次输入密码" type="Password"  v-model="rePassword"/>
        <div class="line" v-show="next"></div>
         <div  class="btn-login" @click="nextshow()" v-show="!next">
        <r-button text="下一步"/>
      </div>
      <div  class="btn-login" @click="submit()" v-show="next">
        <r-button text="确定"/>
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
      code: "",
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
        this.$toast.show("手机号码不能为空");
        return;
      }
      if (!this.isValidPhone(account)) {
        this.$toast.show("手机号格式错误");
        return;
      }
      if (!this.timeStatus) {
        this.$toast.show("请先获取验证码!");
        return;
      }
      if (!this.code) {
        this.$toast.show("验证码不能为空!");
        return;
      }
      this.next = !this.next;
    },
    submit() {
      const { Password, rePassword } = this;
      if (this.isEmpty(Password)) {
        this.$toast.show("交易密码不能为空");
        return;
      }
      if (this.isEmpty(rePassword)) {
        this.$toast.show("确认密码不能为空");
        return;
      }
      if (Password != drePassword) {
        this.$toast.show("交易密码与确认密码不相同");
        return;
      }
      var self = this;
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/register",
        params: {
          phone: self.account,
          mail: "xiemei1996@163.com",
          pwd: self.password,
          verify: self.code,
          district: "+86"
        }
      })
        .then(res => {
          self.submitstatus = false;
          this.$toast.show("注册成功");
        })
        .catch(err => {
          self.submitstatus = false;
          this.$toast.show("注册失败");
          s;
        });
    },
    reply() {
      if (typeof plus == "object") {
        let webview = plus.webview.getLaunchWebview();
        webview.back();
      } else {
        this.$router.go(-1);
      }
    },
    getcode() {
      var self = this;
      if (this.timeStatus) {
        this.$toast.show("请不要重复操作!");
        return;
      }
      if (this.timeStatus) return;
      var times = setInterval(function() {
        self.timeStatus = true;
        if (self.time == 1) {
          self.timeStatus = false;
          self.time = 6;
          clearInterval(times);
        }
        self.time = self.time - 1;
      }, 1000);

      if (this.codeStatus) return;
      this.codeStatus = true;
      return;
      this.axios({
        url: "/service/register_verify",
        params: {
          phone: self.account,
          mail: self.mail,
          district: self.district
        }
      })
        .then(res => {
          self.codeStatus = false;
          this.$toast.show("验证码已发送");
        })
        .catch(err => {
          self.codeStatus = false;
          this.$toast.show("验证码发送失败,请稍后再试");
        });
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