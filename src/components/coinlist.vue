<template>
  <div class="changcoin">
    <div class="coinsbox">
      <div class="coins">
        <div>{{$t('coin')}}</div>
      </div>
      <div
        class="coins"
        :class="item == coin ? 'coinsactive' : ''"
        v-for="(item, index) in coin_list"
        :key="index"
        @click="onItemSelect(item)"
      >
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  props: ["coin", "visible"],
  computed: {
    ...mapState(["coin_list"])
  },
  methods: {
    onItemSelect(item, idx) {
      this.$emit("onItemSelect", item, idx);
    }
  }
};
</script>

<style lang="scss" scoped>
.changcoin {
  z-index: 100;
  width: 100%;
  position: fixed;
  min-height: 100%;
  height: 100%;
  top: 50px;
  background: rgba(0, 0, 0, 0.5);
  .coinsbox {
    background:$border2;
    .coins {
      text-transform: uppercase;
      background: $border2;
      color: $color1;
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      div {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin: 0 15px;
      }
    }
    .coinsactive {
      color: $fontActive;
      font-size: 14px;
    }
  }
}
</style>