<template>
  <section class="depth">
    <div class="top">
      <div>{{$t(`Trade.price`)}}</div>
      <div>{{$t(`wallet.zhuanqian2`)}}</div>
    </div>
    <div class="box" v-if="type != 3" :class="type !=1 ? 'addbox':''">
      <div  v-for=" item in 16" :key="item" class="boxtext">
          <div class="price up">8675.87</div> 
          <div  class="t2">0.4456</div>
      </div>
    </div>
    <div class="all" :class="type ==2 ? 'down':'up'">8673.85</div>   
    <div class="yue">=23243.23&nbsp;CNY</div>
    <div class="box" v-if="type != 2"  :class="type !=1 ? 'addbox':''">
      <div v-for=" item in 16" :key="item" class="boxtext"  >
          <div class="price down" >8675.87</div> 
          <div class="t2">0.4456</div>
      </div>
    </div>
    <div class="check">
      <div v-if="type!=1" @click="totype(1)"> <img src="../../assets/images/business@2x.png" alt="" srcset=""></div>
         <div v-if="type==1"  class="noborer"> <img src="../../assets/images/business_press@2x.png" alt="" srcset=""></div>
        <div v-if="type!=3" @click="totype(3)" ><img src="../../assets/images/night_sell@2x.png" alt="" srcset=""></div>
       <div v-if="type==3" class="noborer"><img src="../../assets/images/night_sell_press@2x.png" alt="" srcset=""></div>
        <div v-if="type==2" class="noborer"><img src="../../assets/images/night_buy_press@2x.png" alt="" srcset=""></div>
        <div v-if="type!=2" @click="totype(2)"><img src="../../assets/images/night_buy@2x.png" alt="" srcset=""></div>
    </div>
  </section>
</template>
<script>
export default {
  name: "depth",
  data(){
    return{
      type:1
    }
  },
  methods:{
    totype(index){
      this.type = index;
    }
  }
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
    color: $color1;
    margin-bottom: 10px;
  }
  .all {
    padding-top: 7px;
    font-size: 14pxx;
  }
  .yue {
    margin: 7px 0;
    color: $color1;
    font-size: 10px;
  }
  .addbox{
    height: 240px !important;
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
    padding-top: 10px;
    .noborer{
      border:none;
    }
    div{
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

