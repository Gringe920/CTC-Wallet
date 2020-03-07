<template>
  <section>
    <Header title="出售USDT" />
    <div class="container">
      <!-- <div class="order-progress">
        <div class="order-status order-status-1">
          <img class="progress-icon" src="../../assets/images/details_selected@2x.png" />
          <p class="order-name">下单</p>
        </div>
        <div class="order-status order-status-2">
            <img class="progress-icon" src="../../assets/images/details_selected@2x.png" />
            <p class="order-name">{{pendingPay}}</p>
        </div>
        <div class="order-status order-status-3">
            <img class="progress-icon" src="../../assets/images/details_selected@2x.png" />
            <p class="order-name">{{verifyPay}}</p>
        </div>
        <div class="order-status order-status-4">
            <img class="progress-icon" src="../../assets/images/details_selected@2x.png" />
            <p class="order-name">放币</p>
      </div>-->
      <div class="order-progress">
        <div class="order-status">
          <div class="order-status-1">
            <img class="progress-icon" src="../../assets/images/details_selected@2x.png" />
          </div>
          <div class="line"></div>
          <div class="order-status-2">
            <img class="progress-icon" src="../../assets/images/details_selected@2x.png" />
          </div>
          <div class="line"></div>
          <div class="order-status-3">
            <img class="progress-icon" src="../../assets/images/details_selected@2x.png" />
          </div>
          <div class="line"></div>
          <div class="order-status-4">
            <img class="progress-icon" src="../../assets/images/details_selected@2x.png" />
          </div>
        </div>
        <div class="order-status-text">
          <div class="sta-txx">下单</div>
          <div class="sta-txx">{{pendingPay}}</div>
          <div class="sta-txx">{{verifyPay}}</div>
          <div class="sta-txx">放币</div>
        </div>
      </div>
      <div class="order-result">
        <p class="status-text">申诉中 金额6890 CNY</p>
        <p class="reason">申诉理由：我已付款，商家未确认。</p>
        <p class="deal">处理方式：等待处理</p>
      </div>
      <div class="order-detail">
        <div class="d-row">
          <span>订单号</span>
          <span class="d-v">
            2342837482847482582857
            <i class="copy"></i>
          </span>
        </div>
        <div class="d-row">
          <span>商家</span>
          <span class="d-v">{{sellerName}}</span>
        </div>
        <div class="d-row">
          <span>数量</span>
          <span class="d-v">{{order_detail.amount.$numberDecimal}}</span>
        </div>
        <div class="d-row">
          <span>价格</span>
          <span class="d-v">6.89 CNY</span>
        </div>
        <div class="d-row">
          <span>备注码(付款时填写备注码）</span>
          <span class="d-v">
            {{order_detail.code}}
            <i class="copy"></i>
          </span>
        </div>
      </div>
      <div class="attetion">
        1、您的汇款将直接进入卖方账户，交易过程中卖方出售的数字资产由平台托管保护；
        <br />2、转账时“转账备注/附言”必需填写转账备注；
        <br />3、“支付完成后”请务必点击【我已付款】，避免超时订单自动取消造成您的财产损失；
        <br />4、如订单金额较大时，建议分开多次转账（每笔不超过5万）以保证资金能及时到账；
        <br />5、如果买卖双方当日取消订单3次，将会被限制当日买入卖出功能。
        <br />
      </div>
      <div class="r-bottom">
        <div class="bottom-btn">
          <p>
            <img src="../../assets/images/details_news@2x.png" />
          </p>
          <p>聊天</p>
        </div>
        <div class="bottom-btn">
          <p>
            <img src="../../assets/images/details_iphone@2x.png" />
          </p>
          <p>联系对方</p>
        </div>
        <!-- 如果是出售，则是申诉；如果是买入，则是取消订单 -->
        <div class="bottom-btn">
          <p>
            <img
              :src='require(order_detail.pend_type == 2 ? "../../assets/images/details_complaint@2x.png":"../../assets/images/details_order_cancel@2x.png")'
            />
          </p>
          <p>{{order_detail.pend_type == 2 ? '申诉':'取消订单'}}</p>
        </div>
        <div class="confirm-btn" @click="confirm">
          <p>{{order_detail.pend_type == 2 ? '对方已付款': '我已付款'}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      pendingPay: "待对方汇款",
      verifyPay: "核实汇款",
      sellerName: ""
    };
  },
  mounted() {
    let uid = 0;
    if (this.order_detail.pend_type == 1) {
      // type 1, uid = buyer
      uid = this.order_detail.buyer;
    } else if (this.order_detail.pend_type == 2) {
      // type 2, uid = seller
      uid = this.order_detail.seller;
    }
    this.getSellerName(uid);
  },
  computed: {
    ...mapState(["order_detail"])
  },
  methods: {
    getSellerName(uid) {
      this.axios({
        url: "/service/getNickName",
        params: {
          uid
        }
      })
        .then(res => {
          this.sellerName = res.data;
        })
        .catch(err =>
          this.$toast.show({
            msg: err.message || "获取商家名失败"
          })
        );
    },
    confirm() {
      console.log('as')
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  height: 100%;
}
.container {
  padding-top: 50px;
}
.order-progress {
  padding: 15px 38px;
  border-bottom: 10px solid #f9f8fd;
  .order-status {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .order-status-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
  }
  .progress-icon {
    width: 24px;
    height: 24px;
  }
  .line {
    width: 20%;
    height: 1px;
    border: 1px dashed #1771ed;
    margin-top: -6px;
  }
}
.order-result {
  font-size: 14px;
  padding: 15px;
  color: #97a2af;
  .status-text {
    font-size: 18px;
    color: #1771ed;
    margin-bottom: 10px;
  }
  .reason {
    margin-bottom: 10px;
  }
}
.order-detail {
  font-size: 14px;
  padding: 15px;
  border-top: 10px solid #f9f8fd;
  .d-row {
    display: flex;
    margin-bottom: 14px;
    color: #97a2af;
    justify-content: space-between;
    i.copy {
      display: inline-block;
      width: 14px;
      height: 14px;
      justify-content: space-between;
      background-image: url("../../assets/images/copy@2x.png");
      background-size: 100% 100%;
      vertical-align: middle;
    }
    .d-v {
      color: #333;
    }
  }
}
.attetion {
  font-size: 14px;
  padding: 15px;
  color: #97a2af;
  border-top: 10px solid #f9f8fd;
  line-height: 2;
  padding-bottom: 70px;
}
.r-bottom {
  box-shadow: 0px 2px 14px 0px rgba(30, 49, 107, 0.1);
  height: 64px;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 10px;
  color: #97a2af;
  align-items: center;
  background-color: #fff;
  .bottom-btn {
    text-align: center;
  }
  .confirm-btn {
    width: 186px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    font-size: 16px;
    background-color: #1771ED;
    border-radius: 3px;
    color: white;
  }
  img {
    width: 20px;
    height: 20px;
    margin-bottom: 5px;
  }
}
</style>