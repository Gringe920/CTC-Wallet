<template>
  <section class="empty">
    <div class="imgbox">
         <img src="../assets/images/blank_page@2x.png" alt="" srcset="">
    </div>
    <div class="text">暂无数据</div>
  </section>
</template>
<script>
export default {
  name:'empty'
}
</script>
<style lang="scss" scoped>
.empty{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  color: $color1;
  .imgbox{
    width: 80px;
    height: 80px;
    display: flex;
    justify-content:center;
    align-items: center;
    margin-bottom: 10px;
    border: 1px dashed $color1;
    img{
      width: 80px;
      height: 80px;
    }
  }
}
</style>
