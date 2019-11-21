<template>
  <div class="container">
    <Header title="导入地址" />
    <div class="content">
      <div class="tabs">
        <div class="tab" @click="selectTab(0)" :class="{'active': activeIndex == 0}">
          助记词
          <span class="active-line" v-if="activeIndex == 0"></span>
        </div>
        <div class="tab" :class="{'active': activeIndex == 1}" @click="selectTab(1)">
          私钥
          <span class="active-line" v-if="activeIndex == 1"></span>
        </div>
      </div>
      <!-- 助记词 -->
      <div class="inputFwk" :class="{'active': activeIndex == 0}">
        <div class="input-title">请填写您的助记词</div>
        <textarea class="input-area" placeholder="英文单词请按空格分隔单词" />
      </div>
      <div class="inputFwk" :class="{'active': activeIndex == 1}">
        <div class="input-title">请输入您的私钥地址</div>
        <textarea class="input-area" placeholder="RKWPDQTXW3FUPZTUNVCEAUG8HEDXEX7ZWQ" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    selectTab(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  .content {
    margin-top: 60px;
    .tabs {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      .tab {
        font-size: 14px;
        color: #7d8398;
        position: relative;
        width: 50%;
        text-align: center;
        &.active {
          color: #00c28f;
        }
        .active-line {
          display: inline-block;
          width: 22px;
          height: 2px;
          background-color: #00c28f;
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
  .inputFwk {
    display: none;
    padding: 17px;
    .input-title {
      font-size: 14px;
      color: #7d8398;
    }
    .input-area {
      background-color: #323645;
      border: none;
      margin-top: 20px;
      height: 124px;
      outline: none;
      width: 100%;
      padding: 20px;
      font-size: 14px;
      color: white;
      overflow: hidden;
    }
    &.active {
      display: inline-block;
      width: 100%;
    }
  }
}
</style>