<template>
  <section class="reCharge">
    <Header :title="'充币 ' + symbol.toUpperCase()" :rightEv='toacceptCoin'  :rightIcon="require('../../assets/images/record_black@2x.png')" >充币 RCP</Header>
    <img src="" alt="" srcset="">
    <div class="title" @click="create_address()"> 充币地址 <span v-if="symbol.toLowerCase() == 'usdt'">ERC20</span></div>
    <div class="address">{{address}}</div>
    <div class="infos">* 该地址只接受{{symbol.toUpperCase()}}，其他币转至该地址造成的损失，本平台概不负责</div>
    <r-copy :copyText="address" class="btn">
      复制充币地址
    </r-copy>
  </section>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      submitstatus:false,
        symbol : '',
        address : '',
    };
    
  },
  mounted() {
    this.create_address();
  },
  methods: {
      comfirm2 (){
          console.log('comfirm');
      },
    create_address() {
      var self = this
      console.log(this.$route.params.coin,'-------symbol')
      if (this.submitstatus) return;
      self.submitstatus = true;
      var symbol =  this.$route.params.coin || '';
      this.symbol = symbol;
      this.axios({
        url: "/service/create_address",
        params: {
          symbol:symbol 
        }
      })
        .then(res => {
          self.submitstatus = false;
          this.address = res.data.address;
          this.$toast.show("获取充币地址成功");
        })
        .catch(err => {
          self.submitstatus = false;
          this.$toast.show(err.message || "获取充币地址失败，请重试");
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
  .btn{
    margin-top: 50px;
  }
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
