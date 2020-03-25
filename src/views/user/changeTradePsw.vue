<template>
  <div class="container">
    <Header :title="$t('user.userMsg28')" />
    <div class="content">
      <div class="password">{{$t('user.userMsg29')}}</div>
      <input class="psw-input" v-model="oldpwd" type="text" :placeholder="$t('user.userMsg32')" />
      <div class="divider"></div>
      <div class="password">{{$t('user.userMsg30')}}</div>
      <input class="psw-input" type="text" v-model="newpwd" :placeholder="$t('user.userMsg33')" />
      <div class="divider"></div>
      <div class="password">{{$t('user.userMsg31')}}</div>
      <input class="psw-input" v-model="reNewpwd" type="text" :placeholder="$t('user.userMsg34')" />
      <div class="divider"></div>
     <div class="forget"  @click="$router.push({ path: '/findDealPwd'})">{{$t('user.userMsg35')}}</div>
    </div>
    <div @click="submit">
    <r-button :text="$t('user.userMsg21')" width="90%" class="comfirm" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldpwd: "",
      newpwd: "",
      reNewpwd: "",
      submitstatus: false
    };
  },
  methods: {
    submit() {
      const { oldpwd, newpwd, reNewpwd } = this;
      if (this.isEmpty(oldpwd)) {
        this.$toast.show(this.$t('user.userMsg36'));
        return;
      }
      if (this.isEmpty(newpwd)) {
        this.$toast.show(this.$t('user.userMsg37'));
        return;
      }
      if (this.isEmpty(reNewpwd)) {
        this.$toast.show(this.$t('user.userMsg38'));
        return;
      }
      if (newpwd != reNewpwd) {
        this.$toast.show(this.$t('user.userMsg39'));
        return;
      }
      var self = this;
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/reset_deal_pwd",
        params: {
          oldpwd: self.oldpwd,
          newpwd: self.newpwd
        }
      })
        .then(res => {
          self.submitstatus = false;
          this.oldpwd =''
          this.newpwd =''
          this.reNewpwd = ''
          this.$toast.show(this.$t('user.userMsg40'));
        })
        .catch(err => {
          self.submitstatus = false;
             this.errorMsg(err.code,self.$t('user.userMsg41'))
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin: 70px 15px 0px;
  .forget {
    font-size: 14px;
    color: #1771ed;
  }
  .password {
    font-size: 12px;
    color: $active;
    margin-bottom: 15px;
  }

  .psw-input {
    font-size: 14px;
    color: $active;
    outline: none;
    border: none;
    background: none;
    width: 100%;
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: #e2e2e2;
    margin: 15px 0;
  }
}
.error-msg {
  color: $up;
  font-size: 12px;
  padding: 12px 0 0 15px;
}
.comfirm {
  position: absolute;
  bottom: 20px;
  transform: translateX(-50%);
  left: 50%;
}
</style>