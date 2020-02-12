<template>
    <section class="detais">
        <Header title="提币详情" ></Header>
        <load v-if="loadState"></load>
        <section v-else>
            <div class="t4">提币&nbsp;200&nbsp;RCP</div>
            <div class="text2">支出</div>
            <div class="text3">
                -500 RCP，余额：8600.0000 RCP
            </div>
               <div class="text2">转出地址</div>
                <div class="text3" >
                   RKWPDQTXW3FUPZTUNVCEAUG8HEDXEX7ZWQ
                </div>
           <div class="text2">创建时间</div>
            <div class="text3">2019/01/03 08:00</div>
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
      }
    };
  },
  watch: {},
  mounted() {},
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
}
</style>

