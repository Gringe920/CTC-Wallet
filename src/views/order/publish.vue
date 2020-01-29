<template>
  <section>
    <div class="header">
      <img @click="reply" src="../../assets/images/return_black@2x.png" alt class="icon_l" />
      发布订单 USDT
      <i></i>
    </div>
    <div class="content">
      <div class="tag">
        <div class="tagli" @click="activeIndex = 0" :class="{'active': activeIndex == 0}">购买</div>
        <div class="tagli" @click="activeIndex = 1" :class="{'active': activeIndex == 1}">出售</div>
      </div>
      <div class="line"></div>
      <div class="sell-box" v-if="activeIndex == 0">
        <div class="p-content bor-bottom">
          <div class="p-row tips">
            <span>余额：5000 USDT</span>
            <span>参考价：¥6.79</span>
          </div>
          <div class="line"></div>
          <div class="p-row">
            <span class="tit">价格</span>
            <div class="inp">
              <input placeholder="买入价格，不低于0.995，不高于1" />
              <span>CNY</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="p-row">
            <span class="tit">数量</span>
            <div class="inp">
              <input placeholder="买入数量，不低于20000" />
              <span>USDT</span>
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
              <input placeholder="请输入价格" />
              <span>CNY</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="p-row">
            <span class="tit">最低成交额</span>
            <div class="inp">
              <input placeholder="请输入价格" />
              <span>CNY</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="in-tips">交易总额：0.00 CNY</div>
        </div>
      </div>
      <div class="buy-box" v-if="activeIndex == 1">
        <div class="p-content bor-bottom">
          <div class="p-row tips">
            <span>余额：5000 USDT</span>
            <span>参考价：¥6.79</span>
          </div>
          <div class="line"></div>
          <div class="p-row">
            <span class="tit">价格</span>
            <div class="inp">
              <input placeholder="卖出价格，不低于0.995，不高于1" />
              <span>CNY</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="p-row">
            <span class="tit">数量</span>
            <div class="inp">
              <input placeholder="卖出数量，不低于20000" />
              <span>USDT</span>
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
              <input placeholder="请输入价格" />
              <span>CNY</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="p-row">
            <span class="tit">最低成交额</span>
            <div class="inp">
              <input placeholder="请输入价格" />
              <span>CNY</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="in-tips">交易总额：0.00 CNY</div>
        </div>
      </div>
      <r-button text="确定" width="90%" class="btn-submit" />
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      activeIndex: 0
    }
  },
  methods: {
    reply() {
      if (this.leftEv()) {
        return;
      }
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