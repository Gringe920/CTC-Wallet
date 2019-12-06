<template>
  <section class="lastOrder">
    <Header :title="$t(`Trade.nojilu`)"></Header>
     <div class="detais" v-for="item in 5" :key="item">
        <div class="t">
          <div class="t_l">
            <span class="type">{{$t(`Trade.canbuy`)}}</span>
            <span class="coin">BTC/USDT</span>
          </div>
          <div class="t_r">
            {{$t(`Trade.allchengjiao`)}}
          </div>
        </div>
        <div class="c">
          <div class="textbox">
            <div class="text1">{{$t(`Trade.time`)}}</div>
            <div class="tet2">19/01 08：00</div>
          </div>
           <div class="textbox textbox2">
            <div class="text1">{{$t(`Trade.entrusetprice`)}}</div>
            <div class="tet2">0.000000</div>
          </div>
           <div class="textbox textbox3">
            <div class="text1">{{$t(`Trade.entrustnum`)}}</div>
            <div class="tet2">0.000000</div>
          </div>
        </div>
         <div class="c">
          <div class="textbox">
            <div class="text1">{{$t(`Trade.volume`)}}</div>
            <div class="tet2">2.50000</div>
          </div>
           <div class="textbox textbox2">
            <div class="text1">{{$t(`Trade.weifinsied`)}}</div>
            <div class="tet2">0.000000</div>
          </div>
           <div class="textbox textbox3">
            <div class="text1">{{$t(`Trade.finished`)}}</div>
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
          color: $color1;
          padding-left: 5px;
        }
        .time {
          color: $color1;
          font-size: 12px;
          padding-left: 5px;
        }
      }
      .t_r {
        color: $active;
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
          color: $color1;
          padding-bottom: 5px;
        }
        .tet2 {
          color: $active;
        }
      }
    }
  }
}
</style>

