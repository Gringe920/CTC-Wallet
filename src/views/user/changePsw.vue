<template>
  <div class="container">
    <Header :title="$t('user.userMsg14')" />
    <div class="content">
      <div class="password">{{$t('user.userMsg15')}}</div>
      <input class="psw-input" v-model='oldpwd' type="text" :placeholder="$t('user.userMsg18')" />
      <div class="divider"></div>
      <div class="password">{{$t('user.userMsg16')}}</div>
      <input class="psw-input" v-model="newpwd" type="text" :placeholder="$t('user.userMsg19')" />
      <div class="divider"></div>
      <div class="password">{{$t('user.userMsg17')}}</div>
      <input class="psw-input" v-model="reNewpwd" type="text" :placeholder="$t('user.userMsg20')" />
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
        this.$toast.show(this.$t('user.userMsg22'));
        return;
      }
      if (this.isEmpty(newpwd)) {
        this.$toast.show(this.$t('user.userMsg23'));
        return;
      }
      if (this.isEmpty(reNewpwd)) {
        this.$toast.show(this.$t('user.userMsg24'));
        return;
      }
      if (newpwd != reNewpwd) {
        this.$toast.show(this.$t('user.userMsg25'));
        return;
      }
      var self = this;
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/resetpwd",
        params: {
          oldpwd: self.oldpwd,
          newpwd: self.newpwd
        }
      })
        .then(res => {
          self.submitstatus = false;
          this.$toast.show(this.$t('user.userMsg26'));
          this.oldpwd = "";
          this.newpwd = "";
          this.reNewpwd = "";
        })
        .catch(err => {
          self.submitstatus = false;
          this.$toast.show(this.$t('user.userMsg27'));
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