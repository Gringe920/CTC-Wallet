<template>
  <section class="shoukuan">
    <Header title="收款码" :rightEv='toacceptCoin' :rightIcon="require('../../assets/images/record@2x.png')"></Header>
    <div class="content">
      <div class="erwema">
        <img src="../../assets/images/erweima.png" alt="" srcset="">
      </div>
      <div class="adderss">{{address}}</div>
      <div class="copy">点击可复制</div>
    </div>
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
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "shoukuan",
  data(){
    return{
      address:'RKWPDQTXW3FUPZTUNVCEAUG8HEDXEX7ZWQ',
    }
  },
  mounted(){
  },
  computed: {
    ...mapState('showNav')
  },
  methods: {
    toacceptCoin() {
      this.$router.push({ path: "/acceptCoin" });
    }
  }
};
</script>
<style lang="scss" scoped>
.shoukuan{
  margin:50px 0;
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  .content{
      margin: 50px 5% 0 5%; 
    width:90vw;
    max-width: 400px;
    // height: 70vh;
    height: 400px;
    overflow: hidden;
    background:url("../../assets/images/qr_bj@2x(1).png");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .erwema{
      margin-top: 45px;
      img{
        width:220px;
        height:220px;
      }
    }
    .adderss{
      margin: 0 30px;
      overflow: hidden;
      margin-top: 70px;
      text-align: center;
    }
    .copy{
     margin-top: 10px;
      font-size:12px;
      text-align: center;
      font-weight:400;
      color:$active;
    }

  }
  .erweim{
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    .erbox{
      color: $color1;
      font-size: 14px;
      img{
        width: 44px;height: 44px;
        margin-bottom: 10px;
      }
    }

  }
}
</style>
