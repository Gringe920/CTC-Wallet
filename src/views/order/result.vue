<template>
  <section>
    <Header title="出售USDT" />
    <div class="container">
      <div class="order-status">
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
          <span class="d-v">风清云淡</span>
        </div>
        <div class="d-row">
          <span>数量</span>
          <span class="d-v">1000</span>
        </div>
        <div class="d-row">
          <span>价格</span>
          <span class="d-v">6.89 CNY</span>
        </div>
        <div class="d-row">
          <span>备注码(付款时填写备注码）</span>
          <span class="d-v">
            368888
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
        <div>
          <p>
            <img src="../../assets/images/details_news@2x.png" />
          </p>
          <p>聊天</p>
        </div>
        <div>
          <p>
            <img src="../../assets/images/details_iphone@2x.png" />
          </p>
          <p>聊天</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  height: 100%;
}
.container{
  padding-top: 50px;
}
.order-status {
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
  img {
    width: 20px;
    height: 20px;
    margin-bottom: 5px;
  }
}
</style>