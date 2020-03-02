<template>
  <section>
    <div class="header">
      <span>订单</span>
      <span class="publish" @click="toRoute('publish')">发布</span>
    </div>
    <div class="nav-tag">
      <ul class="nav-li">
        <li :class="{'active': navIndex == 0}" @click="changeNavIndex(0)">我发布的</li>
        <li :class="{'active': navIndex == 1}" @click="changeNavIndex(1)">未完成</li>
        <li :class="{'active': navIndex == 2}" @click="changeNavIndex(2)">已完成</li>
        <li :class="{'active': navIndex == 3}" @click="changeNavIndex(3)">已取消</li>
        <li :class="{'active': navIndex == 4}" @click="changeNavIndex(4)">已申诉</li>
      </ul>
    </div>
    <div class="order-listbox">
    <!-- 0我发布 -->
    <div class="order-list" v-if="navIndex == 0" v-for="item in UserPendList" :key="item">
      <div class="box published">
        <div class="box-h">
          <div class="coin">
            <span class="icon" :class="item.type==1?'':'sell'" >{{item.type==1?'买':'卖'}}</span>
            <span>{{item.symbol}}</span>
          </div>
          <div class="kill-order" @click="pend_cancel(item._id)">撤单</div>
        </div>
        <div class="line"></div>
        <div class="box-c">
          <div class="c-item">
            <p class="i-t">委托价格</p>
            <p>{{item.price}} CNY</p>
          </div>
          <div class="c-item">
            <p class="i-t">委托数量</p>
            <p>{{item.amount.$numberDecimal}}</p>
          </div>
          <div class="c-item">
            <p class="i-t">已成交数量</p>
            <p>0.000000</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 1未完成 -->
    <div class="order-list" v-if="navIndex == 1" @click="toRoute('Orderstatus')">
      <div class="box unfinish">
        <div class="box-h">
          <div class="coin">
            <span class="icon">买</span>
            <span>USDT</span>
          </div>
          <div class="h-tips">待打款</div>
        </div>
        <div class="line"></div>
        <div class="box-c-h">
          <div class="c-row order-money">
            交易金额：6890 CNY
          </div>
          <div class="c-row">
            商家信息：风轻云淡
          </div>
          <div class="c-row">
            转账备注：368888
          </div>
          <div class="c-row">
            创建时间：2019/02/01 08:30:00
          </div>
        </div>
      </div>
      <div class="box unfinish">
        <div class="box-h">
          <div class="coin">
            <span class="icon sell">卖</span>
            <span>USDT</span>
          </div>
          <div class="h-tips red">待打款</div>
        </div>
        <div class="line"></div>
        <div class="box-c-h">
          <div class="c-row order-money">
            交易金额：6890 CNY
          </div>
          <div class="c-row">
            商家信息：风轻云淡
          </div>
          <div class="c-row">
            转账备注：368888
          </div>
          <div class="c-row">
            创建时间：2019/02/01 08:30:00
          </div>
        </div>
      </div>
    </div>
    <!-- 已完成 -->
    <div class="order-list" v-if="navIndex == 2">
      <div class="box finished">
        <div class="box-h">
          <div class="coin">
            <span class="icon">买</span>
            <span>USDT</span>
          </div>
          <div class="h-tips">已完成</div>
        </div>
        <div class="line"></div>
        <div class="box-c-h">
          <div class="c-row order-money">
            交易金额：6890 CNY
          </div>
          <div class="c-row">
            商家信息：风轻云淡
          </div>
          <div class="c-row">
            转账备注：368888
          </div>
          <div class="c-row">
            创建时间：2019/02/01 08:30:00
          </div>
        </div>
      </div>
    </div>
    </div>

  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      navIndex: 0, // 0我发布  1未完成  2已完成 3已取消 4已申诉
      submitStatus: false,
      pend_cancelstatus: false
    };
  },
  mounted() {
    this.getUserPendList();
  },
  computed: {
    ...mapState(["user", "UserPendList"])
  },
  methods: {
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
          this.$toast.show("取消挂单成功!");
          this.getUserPendList();
        })
        .catch(err => {
          self.pend_cancelstatus = false;
          this.$toast.show({
            msg: err.message || "取消挂单失败，请重试"
          });
        });
    },
    getUserPendList() {
      var self = this;
      if (this.submitStatus) return;
      self.submitStatus = true;
      this.axios({
        url: "/c2c/getUserPendList",
        params: {}
      })
        .then(res => {
          self.submitStatus = false;
          this.$store.commit("UserPendList", res.data || {});
          this.$toast.show("挂单列表获取成功!");
        })
        .catch(err => {
          self.submitStatus = false;
          this.$store.commit("UserPendList", {});
          this.$toast.show({
            msg: err.message || "挂单列表获取失败，请重试"
          });
        });
    },
    changeNavIndex(idx) {
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