<template>
  <section class="reCharge">
    <Header :title="$t(`wallet.wallet2`) + symbol.toUpperCase()" :rightEv='toacceptCoin'  :rightIcon="require('../../assets/images/record_black@2x.png')" ></Header>
    <img src="" alt="" srcset="">
    <div class="title" @click="create_address()">{{$t(`wallet.wallet27`)}} <span v-if="symbol.toLowerCase() == 'usdt'">ERC20</span></div>
    <div class="address">{{address}}</div>
    <div class="infos">*{{$t(`wallet.wallet29`)}}{{symbol.toUpperCase()}}，{{$t(`wallet.wallet29`)}}</div>
    <r-copy :copyText="address" class="btn">
      {{$t(`wallet.wallet31`)}}
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
      },
    create_address() {
      var self = this
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
        })
        .catch(err => {
          self.submitstatus = false;
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
    background: $border2;
    border-radius: 3px;
        box-shadow: 0px 6px 10px 0px $border3;
     border: 1px solid $border3;
    color: $active;
    font-size: 14px;
     overflow-x: scroll;
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
