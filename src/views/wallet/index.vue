<template>
    <section class="walletall">
      <load v-if="loading || loading2"></load>
        <Header :title="$t(`wallet.name`)" :rightEv='toacceptCoin' :leftShow='false' :rightIcon="require('../../assets/images/record_black@2x.png')" ></Header>
        <div v-if="!loading &&  !loading2" class="walletbanner">
            <div class="w-t">
                <span>{{$t(`wallet.zichan`)}} </span>
            </div>
            <div class="w-t2">
                <span>{{total.toFixed(2)}}</span>&nbsp;CNY
            </div>
        </div>
       <div  v-if="!loading &&  !loading2" class="hiddenmoney">
            <div class="h_l" @click="hiddenmoney">
                <img src="../../assets/images/night_asset_unchecked@2x.png" alt="" srcset="" v-if="!hidden">
                <img src="../../assets/images/asset_selection@2x.png" alt="" srcset="" v-else>
                <span>{{$t(`wallet.hide`)}}</span>
            </div>
        </div>

         <div class="money"   v-if="!loading &&  !loading2"  v-for="item in coin_list" :key="item">
            <div class="coin">{{item}}</div>
            <div class="coin2" v-if="assets_detail.asset && assets_detail.asset[item]">
                {{
                hidden ? '******':assets_detail.asset[item]['$numberDecimal']
                ?parseFloat(assets_detail.asset[item]['$numberDecimal'] ) + parseFloat(getFreezeAsset((assets_detail.freeze_asset && assets_detail.freeze_asset[item]) || 0))
                :'000000'
                }}
                <span>
                    ≈ {{
                    hidden ? '******'
                    : (currentPrices[item]*(parseFloat(assets_detail.asset[item]['$numberDecimal'] ) + parseFloat(getFreezeAsset((assets_detail.freeze_asset && assets_detail.freeze_asset[item] || 0))))).toFixed(2)
                    }} &nbsp;CNY<small></small>
                </span>
            </div>
            <div class="coin3" v-if="assets_detail.asset && assets_detail.asset[item]">
                <div class="c_l">{{$t(`wallet.can`)}}：{{hidden ? '******': assets_detail.asset[item]['$numberDecimal']?assets_detail.asset[item]['$numberDecimal'] :'000000'}}</div>
                <div class="c_l">{{$t(`wallet.nocan`)}}：{{hidden ? '******': getFreezeAsset((assets_detail.freeze_asset && assets_detail.freeze_asset[item]) || 0)}}</div>
            </div>
            <div class="coin4">
              <div class="shou"  @click="$router.push('/reCharge/'+item)">{{$t(`wallet.wallet2`)}}</div>
                <div class="zhuan" @click="tozhuanzang(item)">{{$t(`wallet.wallet1`)}}</div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "wallet",
  mounted() {},
  data() {
    return {
      searchmsg: "",
      loading: true,
      loading2: true,
      serchnow: false,
      hidden: false,
      coins: [],
      submitstatus: false,
      detailstatus: false,
      current_priceStatus: false,
      currentPrices: {},
      allAssets: "",
      total: 0
    };
  },
  computed: {
    ...mapState(["user", "coin_list", "assets_detail"])
  },
  watch: {
    searchmsg() {
      if (this.searchmsg != "") {
        this.serchnow = true;
      } else {
        this.serchnow = false;
      }
    }
  },
  mounted() {
    this.getcoin_list();
    this.getassets_detail();
    this.current_price();
  },
  methods: {
    getTotalAsset() {
      let total = 0;
      this.coin_list.map(item => {
        total += parseFloat(
          this.currentPrices[item] *
            this.assets_detail.asset[item]["$numberDecimal"]
        );
      });
      this.total = total;
    },
    getFreezeAsset(assets) {
      let freezeAsset = 0;
      if (assets) {
        const numberDecimals = Object.values(assets);
        freezeAsset = numberDecimals.reduce((p, c) => +c.$numberDecimal + p, 0);
      }
      return freezeAsset;
    },
    current_price() {
      var self = this;
      if (this.current_priceStatus) return;
      self.current_priceStatus = true;
      this.axios({
        url: "/service/current_price",
        params: {}
      })
        .then(res => {
          this.currentPrices = res.data || {};
          this.getTotalAsset();
          self.current_priceStatus = false;
        })
        .catch(err => {
          self.current_priceStatus = false;
        });
    },

    getassets_detail() {
      var self = this;
      if (this.detailstatus) return;
      self.detailstatus = true;
      this.axios({
        url: "/service/assets_detail",
        params: {}
      })
        .then(res => {
          self.detailstatus = false;
          this.loading2 = false;
          this.$store.commit("assets_detail", res.data || {});
        })
        .catch(err => {
          self.detailstatus = false;
          this.loading2 = false;
          this.$store.commit("assets_detail", {});
        });
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
          this.loading = false;
          this.$store.commit("coin_list", res.data || {});
        })
        .catch(err => {
          self.submitstatus = false;
          this.loading = false;
          this.$store.commit("coin_list", {});
        });
    },
    tozhuanzang(item) {
      this.$router.push({
        path: "/takeCoins",
        query: {
          type: item
        }
      });
    },
    hiddenmoney() {
      this.hidden = !this.hidden;
    },
    toacceptCoin() {
      this.$router.push({
        path: "/acceptCoin",
        query: {
          type: 0,
          coin: ""
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.gateway {
  color: $btnFontColor;
}
.walletall {
  background: $bodybg2;
  padding: 0 15px;
  min-height: 90vh;
  margin-bottom: 50px;
  .walletbanner {
    margin-top: 60px;
    height: 137px;
    background: url(../../assets/images/wallet__card_bj@2x.png);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    padding: 0 20px;
    color: $btnFontColor;
    .w-t {
      display: flex;
      justify-content: space-between;

      padding: 20px 0 20px 0;
      align-items: center;
      img {
        width: 22px;
        height: 22px;
      }
    }
    .w-t2 {
      font-size: 22px;
      text-align: left;
      span {
        font-size: 40px;
      }
    }
  }
  .hiddenmoney {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    color: $color1;
    .h_l {
      display: flex;
      align-items: center;
      font-size: 12px;
      img {
        margin-right: 5px;
        width: 12px;
        height: 12px;
      }
    }
    .h_r {
      height: 24px;
      width: 100px;
      display: flex;
      align-items: center;
      border-radius: 2px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      img {
        width: 20px;
        padding: 0 5px;
        height: 12px;
      }
      input {
        width: 70px;
        height: 20px;
        background: $bg;
        border: none;
        color: $white;
      }
    }
    .searchwid {
      width: 150px;
      input {
        width: 120px;
      }
    }
  }
  .money {
    height: 100%;
    text-transform: uppercase;
    background: $border2;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0px 6px 10px 0px $border3;
    border: 1px solid $bg3;
    border-radius: 10px;
    .coin {
      padding: 20px 15px 0 15px;
      font-size: 18px;
      font-weight: 500;
      color: $fontActive !important;
    }
    .coin2 {
      padding: 0 15px;
      font-size: 24px;
      color: $color1;
      margin: 15px 0;
      span {
        font-size: 18px;
      }
    }
    .coin3 {
      padding: 0 15px 10px 15px;
      font-size: 13px;
      color: $color1;
      display: flex;
      .c_l {
        width: 50%;
      }
    }
    .coin4 {
      border-top: 1px solid $bg4;
      height: 40px;
      color: $active;
      font-size: 14px;
      div {
        line-height: 40px;
        width: 49%;
        display: inline-block;
        text-align: center;
      }
      div:hover {
        background: $active;
        color: $white;
      }
      .shou {
        border-right: 1px solid $bg4;
      }
    }
  }
}
</style>
