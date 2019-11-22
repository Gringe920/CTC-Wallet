<template>
  <section class="lastOrder">
    <Header title="历史记录"></Header>
     <div class="detais" v-for="item in 5" :key="item">
        <div class="t">
          <div class="t_l">
            <span class="type">买入</span>
            <span class="coin">BTC/USDT</span>
          </div>
          <div class="t_r">
            全部成交
          </div>
        </div>
        <div class="c">
          <div class="textbox">
            <div class="text1">时间</div>
            <div class="tet2">19/01 08：00</div>
          </div>
           <div class="textbox textbox2">
            <div class="text1">委托价格</div>
            <div class="tet2">0.000000</div>
          </div>
           <div class="textbox textbox3">
            <div class="text1">委托数目</div>
            <div class="tet2">0.000000</div>
          </div>
        </div>
         <div class="c">
          <div class="textbox">
            <div class="text1">成交量</div>
            <div class="tet2">2.50000</div>
          </div>
           <div class="textbox textbox2">
            <div class="text1">为成交量</div>
            <div class="tet2">0.000000</div>
          </div>
           <div class="textbox textbox3">
            <div class="text1">成交总额</div>
            <div class="tet2">0.000000</div>
          </div>
        </div>

      </div>
  </section>
</template>
<style lang="scss" scoped>
.lastOrder {
  padding: 50px 15px;
  .detais {
    padding: 15px 0;
    border-bottom: 1px solid $border;
    .t {
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
        color: $white;
        font-size: 12px;
      }
    }
    .c {
      padding-top: 10px;
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
</style>

