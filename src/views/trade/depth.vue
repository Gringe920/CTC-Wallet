<template>
  <section class="depth">
    <div class="top">
      <div>价格</div>
      <div>数量</div>
    </div>
    <div class="box">
      <div v-for=" item in 6" :key="item" class="boxtext">
          <div class="price up">8675.87</div> 
          <div  class="t2">0.4456</div>
      </div>
    </div>
    <div class="all">8673.85</div>   
    <div class="yue">=23243.23&nbsp;CNY</div>
    <div class="box">
      <div v-for=" item in 6" :key="item" class="boxtext">
          <div class="price down">8675.87</div> 
          <div class="t2">0.4456</div>
      </div>
    </div>
    <div class="check">
      <div> <img src="../../assets/images/business@2x.png" alt="" srcset=""></div>
       <div><img src="../../assets/images/night_buy@2x.png" alt="" srcset=""></div>
        <div><img src="../../assets/images/night_sell@2x.png" alt="" srcset=""></div>
     
      
      
    </div>
  </section>
</template>
<script>
export default {
  name: "depth"
};
</script>
<style lang="scss" scoped>
.depth {
  vertical-align: text-top;
  width: 50%;
  color: $white;
  display: inline-block;
  padding: 0 15px;
  font-size: 12px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
    color: $color3;
    margin-bottom: 10px;
  }
  .all {
    margin-top: 7px;
    color: $up;
    font-size: 14pxx;
  }
  .yue {
    margin: 7px 0;
    color: $color3;
    font-size: 10px;
  }
  .box {
    height: 120px;

    overflow-y: scroll;
    .boxtext {
      height: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      //  padding: 6px 0;
      .t2 {
        color: $color1;
      }
    }
  }
  .check{
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    div{
      border: 1px dashed $color1;

      width: 15px;
      height: 15px;
      margin-left: 15px;
      img{
        width: 100%;
        height: 100%;;
      }
    }
  }
}
</style>

