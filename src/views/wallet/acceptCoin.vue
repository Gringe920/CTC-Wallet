<template>
    <section class="acceptCoin">
        <Header :title="$t(`wallet.jilu`)" :leftEv="leftEv"></Header>
        <div class="acceptCoin_type">
            <div    :class="activeIdx == 0 ? 'divactive' : '' "  @click="changetype(0)">{{$t(`wallet.wallet1`)}}</div>
            <div   :class="activeIdx == 1 ? 'divactive' : '' "  @click="changetype(1)">{{$t(`wallet.wallet2`)}}</div>
        </div>
          <load v-if="loading"></load>
        <div v-if="!loading" class="zhuaninfo">
           <Empty v-if="withdrawHistory.length <=0 && activeIdx == 0 "></Empty>
            <div class="zhuan"  v-if="activeIdx == 0  && withdrawHistory.length>0" v-for="(item,key) in withdrawHistory" :key="item.type" @click="todetails(key)">
                <div class="top">
                   {{resolvingDate(item.time)}}
                </div>
                <template>
                    <div class="center">
                        <div>
                            提币:&nbsp;{{item.amount.$numberDecimal?item.amount.$numberDecimal:''}}&nbsp; {{item.symbol?item.symbol:''}}
                        </div>
                        <img src="../../assets/images/next_black@2x.png" alt srcset />
                    </div>
                      <div class="last">{{resolvingHover(item.time)}}</div>
                </template>
           
            </div>
              <Empty v-if="depositHistory.length <=0 && activeIdx == 1"></Empty>
            <div class="zhuan"  v-if="activeIdx == 1  &&depositHistory.length >0 " v-for="(item,key) in depositHistory" :key="item.type" @click="todetails(key)">
                <div class="top">
                  {{resolvingDate(item.time)}}
                </div>
                  <template>
                    <div class="center">
                        <div>
                            充币:&nbsp;{{item.amount.$numberDecimal?item.amount.$numberDecimal:''}}&nbsp; {{item.symbol?item.symbol:''}}
                        </div>
                        <img src="../../assets/images/next_black@2x.png" alt srcset />
                    </div>
                    <div class="last">{{resolvingHover(item.time)}}</div>
                </template>
           
            </div>
        </div>
    </section>
</template>
<script>
import { mapState } from "vuex";
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
      loading: true,
      loadState: false,
      routerNum: 0,
      liststatus: false,
      withdrawStatus: false,
      coin: this.$route.query.coin || ""
    };
  },
  computed: {
    ...mapState(["depositHistory", "withdrawHistory"])
  },
  watch: {},
  created() {
    this.$store.commit("withdrawHistory", {});
    this.$store.commit("depositHistory", {});
    this.deposit_history(); //充币记录
    this.withdraw_history(); //提币记录
  },
  methods: {
    withdraw_history() {
      var self = this;
      if (this.withdrawStatus) return;
      self.withdrawStatus = true;
      var symbol = this.coin;
      this.axios({
        url: "/service/withdraw_history",
        params: {
          symbol: symbol
        }
      })
        .then(res => {
          this.$store.commit("withdrawHistory", res.data.data || {});
          self.withdrawStatus = false;
          this.loading = false;
        })
        .catch(err => {
          self.withdrawStatus = false;
          this.$store.commit("withdrawHistory", {});
          this.loading = false;
        });
    },
    deposit_history() {
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
          this.$store.commit("depositHistory", res.data.data || {});
          self.liststatus = false;
          this.loading = false;
        })
        .catch(err => {
          self.liststatus = false;
          this.$store.commit("depositHistory", {});
          this.loading = false;
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
    todetails(item) {
      this.$router.push({
        path: "/detais",
        query: {
          type: this.activeIdx,
          key: item
        }
      });
    },
    changetype(activeIdx) {
      if (activeIdx != this.activeIdx) {
        this.activeIdx = activeIdx;
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
