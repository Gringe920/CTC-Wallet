<template>
  <section>
    <div class="header">
      <img @click="reply" src="../../assets/images/return_black@2x.png" alt class="icon_l" />
      发布订单
      <span @click="coinlistVisible = !coinlistVisible"> {{symbol}}
      <i ></i></span>
    </div>
    <coinlist :coin="symbol" 
              v-if="coinlistVisible"
              @onItemSelect="onCoinSelect" />
    <div class="content">
      <div class="tag">
        <div class="tagli" @click="handleActive(1)" :class="{'active': activeIndex == 1}">购买</div>
        <div class="tagli" @click="handleActive(2)" :class="{'active': activeIndex == 2}">出售</div>
      </div>
      <div class="line"></div>
      <div class="buy-box" >
        <div class="p-content bor-bottom">
          <div class="p-row tips">
            <span>余额：{{user.basicInfo.asset[symbol] ? user.basicInfo.asset[symbol].$numberDecimal : 0}} {{symbol.toUpperCase()}}</span>
            <span>参考价：¥6.79</span>
          </div>
          <div class="line"></div>
          <div class="p-row">
            <span class="tit">价格</span>
            <div class="inp">
              <input type="number" :placeholder="`${activeIndex == 2 ?'卖出': '买入'}价格，不低于0.995，不高于1`" v-model="price" />
              <span>CNY</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="p-row">
            <span class="tit">数量</span>
            <div class="inp">
              <input type="number" :placeholder="`${activeIndex == 2 ?'卖出': '买入'}数量，不低于20000`" v-model="amount" />
              <span>{{symbol.toUpperCase()}}</span>
            </div>
          </div>
        </div>
        <div class="p-content">
          <div class="p-row tips">
            <span>交易限额</span>
          </div>
          <div class="line"></div>
          <div class="p-row">
            <span class="tit">最高成交额</span>
            <div class="inp">
              <input type="number" placeholder="请输入价格" v-model="maxnum" />
              <span>CNY</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="p-row">
            <span class="tit">最低成交额</span>
            <div class="inp">
              <input placeholder="请输入价格" v-model="minnum" />
              <span>CNY</span>
            </div>
          </div>
         
          
          <div class="line"></div>
          <div class="in-tips">交易总额：0.00 CNY</div>
        </div>
      </div>
      <tradedialog
        v-if="VerifyCodeStatus"
        @onClose="changebuySellShow"
        @onConfirm="submit"
      />
      <r-button text="发布" width="90%" class="btn-submit" :tocomfirm='commitButton' />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import coinlist from '../../components/coinlist.vue'
import tradedialog from "../../components/tradedialog.vue";
export default {
  data() {
    return {
      activeIndex: 1,
      submitStatus: false,
      symbol: "usdt",
      amount: null,
      price: null,
      type: 2, //（1：购买 2：出售）
      paytype_bank: 1, // 是否支持银行卡（0：不支持，1：支持）
      paytype_wx: 1, // 是否支持微信
      paytype_alipay: 1, // 是否支持支付宝
      minnum: null, // 支持的最小交易数量
      maxnum: null, // 支持的最大交易数量
      VerifyCodeStatus:false,
      coinlistVisible: false,
    };
  },

  mounted() {},
  components: {
    coinlist,
    tradedialog
  },
  computed: {
    ...mapState(["user", "coin_list", "assets_detail"])
  },
  methods: {
    handleActive(idx){
      this.amount = this.price = this.minnum = this.maxnum = null;
      this.activeIndex = idx;
    },
    commitButton(){
      const {amount, price, minnum, maxnum, activeIndex } = this;
      const toTxt = activeIndex == 2 ? '出售': '购买';
      if(!price){
        this.$toast.show(`请输入${toTxt}价格`);
        return;
      }
      if(!amount){
        this.$toast.show(`请输入${toTxt}数量`);
        return;
      }
      if(!maxnum){
        this.$toast.show(`请输入${toTxt}最高成交额`);
        return;
      }
      if(!minnum){
        this.$toast.show(`请输入${toTxt}最低成交额`);
        return;
      }
      if(minnum > maxnum){
        this.$toast.show(`最低成交额不可大于最高成交额`);
        return;
      }
      this.VerifyCodeStatus = true;
    },
    changebuySellShow() {
      this.VerifyCodeStatus = false;
      this.$store.commit("buySellShow", false);
    },
    onCoinSelect(coin) {
      this.symbol = coin;
      this.coinlistVisible = false;
    },
    submit(pwd, code) {
      if (this.submitStatus) return;
      this.submitStatus = true;
      const {symbol, amount, price, type, paytype_bank, paytype_wx, paytype_alipay, minnum, maxnum} = this;
      this.axios({
        url: "/c2c/pend",
        params: {
          symbol,
          amount,
          price,
          type,
          paytype_bank,
          paytype_wx,
          paytype_alipay,
          minnum,
          maxnum,
          pwd,
          code,
        }
      })
        .then(res => {
          this.submitStatus = false;
          this.$toast.show("挂单成功!");
        })
        .catch(err => {
          this.submitStatus = false;
          this.$toast.show( err.message || "挂单失败，请重试" );
        });
    },
    reply() {
      if (typeof plus == "object") {
        let webview = plus.webview.getLaunchWebview();
        webview.back();
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  .header {
    line-height: 50px;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    .icon_l {
      position: absolute;
      left: 15px;
      width: 20px;
      height: 20px;
      margin-top: 15px;
    }
    i {
      background-image: url("../../assets/images/triangle_lower@2x.png");
      background-size: 100% 100%;
      display: inline-block;
      width: 8px;
      height: 4px;
      vertical-align: middle;
    }
  }
  .content {
    .tag {
      padding: 12px 0;
      display: flex;
      justify-content: space-around;
      .tagli {
        font-size: 14px;
        color: #97a2af;
        &.active {
          color: #1771ed;
          position: relative;
          &::after {
            content: "";
            display: inline-block;
            position: absolute;
            bottom: -12px;
            width: 28px;
            height: 2px;
            background-color: #1771ed;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
    .bor-bottom {
      border-bottom: 10px solid #f9f9fb;
    }
    .p-content {
      padding: 15px;

      .p-row {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        padding: 15px 0;
        &.tips {
          font-size: 12px;
          color: #97a2af;
          padding: 0 0 10px;
        }
        .inp {
          width: 74%;
          text-align: right;
          input {
            text-align: right;
            width: 80%;
          }
          span {
            color: #333;
            padding-left: 5px;
          }
        }
      }
      .in-tips {
        font-size: 12px;
        margin-top: 10px;
        color: #97a2af;
      }
    }
  }
}
</style>