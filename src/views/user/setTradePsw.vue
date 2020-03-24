<template>
  <div class="container">
    <Header title="设置交易密码" />
    <div class="content">
      <div class="password">交易密码</div>
      <input class="psw-input" v-model="dealPwd" type="text" placeholder="请输入交易密码" />
      <div class="divider"></div>
      <div class="password">确定密码</div>
      <input class="psw-input" type="text" v-model="redealPwd" placeholder="再次确定交易密码" />
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
      dealPwd: "",
      redealPwd: "",
      submitstatus: false
    };
  },
  methods: {
    
    submit() {
          const { dealPwd, redealPwd} = this;
      if (this.isEmpty(dealPwd)) {
        this.$toast.show("交易密码不能为空");
        return;
      }
      if (this.isEmpty(redealPwd)) {
        this.$toast.show("确认密码不能为空");
        return;
      }
      if (redealPwd != dealPwd) {
        this.$toast.show("新交易密码与确认密码不相同");
        return;
      }
      var self = this;
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/set_deal_pwd",
        params: {
          dealPwd: self.dealPwd,
        }
      })
        .then(res => {
          self.submitstatus = false;
          this.$toast.show("设置交易密码成功");
        })
        .catch(err => {
          self.submitstatus = false;
              this.errorMsg(err.code)
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