<template>
  <section class="addAdress">
      <Header title="添加提币地址" ></Header>
         <div class="cointype">
            <div class="l">{{$t(`wallet.wallet3`)}}</div>
            <div class="r" @click="toclose">
                {{coin?coin:$t(`wallet.zhuanqian1`)}}
                <img src="../../assets/images/next_black@2x.png" alt="" srcset="">
            </div>
        </div>
        <div class="cointype">
            <div class="l">{{$t(`wallet.zhuanqian3`)}}</div>
            <div class="r">
                <input type="text" v-model="address" :placeholder="$t(`wallet.wallet4`)">
            </div>
        </div>
             <div class="cointype">
            <div class="l">{{$t(`wallet.wallet5`)}}</div>
            <div class="r">
                <input type="text" v-model="label" placeholder="$t(`wallet.wallet6`)">
            </div>
        </div>
        <div class="yue">*{{$t(`wallet.wallet7`)}}</div>
        <r-button    :tocomfirm='topwdshow' :text="$t(`wallet.zhuanqian6`)" width="90%" class="comfirm" />
       <div class="coinchange" v-if="close" @click="toclose">
            <div class="coinbox">
                <div @click="clickCoin(item, index)" class="coin" :class="coin == item ? 'active' : ''" v-for="(item, index) in coin_list" :key='item'>
                    <div>{{item}}</div>
                </div>
                <div class="coin cg" >
                    <div @click.stop="toclose"> {{$t(`wallet.zhuanqian7`)}}</div>
                </div>
            </div>
        </div>
        <Tradedialog v-on:onClose='pwdshow = !pwdshow'  v-on:onConfirm="submit" v-if="pwdshow"></Tradedialog>
        
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "addAdress",
  data() {
    return {
      close: false,
      pwdshow: false,
      submitState: false,
      num: "",
      label: "",
      address: "",
      canCoin: 8768,
      liststatus: false,
      coin: "btc",
      clickAll: "",
      code: ""
    };
  },
  created() {},
  mounted() {
    this.getcoin_list();
  },
  computed: {
    ...mapState(["user", "coin_list", "assets_detail"])
  },
  methods: {
    topwdshow() {
      const { address, label } = this;
      if (this.isEmpty(address)) {
        this.$toast.show(this.$t("wallet.wallet8"));
        return;
      }
      if (this.isEmpty(label)) {
        this.$toast.show(this.$t("wallet.wallet9"));
        return;
      }
      this.pwdshow = true;
    },
    getcoin_list() {
      var self = this;
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/coin_list",
        params: {}
      })
        .then(res => {
          self.submitstatus = false;
          this.coin = this.coin_list[0];
          this.$store.commit("coin_list", res.data || {});
        })
        .catch(err => {
          self.submitstatus = false;
          this.$store.commit("coin_list", {});
        });
    },
    submit() {
      var self = this;
      if (this.liststatus) return;
      self.liststatus = true;
      var symbol = this.$route.params.coin || "";
      this.axios({
        url: "/service/create_withdraw_address",
        params: {
          symbol: self.coin,
          address: self.address,
          code: self.code,
          name: self.label
        }
      })
        .then(res => {
          self.liststatus = false;
          this.$toast.show(this.$t("wallet.wallet10"));
          this.address = "";
          this.label = "";
          this.pwdshow = false;
          setTimeout(function() {
            self.$router.go(-1);
          }, 1000);
        })
        .catch(err => {
          self.liststatus = false;
          this.pwdshow = false;
          this.$toast.show(this.$t("wallet.wallet11"));
        });
    },
    toclose() {
      this.close = !this.close;
    },
    clickCoin(item, index) {
      this.coin = item;
    }
  }
};
</script>
<style lang="scss" scoped>
.addAdress {
  text-transform: uppercase;
  position: relative;
  padding-top: 55px;
  min-height: 100%;
  .yue {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 15px;
    font-size: 14px;
    color: $color1;
  }
  .cointype {
    border-radius: 4px;
    display: flex;
    color: $active;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 15px;
    align-items: center;
    .r {
      display: flex;
      align-items: center;
      color: $color1;
      font-size: 14px;
      input {
        text-align: right;
        font-size: 14px;
        min-width: 50vw;
      }
      .r {
        span {
          color: $active;
          font-size: 14px;
        }
      }
    }
    img {
      width: 12px;
      height: 12px;
      margin-left: 5px;
    }
  }
  .coinchange {
    width: 100%;
    height: 100vh;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    background: $bg4;
    .coinbox {
      position: absolute;
      bottom: 0;
      background: $border2;
      width: 100%;
      .cg {
        color: $color1 !important;
        border-top: 5px solid rgba(0, 0, 0, 0.05);
      }
      .coin {
        width: 100%;
        text-align: center;
        color: $color1 !important;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        &.active {
          color: $fontActive !important;
        }
        img {
          width: 20px;
          height: 20px;
        }
        div {
          margin-left: 6px;
          display: inline-block;
        }
      }
    }
  }
}
</style>
