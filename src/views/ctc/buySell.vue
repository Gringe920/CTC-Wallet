<template>
  <section class="buySellbox">
    <div class="infos" v-if="orderType == 1">
      
      <div class="top top2">
        <div class="l">{{buyType == 'buy'?'购买':"出售"}} {{ coin.toUpperCase() }} </div>
        <img
          class="img2"
          @click="changebuySellShow"
          src="../../assets/images/top_off_black@2x.png"
          alt
          srcset
        />
      </div>
      <div class="top">
        <div class="l2">单笔限额</div>
        <div class="r">¥{{ item.minmum }} - ¥{{ item.maxmum }}</div>
      </div>
      <div class="top">
        <div class="l2">委托价格</div>
        <div class="r2">{{ item.price }}CNY</div>
      </div>
      <div class="top">
        <div class="l2">付款方式</div>
        <div class="right">
          <img
            v-if="item.paytype_bank == 1"
            src="../../assets/images/otc_bank_card@2x.png"
            alt
            srcset
          />
          <img v-if="item.paytype_wx == 1" src="../../assets/images/otc_wechat@2x.png" alt srcset />
          <img
            v-if="item.paytype_alipay == 1"
            src="../../assets/images/otc_alipay@2x.png"
            alt
            srcset
          />
        </div>
      </div>
      <div class="n" v-if="buyType != 'buy'">
        余额：{{ user.asset[coin] ? user.asset[coin].$numberDecimal : 0}} {{ coin.toUpperCase() }} &nbsp;
        <span class="transfer">去划转</span>
      </div>
      <div class="inpbox">
        <div class="left">
          <div class="inp bt br">
            <input type="number" :placeholder="`最大可${buyType == 'buy' ? '买入' : '卖出'}${user.asset[coin] ? user.asset[coin].$numberDecimal * item.price : 0}`" v-model="priceRmb"/>
            <span>CNY</span>
          </div>
          <div class="inp br">
            <input type="number" :placeholder="`最大可${buyType == 'buy' ? '买入' : '卖出'}${user.asset[coin] ? user.asset[coin].$numberDecimal : 0}`" v-model="amount"/>
            <span>{{ coin.toUpperCase() }}</span>
          </div>
        </div>
        <div class="right" @click="allIn">
          <span>全部</span>
        </div>
      </div>
      <div class="btn" @click="order(item)">{{buyType == 'buy'?'购买':"出售"}}</div>
    </div>
    <tradedialog
      v-if="orderType == 2"
      :countdown="10"
      @onClose="changebuySellShow"
      @onConfirm="continueOrder"
    />
  </section>
</template>
<script>
import { mapState } from "vuex";
import tradedialog from "../../components/tradedialog.vue";
export default {
  name: "buySellbox",
  props: ["item", 'coin'],
  data() {
    return {
      orderType: 1,
      currentItem: null,
      amount: null,
      priceRmb: null,
      changeFrom: null,
    };
  },
  computed: {
    ...mapState(["buySellShow", "buyType", "user"]),
  },
  components: {
    tradedialog
  },
  watch: {
    amount(val){
      if (this.changeFrom == 'priceRmb') {
        this.changeFrom = null;
        return;
      }
      this.changeFrom = 'amount';
      this.priceRmb = val * this.item.price;
    },
    priceRmb(val) {
      if (this.changeFrom == 'amount') {
        this.changeFrom = null;
        return;
      }
      this.changeFrom = 'priceRmb';
      this.amount = val / this.item.price;
    }
  },
  methods: {
    allIn() {
      this.amount = this.user.asset[this.coin] ? this.user.asset[this.coin].$numberDecimal : 0
    },
    order(item) {
      if(!this.amount){
        this.$toast.show("请输入币种数量");
        return;
      }
      if(this.amount < this.item.minmum){
        this.$toast.show("输入币种数量少于最低限额");
        return;
      }
      if(this.amount > this.item.maxmum){
        this.$toast.show("输入币种数量大于最高限额");
        return;
      }
      this.orderType = 2;
      this.currentItem = item;
    },
    changebuySellShow() {
      this.$store.commit("buySellShow", false);
    },
    continueOrder(password, verifyCode) {
      const { amount } = this;
      this.axios({
        url: "/c2c/order",
        params: {
          uid: this.user.uid,
          pend_id: this.currentItem._id,
          type: this.buyType == 'buy' ? 2 : 1,
          amount,
          pwd: password,
          code: verifyCode
        }
      })
        .then(res => {
          //TODO jump to order-to-pay page
          this.$router.push({
            path: "/result"
          });
          this.$store.commit('order_detail', res.data);
        })
        .catch(err => {
          // this.$toast.show({
          //   msg: err.message || "操作失败"
          // });
          console.log("failed, but still jump to order-to-pay page");
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.buySellbox {
  width: 100vw;
  height: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.5);
  .infos {
    border-radius: 16px 16px 0px 0px;
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: $white;
    padding: 20px 15px;
    .top {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .l {
        font-size: 18px;
        color: $color2;
      }
      .l2 {
        font-size: 14px;
        color: $color1;
      }
      .right {
        img {
          width: 15px;
          height: 15px;
          margin-left: 10px;
        }
      }
      .r2 {
        font-family: 14px;
        color: $fontActive;
      }
      .img2 {
        width: 15px;
        height: 15px;
      }
    }
    .top2 {
      margin-bottom: 20px;
    }
    .n {
      margin-top: 20px;
      font-size: 14px;
      color: $color1;
      .transfer {
        text-decoration: underline;
      }
    }
    .inpbox {
      margin-bottom: 25px;
      margin-top: 12px;
      display: flex;
      align-items: center;
      border-radius: 3px;
      border: 1px solid $border;
      .left {
        width: 80%;
        .inp {
          padding: 0 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 50px;
          span {
            color: $color2;
            text-transform: uppercase;
            font-size: 14px;
          }
          input {
            border: none;
            width: 80%;
            height: 100%;
          }
        }
        .br {
          border-right: 1px solid $border;
        }
        .bt {
          border-bottom: 1px solid $border;
        }
      }
      .right {
        width: 20%;
        text-align: center;
        font-size: 14px;
        color: $fontActive;
      }
    }
  }
}
</style>

