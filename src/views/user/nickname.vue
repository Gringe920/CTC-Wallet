<template>
  <section>
    <Header title="设置昵称" />
    <div class="container">
      <div class="content">
        <input class="nickname" v-model="nickname" placeholder="请输入昵称" type="text" />
        <div class="line"></div>
      </div>
      <div class="">
      <r-button :tocomfirm='submit' text="确定" width="90%" class="comfirm" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nickname: "我不爱冰阔落",
      submitstatus: false
    };
  },
  methods: {
    submit() {
      console.log('xm')
      var self = this;
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/reset_nickname",
        params: {
          nickname: self.nickname,
        }
      })
        .then(res => {
          self.submitstatus = false;
          this.$toast.show("设置昵称成功");
        })
        .catch(err => {
          self.submitstatus = false;
          this.$toast.show({ msg: err.message || "昵称设置失败，请重试" });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
  height: 100%;
  .content {
    position: relative;
    margin: 0 15px;
  }
  input.nickname {
    font-size: 14px;
    padding: 15px 0;
  }
  .line {
    background-color: #f2f2f2;
    height: 1px;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .comfirm {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>