<template>
  <section class="Orderstatus">
    <Header title="购买USDT" ></Header>
    <div class="status">
      <div class="line1"></div>
      <div class="line2"></div>
        <div class="line3"></div>
      <div>
        <div>
        <img src="../../assets/images/details_selected@2x.png" alt="" srcset="">
        <span class="spanactive">下单</span>
        </div>
      </div>
      <div>
        <img   src="../../assets/images/details_2_unchecked@2x.png" alt="" srcset="">
        <img  v-if="false" src="../../assets/images/details_2_selected@2x.png" alt="" srcset="">
        <span>给对方放款</span>
      </div>
      <div>
        <img v-if='false' src="../../assets/images/details_3_selected@2x.png" alt="" srcset="">
        <img  src="../../assets/images/details_3_unchecked@2x.png" alt="" srcset="">
        <span>对方确定</span>
      </div>
      <div>
        <img src="../../assets/images/details_4_unchecked@2x.png" alt="" srcset="">
        <span>放币</span> 
      </div>
    </div>
    <div class="money">
      <div class="m1">待付款&nbsp;金额6890&nbsp;CNY</div>
      <div class="m2">请在<span>30:00</span>内汇款给商家</div>
      <div class="m3">
        <div  class="m31">订单号</div>
        <div>2342837482847482582857</div>
      </div>
      <div class="m3">
        <div  class="m31">商家</div>
        <div>风清云淡</div>
      </div>
      <div class="m3">
        <div class="m31">数量</div>
        <div>1000</div>
      </div>
      <div class="m3">
        <div class="m31">价格</div>
        <div>6.89 CNY</div>
      </div>
    </div>
    <div class="money">
      <div class="m4">支付方式</div>
      <div class="m3 m2">
        <div  class="m31">
            <img v-if="false" src="../../assets/images/otc_bank_card@2x.png" alt="" srcset="">
            <img src="../../assets/images/otc_wechat@2x.png" alt="" srcset="">
            <img  v-if="false" src="../../assets/images/otc_alipay@2x.png" alt="" srcset="">
          微信</div>
        <div class='m32'>切换支付方式7</div>
      </div>
      <div class="m3">
        <div  class="m31">收款人</div>
        <div>王辉</div>
      </div>
      <div class="m3">
        <div class="m31">账号</div>
        <div>395802370@qq.com</div>
      </div>
      <div class="m3">
        <div class="m31">收款二维码</div>
        <div>6.89 CNY</div>
      </div>
      <div class="m3">
        <div class="m31">备注码(付款时填写备注码</div>
        <div>368888</div>
      </div>
     
    </div>
    <div class="infos">
      <div>1、您的汇款将直接进入卖方账户，交易过程中卖方出售的数字资产由平台托管保护；</div>
      <div>2、转账时“转账备注/附言”必需填写转账备注；</div>
      <div>3、“支付完成后”请务必点击【我已付款】，避免超时订单自动取消造成您的财产损失；</div>
      <div>4、如订单金额较大时，建议分开多次转账（每笔不超过5万）以保证资金能及时到账；</div>
      <div>5、如果买卖双方当日取消订单3次，将会被限制当日买入卖出功能。</div>
    </div>
    <div class="last">
      <div class="div1">
      <div @click="toRoute('chat')">
        <img v-if='false' src="../../assets/images/details_3_selected@2x.png" alt="" srcset="">
        <img  src="../../assets/images/details_news@2x.png" alt="" srcset="">
        <span :class="isPhoneModal?'fontactive':''">聊天</span>
      </div>
      <div @click="submitPhoneActive(true)">
        <img v-if='isPhoneModal' src="../../assets/images/details_3_selected@2x.png" alt="" srcset="">
        <img v-else  src="../../assets/images/details_iphone@2x.png" alt="" srcset="">
        <span :class="isPhoneModal?'fontactive':''">联系对方</span>
      </div>
      <div @click="submitorderActive(true)" >
        <img v-if='isdeleteorderModal' src="../../assets/images/details_3_selected@2x.png" alt="" srcset="">
        <img v-else src="../../assets/images/details_order_cancel@2x.png" alt="" srcset="">
        <span :class="isdeleteorderModal?'fontactive':''">取消订单</span>
      </div>
      <div  @click="submitshsuActive(true)" v-if="false">
        <img v-if='isshensuModal' src="../../assets/images/details_3_selected@2x.png" alt="" srcset="">
        <img v-else  src="../../assets/images/details_complaint@2x.png" alt="" srcset="">
        <span :class="isshensuModal ?'fontactive':''">申诉</span>
      </div>
      </div>
      <div class="submit">待付款</div>
        <r-modal title="确认付款"
             @on-ok="submitActive"
             :show="isShowModal"
             @on-cancel="isShowModal = false">
        <p class="active-content">请确认您已向对方付款，恶意点击将直接冻结账户。</p>
    </r-modal>
    <r-modal title='确定拨号'
             @on-ok="submitPhoneActive(false)"
             :show="isPhoneModal"
             @on-cancel="isPhoneModal = false">
        <p class="active-content">13823240888</p>
    </r-modal>
    <r-modal title='申诉'
             @on-ok="submitshsuActive(false)"
             :show="isshensuModal"
             @on-cancel="isshensuModal = false">
             <textarea class="textarea" name="" id=""  placeholder="请填写申诉内容"></textarea>
    </r-modal>
    <r-modal title='确认取消订单'
             @on-ok="submitorderActive(false)"
             :show="isdeleteorderModal"
             @on-cancel="isdeleteorderModal = false">
            <p class="active-content">确认取消该订单?</p>
    </r-modal>
    </div>
  </section>
</template>
<script>
export default {
  name: "Orderstatus",
  data() {
    return {
      isShowModal: false,
      isPhoneModal: false,
      isshensuModal: false,
      isdeleteorderModal:false,
    };
  },
  methods: {
    submitActive() {
      this.isShowModal = false;
    },
    submitorderActive(data) {
      this.isdeleteorderModal = data;
    },
    submitshsuActive(data) {
      this.isshensuModal = data;
    },
    submitPhoneActive(data) {
      this.isPhoneModal = data;
    }
  }
};
</script>
<style lang="scss" scoped>
.fontactive{
  color: $fontActive;
}
.textarea {
  background: rgba(233, 233, 233, 0.5);
  border-radius: 6px;
  width: 90%;
  padding: 10px;
  min-height: 150px;
  border: 1px solid rgba(233, 233, 233, 1);
}
.Orderstatus {
  padding-top: 50px;
  .status {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 10px 25px;
    .line1 {
      position: absolute;
      width: 30%;
      top: 14px;
      left: 15px;
      height: 1px;
      border: 1px dashed $color4;
    }
      .line2 {
      position: absolute;
      width: 30%;
      top: 14px;
      left: 35%;
      height: 1px;
      border: 1px dashed $color4;
    }
      .line3 {
      position: absolute;
      width: 30%;
      top: 14px;
      left: 66%;
      height: 1px;
      border: 1px dashed $color4;
    }
    div {
      z-index: 5;
      font-size: 10px;
      color: $color1;
      display: flex;
      flex-direction: column;
      align-items: center;

      .spanactive {
        color: $fontActive;
      }
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
  .money {
    border-top: 10px solid #f7f9fc;
    padding: 15px;
    .m1 {
      color: $fontActive;
      font-size: 18px;
      margin-bottom: 10px;
    }

    .m3 {
      display: flex;
      font-size: 14px;
      padding: 5px 0;
      color: $active;
      justify-content: space-between;
      .m31 {
        display: flex;
        align-items: center;
        color: $color1;
        img {
          margin-right: 5px;
          width: 15px;
          height: 15px;
        }
      }
      .m32 {
        color: $color1;
      }
    }
    .m2 {
      color: $color1;
      font-size: 14px;
      padding-bottom: 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      margin-bottom: 10px;
      span {
        color: $fontActive;
        padding: 0 5px;
      }
    }
    .m4 {
      color: $active;
      margin-bottom: 10px;
      font-size: 18px;
    }
  }
  .infos {
    border-top: 10px solid #f7f9fc;
    padding: 15px;
    div {
      color: $color1;
      font-size: 14px;
      line-height: 25px;
    }
  }
  .last {
    height: 60px;
    display: flex;
    border-top: 2px solid #f7f9fc;
    padding: 0 15px;
    align-items: center;
    justify-content: space-between;
    .div1 {
      min-width: 50%;
      padding-right: 10px;
      display: flex;
      justify-content:space-around;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 10px;
        color: $color1;
        img {
          width: 26px;
          height: 26px;
        }
      }
    }
    .submit {
      border-radius: 3px;
      width: 50%;
      height: 44px;
      text-align: center;
      line-height: 44px;
      background: $btnDefalutBg;
      font-size: 16px;
      color: $btnFontColor;
    }
  }
}
</style>
