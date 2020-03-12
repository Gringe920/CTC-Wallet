<template>
  <section class="ctc">
    <div class="header">
      <div class="icon_l" @click="changcoinshow = !changcoinshow">
        {{ coin.toUpperCase() }}
        <img
          v-if="!changcoinshow"
          src="../../assets/images/triangle_lower@2x.png"
        />
        <img v-else src="../../assets/images/triangle_upper@2x.png" />
      </div>
      <div class="center">
        <div
          class="sell"
          :class="buyType == 'buy' ? 'tradeactive' : ''"
          @click="goBuyType('buy')"
        >
          购买
        </div>
        <div
          class="sell"
          :class="buyType == 'sell' ? 'tradeactive' : ''"
          @click="goBuyType('sell')"
        >
          出售
        </div>
      </div>
      <span class="text_r" @click="toRoute('publish')">发布</span>
    </div>
    <div class="buyall" v-if="buyType == 'buy'">
      <div
        class="buymsg"
        v-for="item in PendList"
        :key="item.uid"
        v-if="item.type == 1"
      >
        <div class="top">
          <div class="left">
            <img
              src="../../assets/images/details_3_selected@2x.png"
              alt=""
              srcset=""
            />
            <span>{{ item.nickname }}</span>
          </div>
          <div class="right" v-if="item.deals">
            月销售量：{{item.deals}}
          </div>
        </div>
        <div class="center">
          <div class="left">{{ item.price }} &nbsp;CNY</div>
          <div class="right">
            <img
              v-if="item.paytype_bank == 1"
              src="../../assets/images/otc_bank_card@2x.png"
              alt=""
              srcset=""
            />
            <img
              v-if="item.paytype_wxk == 1"
              src="../../assets/images/otc_wechat@2x.png"
              alt=""
              srcset=""
            />
            <img
              v-if="item.paytype_alipay == 1"
              src="../../assets/images/otc_alipay@2x.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div class="last">
          <div class="left">
            <div>数量 {{ item.amount.$numberDecimal }} {{ coin.toUpperCase() }}</div>
            <div>限额 {{ item.minmum }}-{{ item.maxmum }}CNY</div>
          </div>
          <div @click="changebuySellShow(item)" class="right">
            购买
          </div>
        </div>
      </div>
    </div>
    <div class="buyall" v-else>
      <div
        class="buymsg"
        v-for="item in PendList"
        :key="item.uid"
        v-if="item.type == 2"
      >
        <div class="top">
          <div class="left">
            <img
              src="../../assets/images/details_3_selected@2x.png"
              alt=""
              srcset=""
            />
            <span>{{ item.nickname }}</span>
          </div>
          <div class="right" v-if="item.deals">
            月销售量：{{ item.deals }}
          </div>
        </div>
        <div class="center">
          <div class="left">{{ item.price }} &nbsp;CNY</div>
          <div class="right">
            <img
              v-if="item.paytype_bank == 1"
              src="../../assets/images/otc_bank_card@2x.png"
              alt=""
              srcset=""
            />
            <img
              v-if="item.paytype_wx == 1"
              src="../../assets/images/otc_wechat@2x.png"
              alt=""
              srcset=""
            />
            <img
              v-if="item.paytype_alipay == 1"
              src="../../assets/images/otc_alipay@2x.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div class="last">
          <div class="left">
            <div>数量 {{ item.amount.$numberDecimal }} {{ coin.toUpperCase() }}</div>
            <div>限额 {{ item.minmum }}-{{ item.maxmum }} CNY</div>
          </div>
          <div @click="changebuySellShow(item)" class="right">
            出售
          </div>
        </div>
      </div>
    </div>
    <!-- 币种选择 -->
    <coinlist :coin="coin" v-if="changcoinshow"
              @onItemSelect="selectCoin"/>
    <r-modal
      title="设置支付方式"
      @on-ok="submitActive"
      :show="isShowModal"
      @on-cancel="isShowModal = false"
    >
      <p class="active-content">您尚未设置支付方式，请先去设置。</p>
    </r-modal>
    <!-- 购买出售弹窗 -->
    <buySell v-if="buySellShow" :item="bugSellItem" :coin="coin"></buySell>
  </section>
</template>
<script>
import { mapState } from "vuex";
import buySell from "./buySell.vue";
import coinlist from '../../components/coinlist.vue'
export default {
  name: "ctc",
  data() {
    return {
      isShowModal: false,
      changcoinshow: false,
      submitStatus: false,
      coin: "usdt",
      buyList: [],
      sellList: [],
      bugSellItem: {}
    };
  },
  computed: {
    ...mapState(["buySellShow", "buyType", "PendList", "coin_list", 'user'])
  },
  components: {
    buySell,
    coinlist
  },
  mounted() { 
    // this.initData();
    this.getPendList();
    this.isShowModal = (this.user.wechat_state === 0 && this.user.bankcard_state === 0 && this.user.alipay_state) === 0 ? true : false;
  },
  methods: {
    selectCoin(coin) {
      this.coin = coin;
      this.changcoinshow = false;
      this.getPendList();
    },
    getPendList() {
      var self = this;
      if (this.submitStatus) return;
      self.submitStatus = true;
      this.axios({
        url: "/c2c/getPendList",
        params: {
          symbol: this.coin
        }
      })
        .then(res => {
          self.submitStatus = false;
          if(res.error_code == 0){
            this.$store.commit("PendList", res.data.list || {});
          }
          
          this.$toast.show("挂单列表获取成功!");
        })
        .catch(err => {
          self.submitStatus = false;
          this.$store.commit("UserPendList", {});
          this.$toast.show({
            msg: err.message || "挂单列表获取失败，请重试"
          });
        });
    },
    initData() {
      let self = this;
      this.axios({
        url: "/service/login",
        params: {
          phone: "15111487619",
          mail: "xiemei1996@163.com",
          pwd: "123456",
          district: "+86"
        }
      })
        .then(res => {
          console.log("initdata1----------");
          console.log(res);
        })
        .catch(err => {
          console.log("initdata2----------");
          console.log(err);
        });
    },
    changebuySellShow(item) {
      if(this.user.wechat_state === 0 && this.user.bankcard_state === 0 && this.user.alipay_state === 0) {
        this.isShowModal = true;
        return
      }
      this.bugSellItem = item;
      this.$store.commit("buySellShow", true);
    },
    goBuyType(data) {
      this.$store.commit("buyType", data);
    },
    submitActive() {
      this.$router.push({
          path: "/payway"
      });
      this.isShowModal = false;
    },
    showActivatedModal() {
      this.isShowModal = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.ctc {
  position: relative;
  height: auto;
  min-height: 100%;
  background-color: #f7f9fc;
  .header {
    background: $bg;
    z-index: 10;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    padding: 0 15px;
    .center {
      display: flex;
      div {
        width: 60px;
        text-align: center;
        line-height: 30px;
        border: 1px solid $border;
        color: $color1;
        font-size: 14px;
      }
      .tradeactive {
        color: $fontActive;
        border: 1px solid $fontActive;
      }
    }
    .icon_l {
      display: flex;
      align-items: center;
      left: 15px;
      color: $color2;
      img {
        margin-left: 5px;
        width: 15px;
        height: 8px;
      }
    }
    .text_r {
      font-size: 14px;
      color: $fontActive;
    }
  }
  .buyall {
    padding: 50px 15px 60px 15px;
    .buymsg {
      box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.03);
      margin-top: 15px;
      padding: 0 15px;
      border-radius: 4px;
      background: $bg;
      .top {
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        .left {
          display: flex;
          height: 30px;
          justify-content: center;
          align-items: center;
          color: $color2;
          font-size: 13px;
          img {
            width: 33px;
            height: 33px;
            margin-right: 5px;
            border-radius: 100%;
          }
          span {
            line-height: 30px;
          }
        }
        .right {
          color: $color1;
        }
      }
      .center {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        .left {
          font-size: 18px;
          color: $fontActive;
        }
        .right {
          img {
            width: 15px;
            height: 15px;
            margin-right: 10px;
          }
        }
      }
      .last {
        padding-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          color: $color1;
          font-size: 12px;
          div {
            margin-bottom: 8px;
          }
        }
        .right {
          width: 60px;
          height: 25px;
          background: $fontActive;
          color: $white;
          font-size: 14px;
          line-height: 25px;
          text-align: center;
        }
        .right2 {
          width: 60px;
          height: 25px;
          background: #8f9cad;
          color: $white;
          font-size: 14px;
          line-height: 25px;
          text-align: center;
        }
      }
    }
  }
}
</style>
