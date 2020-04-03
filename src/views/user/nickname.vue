<template>
  <section>
    <Header :title="$t('user.userMsg62')" />
    <div class="container">
      <div class="content">
        <input class="nickname" v-model="nickname" :placeholder="$t('user.userMsg63')" type="text" />
        <div class="line"></div>
      </div>
      <div class="">
      <r-button :tocomfirm='submit' :text="$t('user.userMsg21')" width="90%" class="comfirm" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      nickname: "",
      submitstatus: false
    };
  },
  methods: {
    submit() {
      const { nickname } = this;
      if (this.isEmpty(nickname)) {
        this.$toast.show(this.$t("user.userMsg65"));
        return;
      }
      var self = this;
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/reset_nickname",
        params: {
          nickname: self.nickname
        }
      })
        .then(res => {
          self.submitstatus = false;
          this.$toast.show(this.$t("user.userMsg66"));
        })
        .catch(err => {
          self.submitstatus = false;
          this.$toast.show(this.$t("user.userMsg67") );
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
    background-color: $bg2;
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