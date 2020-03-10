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
        <div class="tagli" @click="activeIndex = 1" :class="{'active': activeIndex == 1}">购买</div>
        <div class="tagli" @click="activeIndex = 2" :class="{'active': activeIndex == 2}">出售</div>
      </div>
      <div class="line"></div>
      <div class="buy-box" >
        <div class="p-content bor-bottom">
          <div class="p-row tips">
            <span>余额：{{user.asset[symbol].$numberDecimal}} {{symbol.toUpperCase()}}</span>
            <span>参考价：¥6.79</span>
          </div>
          <div class="line"></div>
          <div class="p-row">
            <span class="tit">价格</span>
            <div class="inp">
              <input type="number" placeholder="卖出价格，不低于0.995，不高于1" v-model="price" />
              <span>CNY</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="p-row">
            <span class="tit">数量</span>
            <div class="inp">
              <input type="number" placeholder="卖出数量，不低于20000" v-model="amount" />
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
            <div class="p-row">
            <span class="tit">交易密码</span>
            <div class="inp">
              <input placeholder="请输入价格" v-model="pwd" />
              <span>CNY</span>
            </div>
          </div>
          <div class="line"></div>
            <div class="p-row">
            <span class="tit">code</span>
            <div class="inp">
              <input placeholder="请输入价格" v-model="code" />
              <span>CNY</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="in-tips">交易总额：0.00 CNY</div>
        </div>
      </div>
      <div @click="getVerifyCode">获取验证码</div>
      <r-button text="确定" width="90%" class="btn-submit" :tocomfirm='submit' />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import coinlist from "../../components/coinlist.vue";
export default {
  data() {
    return {
      activeIndex: 1,
      submitStatus: false,
      symbol: "usdt",
      amount: 30,
      price: 100,
      type: 1, //（1：购买 2：出售）
      paytype_bank: 1, // 是否支持银行卡（0：不支持，1：支持）
      paytype_wx: 1, // 是否支持微信
      paytype_alipay: 1, // 是否支持支付宝
      minnum: 100, // 支持的最小交易数量
      maxnum: 10000, // 支持的最大交易数量
      pwd: "xiemei123456",
      code: "22",
      VerifyCodeStatus: false,

      coinlistVisible: false
    };
  },
  mounted() {},
  components: {
    coinlist
  },
  computed: {
    ...mapState(["user", "coin_list", "assets_detail"])
  },
  methods: {
    onCoinSelect(coin) {
      this.symbol = coin;
      this.coinlistVisible = false;
    },
    getVerifyCode() {
      var self = this;
      if (this.VerifyCodeStatus) return;
      self.VerifyCodeStatus = true;
      this.axios({
        url: "/c2c/getVerifyCode",
        params: {}
      })
        .then(res => {
          self.VerifyCodeStatus = false;
          this.$toast.show("获取C2C操作验证码成功!");
        })
        .catch(err => {
          self.VerifyCodeStatus = false;
          this.$toast.show({
            msg: err.message || "获取C2C操作验证码失败，请重试"
          });
        });
    },
    submit() {
      var self = this;
      if (this.submitStatus) return;
      self.submitStatus = true;
      console.log(
        typeof self.price,
        typeof self.type,
        typeof self.code,
        typeof self.paytype_bank,
        "self.price"
      );
      this.axios({
        url: "/c2c/pend",
        params: {
          symbol: self.symbol,
          amount: self.amount,
          price: self.price,
          type: self.type,
          paytype_bank: self.paytype_bank,
          paytype_wx: self.paytype_wx,
          paytype_alipay: self.paytype_alipay,
          minnum: self.minnum,
          maxnum: self.maxnum,
          pwd: self.pwd,
          code: self.code
        }
      })
        .then(res => {
          self.submitStatus = false;
          this.$toast.show("挂单成功!");
        })
        .catch(err => {
          self.submitStatus = false;
          this.$toast.show({ msg: err.message || "挂单失败，请重试" });
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
          input {
            text-align: right;
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