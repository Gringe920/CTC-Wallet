<template>
    <section class="acceptCoin">
        <Header :title="$t(`wallet.jilu`)" :leftEv="leftEv"></Header>
        <div class="acceptCoin_type">
            <div    :class="activeIdx == 0 ? 'divactive' : '' "  @click="changetype(0)">提币</div>
            <div   :class="activeIdx == 1 ? 'divactive' : '' "  @click="changetype(1)">充币</div>
        </div>
        <!-- 提币 -->
        <div class="zhuaninfo">
            <load v-if="loadState"></load>
            <div class="zhuan" v-for="item in depositHistory" :key="item.type" @click="todetails(item)">
                <div class="top">
                    2019/09/01
                </div>
                <template v-if="activeIdx == 0">
                    <div class="center">
                        <div>
                            提币:&nbsp;{{item.amount.$numberDecimal?item.amount.$numberDecimal:''}}&nbsp; {{item.symbol?item.symbol:''}}
                        </div>
                        <img src="../../assets/images/next_black@2x.png" alt srcset />
                    </div>
                    <div class="last">01/03 &nbsp;23:20</div>
                </template>
                  <template v-if="activeIdx == 1">
                    <div class="center">
                        <div>
                            充币:&nbsp;{{item.amount.$numberDecimal?item.amount.$numberDecimal:''}}&nbsp; {{item.symbol?item.symbol:''}}
                        </div>
                        <img src="../../assets/images/next_black@2x.png" alt srcset />
                    </div>
                    <div class="last">01/03 &nbsp;23:20</div>
                </template>
           
            </div>
        </div>
        <!-- 充币 -->
    </section>
</template>
<script>
export default {
  name: "acceptCoin",
  data() {
    return {
      //0 提币 1 充币
      activeIdx: this.$route.query.type || 0,
      list: [
        {
          id: 1,
          type: "payment"
        },
        {
          id: 1,
          type: "payment"
        }
      ],
      loadState: false,
      routerNum: 0,
      liststatus: false,
      coin: "usdt",
      depositHistory: {}
    };
  },
  watch: {},
  created() {
    this.deposit_history();
  },
  methods: {
    deposit_history() {
        console.log('-start')
      var self = this;
      if (this.liststatus) return;
      self.liststatus = true;
      var symbol = this.coin;
      this.axios({
        url: "/service/deposit_history",
        params: {
          symbol: symbol
        }
      })
        .then(res => {
          this.depositHistory = res.data.data || {};
          self.liststatus = false;
        })
        .catch(err => {
          self.liststatus = false;
          this.depositHistory = {};
        });
    },
    leftEv() {
      if (this.routerNum > 3) {
        this.$router.push("/wallet");
        return true;
      } else {
        return false;
      }
    },
    todetails(item){
      this.$router.push({
          path: "/detais",
          query: {
            detials:item
          }
        });
    },
    changetype(activeIdx) {
      if (activeIdx != this.activeIdx) {
          this.activeIdx = activeIdx
        console.log(activeIdx, this.activeIdx, "==================activeIdx");
        this.$router.push({
          path: "/acceptCoin",
          query: {
            type: activeIdx
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// xm
.acceptCoin {
  text-transform: uppercase;
  margin-bottom: 60px;
  .acceptCoin_type {
    display: flex;
    margin-top: 50px;
    background: #f9f9f9;
    justify-content: space-around;
    align-items: center;
    height: 35px;
    color: $color1;
    font-size: 14px;
    .divactive {
      height: 100%;
      line-height: 35px;
      color: $fontActive;
      border-bottom: 1px solid $fontActive;
    }
    // div:hover {
    //   color: $fontActive;
    //   line-height: 35px;
    //   border-bottom: 1px solid $fontActive;
    // }
  }
  .zhuaninfo {
    padding: 0 15px;

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
        color: $active;
        small {
          color: $active;
        }
        img {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
}
</style>
