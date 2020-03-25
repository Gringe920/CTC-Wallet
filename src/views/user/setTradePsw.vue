<template>
  <div class="container">
    <Header :title="$t('user.userMsg68')" />
    <div class="content">
      <div class="password">{{$t('user.userMsg69')}}</div>
      <input class="psw-input" v-model="dealPwd" type="text" :placeholder="$t('user.userMsg71')" />
      <div class="divider"></div>
      <div class="password">{{$t('user.userMsg70')}}</div>
      <input class="psw-input" type="text" v-model="redealPwd" :placeholder="$t('user.userMsg72')" />
      <div class="divider"></div>
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
      dealPwd: "",
      redealPwd: "",
      submitstatus: false
    };
  },
  methods: {
    submit() {
      const { dealPwd, redealPwd } = this;
      if (this.isEmpty(dealPwd)) {
        this.$toast.show(this.$t("user.userMsg73"));
        return;
      }
      if (this.isEmpty(redealPwd)) {
        this.$toast.show(this.$t("user.userMsg38"));
        return;
      }
      if (redealPwd != dealPwd) {
        this.$toast.show(this.$t("user.userMsg39"));
        return;
      }
      var self = this;
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/set_deal_pwd",
        params: {
          dealPwd: self.dealPwd
        }
      })
        .then(res => {
          self.submitstatus = false;
          this.$toast.show(this.$t("user.userMsg74"));
        })
        .catch(err => {
          self.submitstatus = false;
          this.errorMsg(err.code || this.$t("user.userMsg75"));
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin: 70px 15px 0px;

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