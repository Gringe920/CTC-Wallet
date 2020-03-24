<template>
    <section class="detais">
        <Header :title="type == 0?'提币详情':'充币详情'" ></Header>
        <load v-if="loadState"></load>
        <section v-else>
            <div class="t4">{{type == 0?'提币':'充币'}}&nbsp;200&nbsp;{{detials.symbol}}</div>
            <div class="text2">{{type == 0?'支出':'收入'}}</div>
            <div class="text3 text4">
         
                -{{detials.amount.$numberDecimal?detials.amount.$numberDecimal:''}} {{detials.symbol?detials.symbol:''}}，余额：8600.0000 {{detials.symbol}}
            </div>
               <div class="text2">{{type == 0?'转出地址':'转入地址'}}</div>
                <div class="text3" v-if="type == 1">
                    {{detials.from ?detials.from:'暂无地址'}}
                </div>
                  <div class="text3" v-if="type == 0">
                    {{detials.to ?detials.to:'暂无地址'}}
                </div>
           <div class="text2">创建时间</div>
            <div class="text3">{{detials.time?resolvingDate3(detials.time):''}}</div>
        </section>
    </section>
</template>
<script>
import { mapState } from "vuex";
import { constants } from "fs";
export default {
  name: "detais",
  data() {
    return {
      loadState: true,
      item: {
        type: "payment"
      },
      detials: {},
      type: this.$route.query.type || 0
    };
  },
  watch: {},
  computed: {
    ...mapState(["depositHistory", "withdrawHistory"])
  },
  mounted() {
    var key = this.$route.query.key || "";
    if (this.type == 0) {
      this.detials = this.withdrawHistory[this.$route.query.key];
      this.loadState = false;
    } else {
      this.detials = this.depositHistory[this.$route.query.key];
      this.loadState = false;
    }
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.detais {
  overflow: hidden;
  padding: 50px 15px 0 15px;

  .text2 {
    font-size: 12px;
    color: $color1;
    padding: 10px 0;
    word-wrap: break-word;
  }
  .t4 {
    padding: 15px 0;
    text-transform: uppercase;
  }
  .text {
    color: $active;
    font-size: 14px;
    padding: 15px 0;
    border-top: 1px solid $border;
    border-bottom: 1px solid $border;
    word-wrap: break-word;
  }
  .text3 {
    padding-bottom: 10px;
    color: $active;
    font-size: 14px;
    width: 100%;
    word-wrap: break-word;
  }
  .text4 {
    text-transform: uppercase;
  }
}
</style>

