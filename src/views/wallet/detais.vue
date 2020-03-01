<template>
    <section class="detais">
        <Header title="提币详情" ></Header>
        <load v-if="loadState"></load>
        <section v-else>
            <div class="t4">提币&nbsp;200&nbsp;RCP</div>
            <div class="text2">支出</div>
            <div class="text3 text4">
                -{{detials.amount.$numberDecimal?detials.amount.$numberDecimal:''}} {{detials.symbol?detials.symbol:''}}，余额：8600.0000 {{detials.symbol}}
            </div>
               <div class="text2">转出地址</div>
                <div class="text3" >
                    {{detials.from ?detials.from:'暂无地址'}}
                </div>
           <div class="text2">创建时间</div>
            <div class="text3">{{detials.time?detials.time:''}}</div>
        </section>
    </section>
</template>
<script>
export default {
  name: "detais",
  data() {
    return {
      loadState: false,
      item: {
        type: "payment"
      },
      detials:{}
    };
  },
  watch: {},
  mounted() {
    this.detials =this.$route.query.detials || {}
      console.log(this.detials)
      console.log(this.$route.query.detials)
    console.log(this.detials['amount'])
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
  .t4{
      padding: 15px 0;
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
  .text4{
    text-transform: uppercase;
  }
}
</style>

