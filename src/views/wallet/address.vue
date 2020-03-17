<template>
  <section class="addressall">
     <Header title="选择提币地址" :rightEv='toacceptCoin' :rightIcon="require('../../assets/images/record_black@2x.png')"></Header>
     <div class="addresBox" v-for="(item,index) in withdraw_address_list" :key="index">
       <div class="coin"><span>{{item['symbol']}}</span><div @click="delAddress(item._id)">删除</div></div>
       <div class="address">地址:{{item['address']}}</div>
       <div class="title">标签:{{item['name']}}</div>
     </div>
          <r-button :tocomfirm='submit' text="添加地址" width="100%" class="comfirm" />

  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "address",
  data() {
    return {
      submitState: false,
      myAddress: [
        {
          coin: "Usdt",
          address: "RKWPDQTXW3FUPZTUNVCEAUG8HEDXEX7ZWQ",
          title: "Usdt地址"
        },
        {
          coin: "eth",
          address: "FJDKFJKSJDFKERUEKFNDKBDLDJOEWWHFKSK",
          title: "ETH地址"
        },
        {
          coin: "RCP",
          address: "FJDKFJKSJDFKERUEKFNDKBDLDJOEWWHFKSK",
          title: "RCP地址"
        }
      ],
      // 地址:RKWPDQTXW3FUPZTU111NVCEAUG8HEDXEX7ZWQ
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
          this.$toast.show("删除地址成功!");
          this.withdrawlist();
        })
        .catch(err => {
          self.delAddresStatus = false;
          this.$toast.show({ msg: err.message || "删除地址失败，请重试" });
        });
    },
    withdrawlist() {
      var self = this;
      if (this.liststatus) return;
      self.liststatus = true;
      this.axios({
        url: "/service/withdraw_address_list",
        params: {
        }
      })
        .then(res => {
          self.liststatus = false;
          this.$store.commit("withdraw_address_list", res.data.list || {});
          this.$toast.show("获取币种成功!");
        })
        .catch(err => {
          self.liststatus = false;
          this.$store.commit("withdraw_address_listl", {});
          this.$toast.show({ msg: err.message || "币种信息获取失败，请重试" });
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
      color: $active;
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

