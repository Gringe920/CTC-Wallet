<template>
  <div class="container">
    <Header title="修改登录密码" />
    <div class="content">
      <div class="password">原登录密码</div>
      <input class="psw-input" v-model='oldpwd' type="text" placeholder="请输入原登录密码" />
      <div class="divider"></div>
      <div class="password">新登录密码</div>
      <input class="psw-input" v-model="newpwd" type="text" placeholder="请输入新登录密码" />
      <div class="divider"></div>
      <div class="password">再确定密码</div>
      <input class="psw-input" v-model="reNewpwd" type="text" placeholder="再次确定新登录密码" />
      <div class="divider"></div>
    </div>
    <div class="error-msg" v-if="false">*原安全密码不正确</div>
    <div @click="submit">
    <r-button text="确定" width="90%" class="comfirm" />
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
        this.$toast.show("原登录密码不能为空");
        return;
      }
      if (this.isEmpty(newpwd)) {
        this.$toast.show("新登录密码不能为空");
        return;
      }
      if (this.isEmpty(reNewpwd)) {
        this.$toast.show("请输入确认密码");
        return;
      }
      if (newpwd != reNewpwd) {
        this.$toast.show("新登录密码与确认密码不相同");
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
          this.$toast.show("密码修改成功");
          this.oldpwd = "";
          this.newpwd = "";
          this.reNewpwd = "";
        })
        .catch(err => {
          self.submitstatus = false;
          this.$toast.show("重置密码密码失败，请稍后再试！");
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