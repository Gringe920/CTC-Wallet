<template>
  <section class="ctc">
     
    <div class="header">
        <div class="icon_l" @click="changcoinshow = !changcoinshow">USDT
          <img v-if="!changcoinshow"  src="../../assets/images/triangle_lower@2x.png" alt="" srcset="">
            <img  v-else  src="../../assets/images/triangle_upper@2x.png" alt="" srcset="">
        </div>
        <div class="center">
            <div class="sell" :class=" buyType == 'buy'?'tradeactive':''" @click="goBuyType('buy')">购买</div>
            <div class="sell" :class=" buyType == 'sell'?'tradeactive':''"  @click="goBuyType('sell')">出售</div>
        </div>
        <span  class="text_r"  @click="toRoute('publish')">发布</span>
    </div>
    <div class="buyall" v-if="buyType == 'buy'">
      <div class="buymsg" v-for="item in PendList " :key="item" v-if="item.type ==1">
        <div class="top">
          <div class="left">
            <img src="../../assets/images/details_3_selected@2x.png" alt="" srcset="">
            <span>云淡风轻</span>
          </div>
          <div class="right">
            月销售量：30
          </div>
        </div>
        <div class="center">
          <div class="left">{{item.price}} &nbsp;CNY</div>
          <div class="right">
            <img  v-if="item.paytype_bank ==1" src="../../assets/images/otc_bank_card@2x.png" alt="" srcset="">
            <img v-if="item.paytype_wxk ==1"  src="../../assets/images/otc_wechat@2x.png" alt="" srcset="">
            <img v-if="item.paytype_alipay ==1"  src="../../assets/images/otc_alipay@2x.png" alt="" srcset="">
          </div>
        </div>
        <div class="last">
          <div class="left">
              <div>数量 {{item.amount.$numberDecimal}} USDT</div>
            <div>限额 {{item.minmum}}-{{item.maxmum}}CNY</div>
          </div>
          <div  @click="changebuySellShow" class="right" >
            购买
          </div>
        </div>
      </div>
    </div>
      <div class="buyall" v-else>
      <div class="buymsg" v-for="item in PendList " :key="item" v-if="item.type ==2">
        <div class="top">
          <div class="left">
            <img src="../../assets/images/details_3_selected@2x.png" alt="" srcset="">
            <span>云淡风轻</span>
          </div>
          <div class="right">
            月销售量：30
          </div>
        </div>
        <div class="center">
          <div class="left">{{item.price}} &nbsp;CNY</div>
          <div class="right">
            <img  v-if="item.paytype_bank ==1" src="../../assets/images/otc_bank_card@2x.png" alt="" srcset="">
            <img v-if="item.paytype_wx ==1"  src="../../assets/images/otc_wechat@2x.png" alt="" srcset="">
            <img v-if="item.paytype_alipay ==1"  src="../../assets/images/otc_alipay@2x.png" alt="" srcset="">
          </div>
        </div>
        <div class="last">
          <div class="left">
            <div>数量 {{item.amount.$numberDecimal}} USDT</div>
            <div>限额 {{item.minmum}}-{{item.maxmum}}CNY</div>
          </div>
          <div  @click="changebuySellShow" class="right" >
            出售
          </div>
        </div>
      </div>
    </div>
    <!-- 币种选择 -->
    <div class="changcoin" v-if="changcoinshow">
      <div class="coinsbox">
        <div class='coins'><div>币种</div></div>
        <div class="coins" :class="item == 1?'coinsactive':''" v-for="item in 3" :key="item">
        <div> usdt </div>
        </div>
      </div>
    </div>
    <!-- 设置支付方式提醒 -->
    <r-modal title="设置支付方式"
             @on-ok="submitActive"
             :show="isShowModal"
             @on-cancel="isShowModal = false">
      <p class="active-content">您尚未设置支付方式，请先去设置。</p>
    </r-modal>
    <!-- 购买出售弹窗 -->
    <buySell v-if="buySellShow"></buySell>
  </section>
</template>
<script>
import { mapState } from "vuex";
import buySell from "./buySell.vue";
export default {
  name: "ctc",
  data() {
    return {
      isShowModal: false,
      changcoinshow: false,
      submitStatus: false,
      symbol: "usdt"
    };
  },
  computed: {
    ...mapState(["buySellShow", "buyType", "PendList"])
  },
  components: {
    buySell
  },
  mounted() {
    this.initData();
    this.getPendList();
  },
  methods: {
    order(uid,pend_id) {
      var self = this;
      if (this.orderStatus) return;
      self.orderStatus = true;
      this.axios({
        url: "/c2c/order",
        params: {
          symbol: this.symbol,
          uid: uid,
          pend_id: pend_id,
          type: type
        }
      })
        .then(res => {
          self.orderStatus = false;
          this.$toast.show("下单成功!");
        })
        .catch(err => {
          self.orderStatus = false;
          this.$toast.show({
            msg: err.message || "下单失败，请重试"
          });
        });
    },
    getPendList() {
      var self = this;
      if (this.submitStatus) return;
      self.submitStatus = true;
      this.axios({
        url: "/c2c/getPendList",
        params: {
          symbol: "usdt"
        }
      })
        .then(res => {
          self.submitStatus = false;
          this.$store.commit("PendList", res.data || {});
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
      console.log("initdata----------");
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
    changebuySellShow() {
      this.$store.commit("buySellShow", true);
    },
    goBuyType(data) {
      this.$store.commit("buyType", data);
    },
    submitActive() {
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
  .changcoin {
    width: 100%;
    position: fixed;
    min-height: 100%;
    height: 100%;
    top: 50px;
    background: rgba(0, 0, 0, 0.5);
    .coinsbox {
      background: $white;
      .coins {
        text-transform: uppercase;
        background: $white;
        color: $color1;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        div {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          margin: 0 15px;
        }
      }
      .coinsactive {
        color: $fontActive;
        font-size: 14px;
      }
    }
  }
}
</style>
