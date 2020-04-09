<template>
  <section>
    <div class="header"> 
      <img @click="reply" src="../../assets/images/home_search_white@2x(1).png" alt class="icon_l" />
      <span>{{$t('publish.title')}}</span>
      <span @click="coinlistVisible = !coinlistVisible"> {{symbol}}
      <i ></i></span>
    </div>
    <coinlist :coin="symbol" 
              v-if="coinlistVisible"
              @onItemSelect="onCoinSelect" />
    <div class="content">
      <div class="tag">
        <div class="tagli" @click="handleActive(1)" :class="{'active': activeIndex == 1}">{{$t('ctc.buy')}}</div>
        <div class="tagli" @click="handleActive(2)" :class="{'active': activeIndex == 2}">{{$t('ctc.sell')}}</div>
      </div>
      <div class="line"></div>
      <div class="buy-box" >
        <div class="p-content bor-bottom">
          <div class="p-row tips">
            <span>{{$t('ctc.assets')}}：{{user.basicInfo.asset[symbol] ? user.basicInfo.asset[symbol].$numberDecimal : 0}} {{symbol.toUpperCase()}}</span>
            <span>{{$t('publish.currPrice')}}：¥{{currentPrices[symbol]}}</span>
          </div>
          <div class="line"></div>
          <div class="p-row">
            <span class="tit">{{$t('publish.inpPrice')}}</span>
            <div class="inp">
              <!--<input type="number" :placeholder="`${activeIndex == 2 ? $t('ctc.selling'): $t('ctc.buying')}${$t('publish.placeholder1')}`" v-model="price" />-->
              <input type="number" placeholder="" v-model="price" />
              <span>CNY</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="p-row">
            <span class="tit">{{$t('publish.amount')}}</span>
            <div class="inp">
              <!--<input type="number" :placeholder="`${activeIndex == 2 ?$t('ctc.selling'): $t('ctc.buying')}${$t('publish.placeholder2')}`" v-model="amount" />-->
              <input type="number" placeholder="" v-model="amount" />
              <span>{{symbol.toUpperCase()}}</span>
            </div>
          </div>
        </div>
        <div class="p-content">
          <div class="p-row tips">
            <span>{{$t('publish.traPrice')}}</span>
          </div>
          <div class="line"></div>
          <div class="p-row">
            <span class="tit">{{$t('publish.highDeals')}}</span>
            <div class="inp">
              <input type="number" :placeholder="$t('publish.placeholder3')" v-model="maxnum" />
              <span>{{symbol.toUpperCase()}}</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="p-row">
            <span class="tit">{{$t('publish.lowDeals')}}</span>
            <div class="inp">
              <input :placeholder="$t('publish.placeholder3')" v-model="minnum" />
              <span>{{symbol.toUpperCase()}}</span>
            </div>
          </div>
         
          
          <div class="line"></div>
          <div class="in-tips">{{$t('publish.total')}}：{{price * amount}} CNY</div>
        </div>
      </div>
      <tradedialog
        v-if="VerifyCodeStatus"
        @onClose="changebuySellShow"
        @onConfirm="submit"
      />
      <r-button :text="$t('ctc.publish')" width="90%" class="btn-submit" :tocomfirm='commitButton' />
    </div>
    <r-modal
            :title="$t('ctc.setPayway')"
            @on-ok="submitActive"
            :show="isShowModal"
            @on-cancel="isShowModal = false"
    >
      <p class="active-content">{{$t('ctc.paywayCont')}}</p>
    </r-modal>

    <r-modal
            :title="$t('user.userMsg68')"
            @on-ok="submitActive2"
            :show="isShowModal2"
            @on-cancel="isShowModal2 = false"
    >
      <p class="active-content">{{$t('user.userMsg42')}}</p>
    </r-modal>
  </section>
</template>

<script>
import { mapState } from "vuex";
import coinlist from "../../components/coinlist.vue";
import tradedialog from "../../components/tradedialog.vue";
export default {
  data() {
    return {
      activeIndex: 1,
      submitStatus: false,
      isShowModal: false,
      isShowModal2: false,
      symbol: "usdt",
      amount: null,
      price: null,
      type: 2, //（1：购买 2：出售）
      paytype_bank: 1, // 是否支持银行卡（0：不支持，1：支持）
      paytype_wx: 1, // 是否支持微信
      paytype_alipay: 1, // 是否支持支付宝
      minnum: null, // 支持的最小交易数量
      maxnum: null, // 支持的最大交易数量
      VerifyCodeStatus: false,
      coinlistVisible: false,
      currentPrices: {}
    };
  },
  mounted() {
    this.getCurrentprice();
  },
  components: {
    coinlist,
    tradedialog
  },
  computed: {
    ...mapState(["user", "coin_list", "assets_detail"])
  },
  methods: {
    submitActive() {
      this.$router.push({ path: "/selectPayway" });
      this.isShowModal = false;
    },
    submitActive2() {
      this.$router.push({ path: "/setTradePsw" });
      this.isShowModal2 = false;
    },
    getCurrentprice() {
      this.axios({
        url: "/service/current_price",
        params: {}
      })
        .then(res => {
          this.currentPrices = res.data || {};
        })
        .catch(err => {
          this.$toast.show(this.$t("publish.toast0"));
        });
    },
    handleActive(idx) {
      this.amount = this.price = this.minnum = this.maxnum = null;
      this.activeIndex = idx;
    },
    commitButton() {
        console.log('commitButton');
      if (!this.user.basicInfo) {
        this.$router.push({ path: "/login" });
        return;
      }
      if (this.user.basicInfo.deal_pwd_state != 1) {
        this.isShowModal2 = true;
        return;
      }
      if (
        this.user.wechat_state === 0 &&
        this.user.bankcard_state === 0 &&
        this.user.alipay_state === 0
      ) {
        this.isShowModal = true;
        return;
      }
      const { amount, price, minnum, maxnum, activeIndex } = this;
      const toTxt = activeIndex == 2 ? this.$t("ctc.sell") : this.$t("ctc.buy");
      if (!price) {
        this.$toast.show(
          `${this.$t("publish.toast1")}${toTxt}${this.$t("publish.inpPrice")}`
        );
        return;
      }
      if (!amount) {
        this.$toast.show(
          `${this.$t("publish.toast1")}${toTxt}${this.$t("publish.amount")}`
        );
        return;
      }
      if (!maxnum) {
        this.$toast.show(
          `${this.$t("publish.toast1")}${toTxt}${this.$t("publish.highDeals")}`
        );
        return;
      }
      if (!minnum) {
        this.$toast.show(
          `${this.$t("publish.toast1")}${toTxt}${this.$t("publish.lowDeals")}`
        );
        return;
      }
      if (+minnum > +maxnum) {
        this.$toast.show(this.$t("publish.toast2"));
        return;
      }
      this.VerifyCodeStatus = true;
        console.log('commitButton', VerifyCodeStatus);
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
      this.type = this.activeIndex;
      const {
        symbol,
        amount,
        price,
        type,
        paytype_bank,
        paytype_wx,
        paytype_alipay,
        minnum,
        maxnum
      } = this;
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
          code
        }
      })
        .then(res => {
          this.submitStatus = false;
          this.$toast.show(this.$t("publish.toast3"));
          this.$router.go(-1);
        })
        .catch(err => {
          this.submitStatus = false;
          this.$toast.show(err.message || this.$t("publish.toast4"));
        });
    },
    reply() {
      if (typeof plus == "object") {
        let webview = plus.webview.getWebviewById("otc");
        webview.back();
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-height: 424px) {
  .btn-submit {
    display: none;
  }
}
section {
  .header {
    line-height: 50px;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    color: $color1;
    span {
      color: $color1;
    }
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
    background: $border2;
    .tag {
      padding: 12px 0;
      display: flex;
      justify-content: space-around;
      .tagli {
        font-size: 14px;
        color: $color1;
        &.active {
          color: $fontActive;
          position: relative;
          &::after {
            content: "";
            display: inline-block;
            position: absolute;
            bottom: -12px;
            width: 28px;
            height: 2px;
            background-color: $fontActive;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
    .bor-bottom {
      border-bottom: 10px solid  $border2;
    }
    .p-content {
      padding: 15px;

      .p-row {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: $color1;
        padding: 15px 0;
        &.tips {
          font-size: 12px;
          color: $color1;
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
            color: $color1;
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