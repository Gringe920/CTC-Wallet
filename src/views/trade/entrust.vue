<template>
  <section class="entrust">
    <div class="nav">
      <div class="nav-l">{{$t(`Trade.weituo`)}}</div>
      <div class="nav-r"  @click="toRoute('lastOrder')">
        <img src="../../assets/images/transaction_record@2x.png" alt="" srcset="">
        <span>{{$t(`Trade.nojilu`)}}</span>
      </div>
    </div>
    <div class="content">
      <Empty v-if="false"></Empty>
      <div class="detais" v-for="item in 4" :key="item">
        <div class="t">
          <div class="t_l">
            <span class="type">{{$t(`Trade.canbuy`)}}</span>
            <span class="coin">BTC/USDT</span>
            <span class="time">10/01 58:00</span>
          </div>
          <div class="t_r">
            {{$t(`Trade.cexiaoing`)}}
          </div>
        </div>
        <div class="c">
          <div class="textbox">
            <div class="text1">{{$t(`Trade.price`)}}(USDT)</div>
            <div class="tet2">0.000000</div>
          </div>
           <div class="textbox textbox2">
            <div class="text1">{{$t(`wallet.zhuanqian2`)}}(USDT)</div>
            <div class="tet2">0.000000</div>
          </div>
           <div class="textbox textbox3">
            <div class="text1">{{$t(`Trade.chengjiao`)}}(BTC)</div>
            <div class="tet2">0.000000</div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "entrust",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.entrust {
  margin-top: 20px;
  border-top: 5px solid $nav-bg;
  padding: 0 15px;
  .nav {
    padding: 15px 0;
    border-bottom: 1px solid $nav-bg;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-l {
      color: $white;
      font-size: 16px;
    }
    .nav-r {
      display: flex;
      align-items: center;
      img {
        width: 14px;
        height: 14px;
        margin-right: 5px;
      }
      color: $color3;
      font-size: 14px;
    }
  }
  .content {
    margin-bottom: 20px;
    .detais {
      padding: 15px 0;
      border-bottom: 1px solid $border;
      .t {
        padding-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .t_l {
          font-size: 14px;
          .type {
            color: $active;
          }
          .coin {
            color: $white;
            padding-left: 5px;
          }
          .time {
            color: $color3;
            font-size: 12px;
            padding-left: 5px;
          }
        }
        .t_r {
          padding: 5px 10px;
          text-align: center;
          font-size: 12px;
          background: $bg6;
          border-radius: 2px;
          color: $active;
        }
      }
      .c {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .textbox3 {
          text-align: right;
        }
        .textbox2 {
          // text-align: center;
        }
        .textbox {
          width: 33%;
          font-size: 12px;
          .text1 {
            color: $color3;
            padding-bottom: 5px;
          }
          .tet2 {
            color: $white;
          }
        }
      }
    }
  }
}
</style>
