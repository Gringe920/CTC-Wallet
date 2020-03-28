<template>
  <section>
    <Header :title="`${isSeller() ? $t('result.buy') :  $t('result.sell')}${order_detail.symbol.toUpperCase()}`" />
    <div class="container">
        <!-- 已取消显示 -->
      <div class="order-progress">
        <div class="order-status">
          <div class="order-status-1">
            <img class="progress-icon" src="../../assets/images/details_selected@2x.png" />
          </div>
          <div :class='position > 1 ? "line" : "line-default"'></div>
          <div class="order-status-2">
            <img class="progress-icon" :src='require(`../../assets/images/${getPosition1Img()}`)' />
          </div>
          <div :class='position > 2 ? "line" : "line-default"'></div>
          <div class="order-status-3">
            <img class="progress-icon" :src='require(`../../assets/images/${getPosition2Img()}`)' />
          </div>
          <div :class='position > 3 ? "line" : "line-default"'></div>
          <div class="order-status-4">
            <img class="progress-icon" :src="require(`../../assets/images/${getPosition3Img()}`)" />
          </div>
        </div>
        <div class="order-status-text">
          <div class="sta-txx">{{$t('result.status0')}}</div>
          <div class="sta-txx">{{isSeller() ? $t('result.status1') : $t('result.status7')}}</div>
          <div class="sta-txx">{{isSeller() ? $t('result.status2') : $t('result.status8')}}</div>
          <div class="sta-txx">{{$t('result.status3')}}</div>
        </div>
      </div>
      <div class="order-result" v-if="order_detail.status === 4">
        <p class="status-text">{{isSeller() ? '' : $t('order.other')}}{{$t('result.status11')}}{{order_detail.price * order_detail.amount.$numberDecimal}} CNY</p>
        <p class="reason">{{$t('result.status12')}}：{{order_detail.appeal_content}}。</p>
        <p class="reason">{{$t('result.status13')}}</p>
      </div>
      <!-- <div class="order-result" v-if="order_detail.status == 0 && isSeller()">
        <p class="status-text">对方付款 金额 {{ order_detail.price }}CNY</p>
        <p class="reason">等待对方30:00内汇款</p>
      </div> -->
      
      <div class="order-detail">
        <div class="order-result" v-if="order_detail.status == 2" style="padding: 0">
            <p class="status-text">{{isSeller() ? '' : $t('order.other')}} {{$t('result.status10')}} {{order_detail.price * order_detail.amount.$numberDecimal || 0}}CNY</p>
        </div>
        <div class="line" style="margin-bottom: 15px;"></div>
        <div class="d-row">
          <span>{{$t('result.orderId')}}</span>
          <r-copy :copyText="order_detail._id">
              <span class="d-v">
                {{order_detail._id}}
                <i class="copy"></i>
              </span>
          </r-copy>
        </div>
        <div class="d-row" v-if="isSeller()">
          <span>{{$t('result.seller')}}</span>
          <span class="d-v">{{order_detail.seller_name || order_detail.seller}}</span>
        </div>
        <div class="d-row" v-if="!isSeller()">
          <span>{{$t('result.buyer')}}</span>
          <span class="d-v">{{order_detail.buyer_name || order_detail.buyer}}</span>
        </div>
        <div class="d-row">
          <span>{{$t('result.amount')}}</span>
          <span class="d-v">{{order_detail.amount.$numberDecimal}}</span>
        </div>
        <div class="d-row">
          <span>{{$t('result.price')}}</span>
          <span class="d-v">{{order_detail.price}} CNY</span>
        </div>
        <div class="d-row">
          <span>{{$t('result.code')}}</span>
          <r-copy :copyText="order_detail.code">
              <span class="d-v">
                {{order_detail.code}}
                <i class="copy"></i>
              </span>
          </r-copy>
        </div>
      </div>
      <div class="attention">
        {{$t('result.attention1')}}
        <br /> {{$t('result.attention2')}}
        <br /> {{$t('result.attention3')}}
        <br /> {{$t('result.attention4')}}
        <br /> {{$t('result.attention5')}}
        <br />
      </div>
      <div class="r-bottom" v-if="!isOrderClosed() && order_detail.status === 4">
        <div class="bottom-btn" @click="callDialogShow = true">
          <p>
            <img src="../../assets/images/details_iphone@2x.png" />
          </p>
          <p>{{$t('result.concact')}}</p>
        </div>
      </div>
      <Dialog :title="$t('result.dialogT2')" :show="callDialogShow" @on-cancel="callDialogShow = false">
        <p class="call-dialog-slot">{{phoneNumber}}</p>
      </Dialog>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Dialog from '../../components/modal.vue'
const POSITION_MAP = {
  0: 0,
  1: 3,
  3: 2,
  2: 0, // cancelled
}
export default {
  data() {
    return {
      sellerName: "",
      position: 1,
      payDialogShow: false,
      callDialogShow: false,
      complainDialogShow: false,
      cancelDialogShow: false,
      complainContent: '',
      phoneNumber: ''
    };
  },
  mounted() {
    this.updatePosition();
    this.getUserPhone()
  },
  computed: {
    ...mapState(["order_detail", 'user'])
  },
  methods: {
    callPhone(){
      window.location.href = `tel:${this.phoneNumber}`
    },
    getUserPhone(){
      this.axios({
            url: "/service/getPhoneNumber",
            params: {
              uid: this.isSeller() ? this.order_detail.seller : this.order_detail.buyer
            }
        })
        .then(res => {
            if(res.error_code === 0){
              this.phoneNumber = res.data
            }
        })
        .catch(err =>
          this.$toast.show(err.message || this.$t('result.toast0'))
        );
    },
    isSeller() {
      return this.order_detail.pend_type == 2 && this.order_detail.buyer === this.user.basicInfo.uid;
    },
    updatePosition() {
        this.position = POSITION_MAP[this.order_detail.status]
    },
    getPosition1Img() {
        if (this.position > 1) {
        return 'details_selected@2x.png';
      } else if (this.position < 1) {
        return 'details_2_unchecked@2x.png';
      } else {
        return 'details_2_selected@2x.png';
      }
    },
    getPosition2Img() {
      if (this.position > 2) {
        return 'details_3_selected@2x.png';
      } else {
        return 'details_3_unchecked@2x.png';
      }
    },
    getPosition3Img() {
      if (this.position >= 3) {
        return 'details_selected@2x.png';
      } else {
        return 'details_4_unchecked@2x.png';
      }
    },
    isOrderClosed() {
      return this.order_detail.pend_type == 1;
    },
  },
  components: {
    Dialog,
  }
}
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
  .line-default {
    width: 20%;
    height: 1px;
    border: 1px dashed #ccd0d3;
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
.pay-dialog-slot {
  margin: 0 20px;
  text-align: left;
}
.call-dialog-slot {
  margin: 0 20px;
}
.cancel-dialog-slot {
  margin: 0 20px;
  text-align: left;
}
.complain-dialog-slot {
  position: relative;
  margin: 0 20px;
  textarea {
    width: 100%;
    font-size: 14px;
    padding: 10px;
    height: 150px;
    background-color: #E9E9E9;
    border-radius:3px;
    outline: none;
    border:1px solid rgba(233,233,233,1);
  }
  span {
    position: absolute;
    right: 10px;
    font-size: 12px;
    bottom: 10px;
  }
}
.attention {
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
    background-color: #1771ed;
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