<template>
  <section>
    <Header title="关于我们" />
    <div class="container">
      <img src="../../assets/images/about_logo@2x.png" class="about-logo" alt />
      <div class="version">版本号1.0.0</div>
      <div class="line"></div>
      <div class="info-box">
        <span>CTC介绍</span>
        <div class="turn-right">
          <i></i>
        </div>
      </div>
      <div class="line"></div>
      <div class="info-box">
        <span>当前版本</span>
        <div class="turn-right">
          <span>已是最新版本</span>
          <i></i>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 50px;
  margin: 0 15px;
  text-align: center;
  .about-logo {
    margin-top: 26px;
    width: 21.8%;
  }
  .version {
    font-size: 13px;
    color: #97a2af;
    margin-top: 8px;
    margin-bottom: 30px;
  }
  .line {
    background-color: #f2f2f2;
    height: 1px;
    width: 100%;
  }
  .info-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 14px;
      padding: 17px 0;
    }
    .turn-right {
      span {
        font-size: 12px;
        color: $color1;
      }

      i {
        display: inline-block;
        width: 10px;
        background-size: 100% 100%;
        background-image: url("../../assets/images/next_black@2x.png");
        height: 10px;
        margin-left: 7px;
        vertical-align: middle;
      }
    }
  }
}
</style>
