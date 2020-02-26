<template>
  <section>
    <div class="header">
      <img @click="reply" src="../../assets/images/return_black@2x.png" alt class="icon_l" />
      <span @click="$router.push({path: '/login'})">登录</span>
    </div>
    <div class="container">
      <div class="l-tit" @click="submit()">{{next?'设置登陆密码':type=='email'?"邮箱注册":'手机注册'}}</div>
      <div class="l-info-box">
        <div class="region"  v-if="!next ">中国<i></i></div>
        <div classs="account-box"  v-if="!next && type=='phone'">
          <span class="area-code">+86</span>
          <input placeholder="请输入手机" type="number" v-model="account" class="account"/>
        </div>
          <div class="line" v-show="!next && type=='email'"></div>
           <div class="code-box2" v-show="!next && type=='email'">
          <input placeholder="请输入邮箱地址" type="text"  v-model="mail"/>
        </div>
        <div class="line" v-show="next"></div>
        <div class="line"  v-if="!next"></div>
        <div class="code-box"  v-if="!next">
          <input placeholder="请输入验证码" type="number" v-model="code" />
          <span :class="timeStatus?'timechecked':''" @click="getcode">{{timeStatus?time+'s':"发送验证码"}}</span>
        </div>
        <div class="line" v-show="next"></div>
           <div class="code-box2" v-show="next">
          <input placeholder="请输入密码" type="password"  v-model="password"/>
        </div>
        <div class="line" v-show="next"></div>
          <div class="code-box2" v-show="next">
          <input placeholder="请再次输入密码" type="Password"  v-model="rePassword"/>
        </div>
        <div class="line" v-show="next"></div>
        <div class="allow" :class="checked?'checked':''" v-if='!next'>
          <i @click="toyi" ></i>
          同意《用户服务条款与用户隐私协议》
        </div>
        <div @click="nextshow()" v-if="!next">
          <r-button text="下一步"  class="btn-login"/>
        </div>
        <div  @click="submit()"  v-if="next"> 
          <r-button text="确定" class="btn-login"/>
        </div>
        <span  v-if="type=='phone'" class="forget" @click="typechange('email')">邮箱注册</span>
         <span  v-if="type=='email'" class="forget" @click="typechange('phone')">手机注册</span>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isAllow: true,
      account: "15111487619",
      mail: "xiemei1996@163.com",
      code: "",
      password: "xiemei123456",
      rePassword: "xiemei123456",
      time: 60,
      next: false,
      checked: false,
      district: "+86",
      codeStatus: false,
      timeStatus: false,
      submitstatus: false
    };
  },
  computed: {
    ...mapState(["type"])
  },
  mounted() {

  },
  methods: {
    toyi() {
      this.checked = !this.checked;
    },
    typechange(index) {
      this.$store.commit("type", index);
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
        console.log("1");
        self.time = self.time - 1;
      }, 1000);

      if (this.codeStatus) return;
      this.codeStatus = true;
      console.log(this.codeStatus, "-----------codeStatus");
      this.axios({
        url: "/service/register_verify",
        params: {
          phone: self.account,
          mail: self.mail,
          district: self.district
        }
      })
        .then(res => {
          console.log("initdata1----------");
          self.codeStatus = false;
          console.log(res);
        })
        .catch(err => {
          console.log("initdata2----------");
          self.codeStatus = false;
          console.log(err);
        });
    },
    nextshow() {
      if (!this.timeStatus) {
        this.$toast.show("请先获取验证码!");
        return;
      }
      if (!this.code) {
        this.$toast.show("验证码不能为空!");
        return;
      }
      if (!this.checked) {
        this.$toast.show("请先阅读并同意协议!");
        return;
      }
      this.next = !this.next;
    },
    submit() {
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
          console.log(res);
        })
        .catch(err => {
          self.submitstatus = false;
          this.$toast.show("注册失败");
          console.log(err);
        });
    },
    reply() {
      if (this.next) {
        this.next = !this.next;
        return;
      }
      if (this.leftEv()) {
        return;
      }
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
      margin-bottom: 35px;
    }
    .l-info-box {
      .region {
        font-size: 14px;
        margin-bottom: 25px;
        i {
          display: inline-block;
          width: 8px;
          height: 4px;
          background-image: url("../../assets/images/triangle_lower@2x.png");
          background-size: 100% 100%;
          margin-left: 5px;
        }
      }
      .area-code {
        font-size: 14px;
        margin-right: 10px;
      }
      .code-box2 {
        input {
          width: 100%;
        }
      }
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

      .allow {
        font-size: 12px;
        color: #97a2af;
        margin-top: 20px;
        i {
          display: inline-block;
          width: 12px;
          height: 12px;
          background-image: url("../../assets/images/night_asset_unchecked@2x.png");
          background-size: 100% 100%;
          margin-right: 8px;
          vertical-align: middle;
        }
        i.checked {
          background-image: url("../../assets/images/asset_selection@2x.png");
        }
      }
      .checked {
        color: $btnDefalutBg;
        i {
          background-image: url("../../assets/images/asset_selection@2x.png");
        }
      }
      input {
        padding: 15px 0;
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