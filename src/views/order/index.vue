<template>
  <section class="order-box">
    <load v-if="loading"></load>
    <div class="header">
      <span>{{$t('order.title')}}</span>
      <span class="publish" @click="toRoute('publish')">{{$t('ctc.publish')}}</span>
    </div>
    <div class="nav-tag">
      <ul class="nav-li">
        <li :class="{'active': navIndex == -1}" @click="changeNavIndex(-1)">{{$t('order.nav0')}}</li>
        <li :class="{'active': navIndex == 0}" @click="changeNavIndex(0)">{{$t('order.nav1')}}</li>
        <li :class="{'active': navIndex == 1}" @click="changeNavIndex(1)">{{$t('order.nav2')}}</li>
        <li :class="{'active': navIndex == 2}" @click="changeNavIndex(2)">{{$t('order.nav3')}}</li>
        <li :class="{'active': navIndex == 4}" @click="changeNavIndex(4)">{{$t('order.nav4')}}</li>
      </ul>
    </div>
    <div class="order-listbox" v-if="(UserPendList.length > 0 || orderList.length > 0)">
    <!-- 0我发布 -->
      <div class="order-list" v-if="navIndex == -1 && !loading" v-for="item in UserPendList" :key="item._id">  
        <div class="box published">
          <div class="box-h">
            <div class="coin">
              <span class="icon" :class="item.type==1?'sell':''" >{{item.type == 1?$t('order.sell'):$t('order.buy')}}</span>
              <span>{{item.symbol.toUpperCase()}}</span>
            </div>
            <div class="kill-order" @click="pend_cancel(item._id)">{{$t('order.cancel')}}</div>
          </div>
          <div class="line"></div>
          <div class="box-c">
            <div class="c-item">
              <p class="i-t">{{$t('order.price')}}</p>
              <p>{{item.price}} CNY</p>
            </div>
            <div class="c-item">
              <p class="i-t">{{$t('order.amount')}}</p>
              <p>{{item.amount && item.amount.$numberDecimal}}</p>
            </div>
            <div class="c-item">
              <p class="i-t">{{$t('order.deals')}}</p>
              <p>{{item.deals}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 1未完成 -->
      <div class="order-list" v-if="navIndex != -1" @click="getOrderList(navIndex)">
        <div class="box unfinish" v-for="(item, index) in orderList" :key="index" @click="goResult(item)">
          <div class="box-h">
            <div class="coin">
              <span class="icon" :class="item.buyer === user.basicInfo.uid ? 'sell' : ''" >{{item.buyer === user.basicInfo.uid ? $t('order.buy'):$t('order.sell')}}</span>
              <span>{{item.symbol.toUpperCase()}}</span>
            </div>
            <div class="h-tips" v-if="item.status == 0">{{$t('order.wait')}}{{item.buyer === user.basicInfo.uid ? '' : $t('order.other')}}{{$t('order.giveM')}}</div>
            <div class="h-tips" v-if="item.status == 1">{{$t('order.nav2')}}</div>
            <div class="h-tips" v-if="item.status == 2">{{item.buyer === user.basicInfo.uid ? '' :  $t('order.other')}}{{$t('order.nav3')}}</div>
            <div class="h-tips" v-if="item.status == 4">{{item.buyer === user.basicInfo.uid ? '' :  $t('order.other')}}{{$t('order.status0')}}</div>
            <div class="h-tips" v-if="item.status == 3">{{item.buyer === user.basicInfo.uid ?  $t('order.status1') : $t('order.status2')}}</div>

          </div>
          <div class="line"></div>
          <div class="box-c-h">
            <div class="c-row order-money">
              {{$t('order.tradePrice')}}：{{item.amount && item.amount.$numberDecimal * item.price || 0}} CNY
            </div>
            <div class="c-row">
              {{$t('order.seller')}}：{{item.seller_name || item.seller}}
            </div>
            <div class="c-row">
             {{$t('order.code')}}：{{item.code}}
            </div>
            <div class="c-row">
              {{$t('order.time')}}：{{item.time}}
            </div>
          </div>
        </div>
      </div>
      <empty v-if="isShowEmpty && !loading" />
    </div>
    
    
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      navIndex: -1, // 3我发布  0未完成  1已完成 2已取消 4已申诉
      submitStatus: false,
      pend_cancelstatus: false,
      orderList: [],
      isShowEmpty: false,
      loading: false
    };
  },
  mounted() {
    this.getUserPendList();
  },
  computed: {
    ...mapState(["user", "UserPendList"])
  },
  methods: {
    goResult(item){
      this.$store.commit('order_detail', item);
      if(item.status === 0 || item.status === 3){
        this.$router.push({
          path: item.buyer === this.user.basicInfo.uid ? '/buyResult' : '/sellResult'
        })
      }else{
        this.$router.push({
          path: '/status'
        });
      }
    },
    clear(){
      this.orderList = [];
      this.isShowEmpty = false;
    },
    getOrderList(status){
      this.loading = true;
      let appendParams = '';
      if(status === 0) appendParams = '&status=3'
      this.axios({
        url: `/c2c/getOrderList?status=${status}${appendParams}`,
      })
        .then(res => {
          if(res.error_code === 0){
            if(res.data.length > 0){
              this.orderList = res.data.filter(item => item.seller === this.user.basicInfo.uid || item.buyer === this.user.basicInfo.uid);
            }
            this.isShowEmpty = this.orderList.length === 0;
            this.loading = false
          }
        })
        .catch(err => {
          this.isShowEmpty = true;
          this.$toast.show(err.message || this.$t('order.toast0'));
          this.loading = false
        });
    },
    pend_cancel(id) {
      var self = this;
      if (this.pend_cancelstatus) return;
      self.pend_cancelstatus = true;
      this.axios({
        url: "/c2c/pend_cancel",
        params: {
          pend_id: id
        }
      })
        .then(res => {
          self.pend_cancelstatus = false;
          this.$toast.show(this.$t('order.toast1'));
          this.getUserPendList();
        })
        .catch(err => {
          self.pend_cancelstatus = false;
          this.$toast.show(err.message || this.$t('order.toast2'));
        });
    },
    getUserPendList() {
      var self = this;
      if (this.submitStatus) return;
      self.submitStatus = true;
      this.loading = true;
      this.axios({
        url: "/c2c/getUserPendList",
        params: {}
      })
        .then(res => {
          self.submitStatus = false;
          this.$store.commit("UserPendList", res.data.list || {});
          this.loading = false;
          // this.$toast.show("挂单列表获取成功!");
        })
        .catch(err => {
          self.submitStatus = false;
          this.$store.commit("UserPendList", {});
          this.$toast.show(err.message || this.$t('order.toast3'));
          this.loading = false;
        });
    },
    changeNavIndex(idx) {
      this.clear();
      if(idx != -1){
        this.getOrderList(idx);
      }
      this.navIndex = idx;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  background-color: #f9f8fd;
  height: 100%;
  position: relative;
  .header {
    text-align: center;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #fff;
    span {
      font-size: 18px;
      line-height: 50px;
    }
    .publish {
      font-size: 14px;
      color: #1771ed;
      position: absolute;
      right: 15px;
    }
  }
  .nav-tag {
    background-color: #fff;
    position: fixed;
    top: 50px;
    width: 100%;
    box-shadow: 0px 10px 14px -10px rgba(30, 49, 107, 0.1);
    .nav-li {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #97a2af;
      padding: 12px 0;
      justify-content: space-around;
      li.active {
        color: #1771ed;
        position: relative;
      }
      li.active:after {
        content: "";
        display: inline-block;
        width: 28px;
        height: 2px;
        background-color: #1771ed;
        position: absolute;
        bottom: -12px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .order-listbox {
    margin-top: 100px;
    margin-bottom: 60px;
    .order-list {
      margin: 15px;
      .box {
        background-color: #fff;
        box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.03);
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 15px;
        margin-bottom: 15px;
        .box-h {
          display: flex;
          padding: 0 0 15px;
          justify-content: space-between;
          align-items: center;
          .coin {
            font-size: 13px;
            .icon {
              display: inline-block;
              width: 23px;
              height: 23px;
              border-radius: 23px;
              font-size: 13px;
              color: #fff;
              background-color: #ff615d;
              line-height: 23px;
              text-align: center;
              margin-right: 8px;
              &.sell {
                background-color: #00b07c;
              }
            }
          }
          .kill-order {
            font-size: 12px;
            color: #1771ed;
            border-radius: 2px;
            border: 1px solid rgba(23, 113, 237, 1);
            padding: 0 10px;
            height: 20px;
            line-height: 15px;
          }
          .h-tips {
            font-size: 13px;
            color: #97a2af;
            &.red {
              color: #ff615d;
            }
            &.green {
              color: #00b07c;
            }
          }
        }
        .box-c {
          display: flex;
          font-size: 12px;
          justify-content: space-between;
          margin-top: 15px;
          .c-item {
            text-align: center;
            .i-t {
              padding-bottom: 10px;
              color: #97a2af;
            }
          }
        }
        .box-c-h {
          .c-row {
            margin-bottom: 8px;
            color: #97a2af;
            font-size: 14px;
          }
          .order-money {
            font-size: 16px;
            color: #1771ed;
            margin-bottom: 10px;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>