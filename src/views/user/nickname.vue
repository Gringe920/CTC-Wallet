<template>
  <section>
    <Header title="昵称" />
    <div class="container">
      <div class="content">
        <input class="nickname" type="text" />
        <div class="line"></div>
      </div>
      <r-button text="确定" width="90%" class="comfirm" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
  height: 100%;
  .content {
    position: relative;
    margin: 0 15px;
  }
  input.nickname {
    font-size: 14px;
    padding: 15px 0;
  }
  .line {
    background-color: #f2f2f2;
    height: 1px;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .comfirm {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>