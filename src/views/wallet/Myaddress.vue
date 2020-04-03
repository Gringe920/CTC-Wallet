<template>
  <section class="addressall">
      <load v-if="loading"></load>
     <Header :title="$t(`user.userMsg4`)"></Header>
     <div v-if="!loading && withdraw_address_list.length >0" class="addresBox" v-for="(item,index) in withdraw_address_list" :key="index">
       <div class="coin"><span>{{item['symbol']}}</span><div @click="delAddress(item._id)">{{$t(`delete`)}}</div></div>
       <div class="address">{{$t(`wallet.wallet15`)}}:{{item['address']}}</div>
       <div class="title">{{$t(`wallet.wallet16`)}}:{{item['name']}}</div>
     </div>
     <Empty v-if="!loading && withdraw_address_list <=0"></Empty>
    <r-button v-if="!loading" :tocomfirm='submit' :text="$t(`wallet.wallet24`)" width="100%" class="comfirm" />
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Myaddress",
  data() {
    return {
      loading: true,
      submitState: false,
      liststatus: false,
      symbol: "btc",
      elAddresStatus: false
    };
  },
  computed: {
    ...mapState(["user", "withdraw_address_list"])
  },
  mounted() {
    this.withdrawlist();
  },
  methods: {
    delAddress(id) {
      var self = this;
      if (this.delAddresStatus) return;
      self.delAddresStatus = true;
      this.axios({
        url: "/service/del_withdraw_address",
        params: {
          id: id
        }
      })
        .then(res => {
          self.delAddresStatus = false;
          this.$toast.show(this.$t('wallet.wallet25'));
          this.withdrawlist();
        })
        .catch(err => {
          self.delAddresStatus = false;
          this.$toast.show(this.$t('wallet.wallet26'));
        });
    },
    withdrawlist() {
      var self = this;
      if (this.liststatus) return;
      self.liststatus = true;
      this.axios({
        url: "/service/withdraw_address_list",
        params: {}
      })
        .then(res => {
          self.liststatus = false;
          this.$store.commit("withdraw_address_list", res.data.list || {});
          this.loading = false;
        })
        .catch(err => {
          self.liststatus = false;
          this.$store.commit("withdraw_address_list", {});
          this.loading = false;
        });
    },
    toacceptCoin() {},
    submit() {
      this.$router.push("/addAdress");
    }
  }
};
</script>

<style lang="scss" scoped>
.addressall {
  position: relative;
  padding: 60px 0px;
  margin: 0 15px;
  min-height: 100%;
  .addresBox {
    padding: 10px 0px;
    word-break: break-all;
    font-size: 14px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    .coin {
      font-size: 16px;
      display: flex;
      color: $white !important;
      justify-content: space-between;
      align-items: center;
      text-transform: uppercase;
      margin-bottom: 8px;
      div {
        padding: 0 5px;
        font-size: 14px;
        border-radius: 2px;
        text-align: center;
        color: $color1;
        border: 1px solid $color1;
      }
    }
    .address {
      margin-bottom: 8px;
      color: $color1;
    }
    .title {
      margin-bottom: 8px;
      color: $color1;
      text-transform: uppercase;
    }
  }
}
</style>

