<template>
  <section class="scanning">
    <Header title="扫一扫"></Header>
    <div class="all">
      <section class="content"></section>
      <div class="erweim">
          <div class="erbox">
            <img src="../../assets/images/add_scan_white@2x(2).png" alt="" srcset="">
            <div>扫一扫</div>
          </div>
          <div class="erbox">
            <img src="../../assets/images/qr_white@2x.png" alt="" srcset="">
            <div>收付款</div>
          </div>
      </div>
    </div>
   
  </section>
</template>
<script>
export default {
  name: "scanning"
};
</script>
<style lang="scss" scoped>

body,html,#app {
  background: none !important;
}

.scanning {
  background: rgba(0, 0, 0, 0.01);
  padding-top: 50px;
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .content {
    width: 80vw;
    max-width: 400px;
    height: 80vw;
    max-height: 400px;
    background: $white;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    opacity: 0.1;
    position: relative;
  }
  .erweim {
    padding: 0 10px;
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .erbox {
      color: $color1;
      font-size: 14px;
      img {
        width: 30px;
        height: 30px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>

