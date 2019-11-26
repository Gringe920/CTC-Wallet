<template>
  <section class="acceptCoin">
    <Header title="记录"></Header>
    <div class="acceptCoin_type">
      <div
        :class="idx == activeIdx ? 'divactive' : '' "
        @click="changetype(idx)"
        v-for="(item, idx) in typeArr"
        :key="idx"
      >{{item}}</div>
    </div>
    <!-- 收款 -->
    <div class="zhuaninfo">
      <div class="zhuan" v-for="item in 4" :key="item" @click="toroute('/detais/'+activeIdx)">
        <div class="top">
          <img src="../../assets/images/night_record_time@2x.png" alt srcset />
          2019/01
        </div>
        <div class="center">
          <div><span v-if="activeIdx==2">BTC</span>{{activeIdx==0 ?"收款":activeIdx==1? "转出":"兑换"}}500RPC</div>
          <img src="../../assets/images/triangle@2x.png" alt srcset />
        </div>
        <div class="last">12/30 &nbsp;22:30</div>
      </div>
    </div>
    <!-- 兑换 -->
  </section>
</template>
<script>
export default {
  name: "acceptCoin",
  data() {
    return {
      //0 收款 1 转账 2 兑换
      activeIdx: this.$route.query.type,
      typeArr: ["收款", "转账", "兑换"]
    };
  },
  methods: {
    changetype(index) {
      this.activeIdx = index;
  
    }
  }
};
</script>

<style lang="scss" scoped>
// xm
.acceptCoin {
  margin-bottom: 60px;
  .acceptCoin_type {
    display: flex;
    margin-top: 50px;
    justify-content: space-around;
    align-items: center;
    background: $nav-bg;
    height: 35px;
    color: $color1;
    font-size: 14px;
    .divactive {
      height: 100%;
      line-height: 35px;
      color: $active;
      border-bottom: 1px solid $active;
    }
    div:hover {
      color: $active;
      line-height: 35px;
      border-bottom: 1px solid $active;
    }
  }
  .zhuaninfo {
    .zhuan {
      color: $color1;
      padding: 15px;
      font-size: 12px;
      border-bottom: 1px solid $border;
      .top {
        margin-bottom: 10px;
        img {
          width: 12px;
          height: 12px;
          margin-right: 5px;
        }
      }
      .center {
        margin-bottom: 7px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        color: $white;
        img {
          width: 8px;
          height: 8px;
        }
      }
    }
  }
}
</style>
