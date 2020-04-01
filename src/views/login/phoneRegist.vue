<template>
  <section>
    <div class="header">
      <img @click="reply" src="../../assets/images/home_search_white@2x(1).png" alt class="icon_l" />
      <span @click="$router.push({path: '/login'})">{{$t('login.login')}}</span>
    </div>
    <div class="container">
      <div class="l-tit" @click="submit()">{{next? $t('login.setloginPwd') : type=='email'? $t('login.emailRegist') : $t('login.phoneRegist')}}</div>
      <div class="l-info-box">
        <div class="region"  v-if="!next ">{{$t('login.region')}}<i></i></div>
        <div classs="account-box"  v-if="!next && type=='phone'">
          <span class="area-code">+86</span>
          <input :placeholder="$t('user.userMsg44')" type="number" v-model="account" class="account"/>
        </div>
        <div class="line" v-show="!next && type=='email'"></div>
        <div class="code-box2" v-show="!next && type=='email'">
          <input :placeholder="$t('login.placeholder2')" type="text"  v-model="mail"/>
        </div>
        <div class="line" v-show="next"></div>
        <div class="line"  v-if="!next"></div>
        <div class="code-box"  v-if="!next">
          <input :placeholder="$t('user.userMsg45')" type="number" v-model="code" />
          <span :class="isTiktok ?'timechecked':''" @click="getcode">{{isTiktok ? `${remainedTime}s`: $t('user.userMsg46') }}</span>
        </div>
        <div class="line" v-show="next"></div>
           <div class="code-box2" v-show="next">
          <input :placeholder="$t('lang12')" type="password"  v-model="password"/>
        </div>
        <div class="line" v-show="next"></div>
          <div class="code-box2" v-show="next">
          <input :placeholder="$t('login.placeholder4')" type="Password"  v-model="rePassword"/>
        </div>
        <div class="line" v-show="next"></div>
        <div class="allow" :class="checked?'checked':''" v-if='!next'>
          <i @click="toyi" ></i>
          {{$t('login.allow')}}
        </div>
        <div @click="nextshow()" v-if="!next">
          <r-button :text="$t('login.next')"  class="btn-login"/>
        </div>
        <div  @click="submit()"  v-if="next"> 
          <r-button :text="$t('confirm')" class="btn-login"/>
        </div>
        <!-- <span  v-if="type=='phone'" class="forget" @click="typechange('email')">邮箱注册</span> -->
         <span  v-if="type=='email'" class="forget" @click="typechange('phone')">{{$t('login.phoneRegist')}}</span>
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
      account: "",
      mail: " ",
      code: " ",
      password: "",
      rePassword: "",
      time: 60,
      next: false,
      checked: true,
      remainedTime:60,
      district: "+86",
      codeStatus: false,
      isTiktok: false,
      submitstatus: false
    };
  },
  computed: {
    ...mapState(["type"])
  },
  mounted() {},
  methods: {
    toyi() {
      this.checked = !this.checked;
    },
    typechange(index) {
      this.$store.commit("type", index);
    },
    getcode() {
        // this.$toast.show("即将开放");
        // return;
      const { account } = this;
      if (this.isEmpty(account)) {

        this.$toast.show(this.$t('user.userMsg48'));
        return;
      }
      if (!this.isValidPhone(account)) {
        this.$toast.show(this.$t('user.userMsg49'));
        return;
      }
      var self = this;
      if (this.isTiktok) {
        this.$toast.show(this.$t('user.userMsg79'));
        return;
      }
      if (this.codeStatus) return;
      this.codeStatus = true;
      this.axios({
        url: "/service/register_verify",
        params: {
          phone: self.account,
          district: self.district
        }
      })
        .then(res => {
          self.codeStatus = false;
          this.$toast.show(this.$t('user.userMsg80'));
          this.startCountdown()
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
    },
    nextshow() {
        // this.$toast.show("即将开放");
        // return;
      const { account } = this;
      if (this.isEmpty(account)) {
        this.$toast.show(this.$t('login.toast0'));
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
      if (!this.checked) {
        this.$toast.show(this.$t('user.userMsg81'));
        return;
      }
      this.next = !this.next;
    },
    submit() {

      const { password, rePassword } = this;
      if (this.isEmpty(password)) {
        this.$toast.show(this.$t('login.toast2'));
        return;
      }
      if (this.isEmpty(rePassword)) {
        this.$toast.show(this.$t('user.userMsg38'));
        return;
      }
      if (password != rePassword) {
        this.$toast.show(this.$t('user.userMsg82'));
        return;
      }
      var self = this;
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/register",
        params: {
          phone: self.account,
          mail: self.mail,
          pwd: self.password,
          verify: self.code,
          district: "+86"
        }
      })
        .then(res => {
          self.submitstatus = false;
          this.$toast.show(this.$t('user.userMsg83'));
        setTimeout(function(){
 self.$router.push("login");
          },1000)
        })
        .catch(err => {
          self.submitstatus = false;
              this.errorMsg(err.code)
        });
    },
    reply() {
      if (this.next) {
        this.next = !this.next;
        return;
      }
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
.timechecked {
  color: $color1 !important;
}
.account-box{
  border: 1px solid red;
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