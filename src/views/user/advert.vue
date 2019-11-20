<template>
  <section class="advert">
    <Header title="公告"></Header>
    <div v-for="item in 4" :key="item" class="advertbox" @click="toroute('advertDetails')">
      <div class="text">11月25日RCP发布最新上币活动公告</div>
      <div class="time">2018-11-18</div>
    </div>
  </section>
</template>
<script>
export default {
  name: "advert",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.advert {
  margin: 50px 0;
  .advertbox {
    padding: 20px 15px;
    border-top: 1px solid $border2;
    border-bottom: 1px solid $border2;
    .text {
      color: $white;
      font-size: 14px;
      margin-bottom: 10px;
    }
    .time {
      color: $color1;
      font-size: 12px;
    }
  }
}
</style>

