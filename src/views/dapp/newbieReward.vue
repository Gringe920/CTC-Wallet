<template>
  <section class="newbie-reward">
    <Header title color='none' />
    <div class="banner">
      <img src="../../assets/images/award_bj@2x.png" alt class="bg" />
      <div class="title">新人奖</div>
    </div>
    <div class="content">
      <div class="highlight"></div>
      <RankList iconFlag="newbie" title="获奖名单" :list="list" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          address: "DSJDS82HBW34533FS34",
          power: "86000800"
        },
        {
          address: "DSJDS82HBW34533FS34",
          power: "86000800"
        },
        {
          address: "DSJDS82HBW34533FS34",
          power: "86000800"
        },
        {
          address: "DSJDS82HBW34533FS34",
          power: "86000800"
        },
        {
          address: "DSJDS82HBW34533FS34",
          power: "86000800"
        },
        {
          address: "DSJDS82HBW34533FS34",
          power: "86000800"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.newbie-reward {
  .banner {
    position: relative;
    overflow: hidden;
    img.bg {
      width: 100%;
    }
    .title {
      color: #e5e6ff;
      font-size: 26px;
      font-weight: 600;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .content {
    background-color: $border2;
    margin: 15px;
    padding: 0 15px 15px;
    border-radius: 5px;

    .highlight {
      background: linear-gradient(
        270deg,
        rgba(0, 194, 143, 0) 0%,
        rgba(0, 194, 143, 1) 100%
      );
      border-radius: 5px 5px 0px 0px;
      height: 5px;
      margin: 0 -15px 15px -15px;
    }
  }
}
</style>