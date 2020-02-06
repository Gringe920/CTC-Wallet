<template>
  <section class="addressall">
     <Header title="选择提币地址" :rightEv='toacceptCoin' :rightIcon="require('../../assets/images/record_black@2x.png')"></Header>
     <div class="addresBox" v-for="(item,index) in myAddress" :key="index">
       <div class="coin"><span>{{item['coin']}}</span><div>删除</div></div>
       <div class="address">{{item['address']}}</div>
       <div class="title">{{item['title']}}</div>
     </div>
      <div class="btn" @click="submit" > 添加地址{{submitState ? '...' : ''}}</div>

  </section>
</template>
<script>
export default {
  name: "address",
  data() {
    return {
      submitState:false,
      myAddress: [
        {
          coin: "Usdt",
          address: "RKWPDQTXW3FUPZTUNVCEAUG8HEDXEX7ZWQ",
          title: "Usdt地址"
        },
        {
          coin: "eth",
          address: "FJDKFJKSJDFKERUEKFNDKBDLDJOEWWHFKSK",
          title: "ETH地址"
        },
        {
          coin: "RCP",
          address: "FJDKFJKSJDFKERUEKFNDKBDLDJOEWWHFKSK",
          title: "RCP地址"
        },
      ]
    };
  },
  methods: {
    toacceptCoin() {},
    submit(){
      this.$router.push('/addAdress')
    },
  }
};
</script>

<style lang="scss" scoped>
.addressall {
  position: relative;
  padding: 60px 0px;
  margin: 0 15px;
  min-height: 100%;
  .addresBox {
      padding: 10px 0px;
    word-break: break-all;
    font-size: 14px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    .coin {
      font-size: 16px;
      display: flex;
      color: $active;
      justify-content: space-between;
      align-items: center;
      text-transform: uppercase;
      margin-bottom: 8px;
      div {
        padding: 0 5px;
        font-size: 14px;
        border-radius: 2px;
        text-align: center;
         color: $color1;
        border: 1px solid $color1;
      }
    }
    .address {
      margin-bottom: 8px;
      color: $color1;
    }
    .title {
      margin-bottom: 8px;
      color: $color1;
      text-transform: uppercase;
    }
  }
}
</style>

