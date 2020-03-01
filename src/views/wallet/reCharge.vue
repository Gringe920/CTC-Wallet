<template>
  <section class="reCharge">
    <Header title="充币 RCP " :rightEv='toacceptCoin'  :rightIcon="require('../../assets/images/record_black@2x.png')" >充币 RCP</Header>
    <img src="" alt="" srcset="">
    <div class="title">充币地址</div>
    <div class="address">RKWPDQTXW3FUPZTUNVCEAUG8HEDXEX7ZWQ</div>
    <div class="infos">*该地址只接受PYC（支付链），其他币转至该地址造成的损失，本平台概不负责</div>
    <r-button text="复制充币地址" width="90%" class="btn-submit" @comfirm="$router.push({path: '/selectPayway'})"/>
  </section>    
</template>
<script>
export default {
  name: "",
  data() {
    return {
      submitstatus:false
    };
    
  },
  mounted() {
    this.create_address();
  },
  methods: {
    create_address() {
      var self = this;
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/create_address",
        params: {
          symbol: 'usdt'
        }
      })
        .then(res => {
          self.submitstatus = false;
          this.$toast.show("获取充币地址成功");
        })
        .catch(err => {
          self.submitstatus = false;
          this.$toast.show({ msg: err.message || "获取充币地址失败，请重试" });
        });
    },
    toacceptCoin() {
      this.$router.push({
        path: "/acceptCoin",
        query: {
          type: 0
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.reCharge {
  padding: 50px 15px 0 15px;
  .title {
    color: $color1;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .address {
    background: #f7f9fc;
    border-radius: 3px;
    color: $active;
    font-size: 14px;
    padding: 10px;
    margin-bottom: 20px;
  }
  .infos {
    color: $color1;
    font-size: 14px;
  }
  .bnt2 {
    position: fixed;
    bottom: 20px;
  }
}
</style>
