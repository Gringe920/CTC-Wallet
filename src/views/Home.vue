<template>
  <div class="home">
    <div class="hometou">
      <div class="home-l">
        <div class="ke">可用余额</div>
          <img  class="imgs" @click="tohidden" src="../assets/images/wallet_asset_eye@2x.png" alt="" srcset="" v-if="!hidden">
         <img class="imgs"  @click="tohidden" src="../assets/images/wallet_asset_eye_off@2x.png" alt="" srcset="" v-else>
      </div>
      <div class="home-t2">
        <span>{{hidden?'******':"8900.00"}}</span>&nbsp;{{hidden ?'******':"CNY"}}
      </div>
    </div>
    <div class="bg"></div>
    <div class="home-type">
      <div class="ht_box" @click="toroute('shoukuan')">
        <img src="../assets/images/receivables.png" alt="" srcset="">
        <div>收款</div>
      </div>
       <div class="ht_box" @click="isShowPswModal = !isShowPswModal">
        <img src="../assets/images/activation@2x.png" alt="" srcset="">
        <div>激活</div>
      </div>
       <div class="ht_box"   @click="toroute('zhuanqian')">
        <img src="../assets/images/transfer@2x.png" alt="" srcset="">
        <div>转账</div>
      </div>
    </div>
     <div class="bg"></div>
    <div class="advert">
      <div class="advert_l" @click="toroute('advertDetails')">
        <img src="../assets/images/horn@2x.png" alt="" srcset="">
        <div>11月25日RCP发布最新上币活动公告</div>
      </div>
      <div class="advert_r" @click="toroute('advert')">更多</div>
    </div>
    <div class="jiuo">
      <img src="../assets/images/not_active@2x.png" alt="" srcset="" v-if="!isjihuo">
      <img src="../assets/images/phine_active@2x.png" alt="" srcset="" v-else>
      <div class="jiho_r">
        <div class="t">{{!isjihuo ?'未激活':'已激活'}}</div>
        <div class="last">{{!isjihuo ?'您需要寻找一位伙伴协助您激活地址，才能使用DAPP':'您可以畅游RCP，并使用您喜欢的DAPP功能。'}}</div>
      </div>
    </div>
    <r-modal title="激活地址"
        @on-ok="submitPsw"
        :show="isShowPswModal"
        @on-cancel="isShowPswModal = false">
      <div class="inp-password">
          <input type="password" placeholder="请输入激活地址">
      </div>
  </r-modal>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      hidden: false,
      isjihuo: false,
      isShowPswModal:false
    };
  },
  methods: {
    submitPsw(){
      this.isShowPswModal =false;
      this.isjihuo =true;
    },
    changeAddrModal() {
      this.isShowModal = true;
    },
    tohidden() {
      this.hidden = !this.hidden;
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
// xm start
.home {
  .hometou {
    height: 200px;
    width: 100%;
    background: url("../assets/images/home_bj_1@2x.png");
    background-repeat: no-repeat;
    background-size: cover;
    .home-l {
      padding: 40px 15px 20px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: $color1;
      font-size: 16px;
      .imgs {
        width: 30px;
        height: 30px;
      }
    }
    .home-t2 {
      margin: 0 15px 0 30px;
      font-size: 24px;
      color: $color1;
      font-weight: bold;
      span {
        font-size: 46px;
        color: $white;
      }
    }
  }
  .bg {
    height: 2px;
    border-radius: 10px 10px 0px 0px;
    background-image: linear-gradient(
      270deg,
      rgba(0, 194, 143, 1) 0%,
      rgba(0, 194, 143, 0) 100%
    );
  }
  .home-type {
    width: 100%;
    display: flex;
    height: 125px;
    background: url("../assets/images/home_bj_2@2x.png");
    justify-content: space-around;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    .ht_box {
      font-size: 12px;
      color: $color1;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
  .advert {
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 15px;
    border-radius: 24px;
    border: 1px solid $border2;
    background: rgba(50, 54, 69, 1);
    height: 50px;
    padding: 0 15px;
    .advert_l {
      color: $white;
      display: flex;
      align-items: center;
      width: 84%;
      height: 50px;
      font-size: 14px;
      white-space: nowrap;
      line-height: 50px;
      div {
        overflow-y: scroll;
      }
      img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }
    .advert_r {
      color: $color1;
      font-size: 14px;
    }
    .advert_r:hover {
      color: $active;
    }
  }
  .jiuo {
    margin: 0 15px;
    background: $border2;
    border-radius: 5px;
    display: flex;
    padding: 20px 15px;
    img {
      width: 40px;
      height: 70px;
      margin-right: 15px;
    }
    .jiho_r {
      display: inline-block;
      .t {
        font-size: 16px;
        font-weight: bold;
        color: $white;
        margin-bottom: 10px;
      }
      .last {
        color: $color1;
        font-weight: 14px;
      }
    }
  }
}
</style>

