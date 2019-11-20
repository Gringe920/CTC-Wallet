<template>
  <section class="advertDetails">
    <Header title="公告详情"></Header>
    <div class="title">11月25日RCP发布最新上币活动公告</div>
    <div class="team">
      <img src="../../assets/images/my_head@2x.png" alt="" srcset="">
      <div class="tema_r">
        <div class="text">RCP运营团队</div>
        <div class="time">2018-11-18</div>
      </div>
    </div>
    <div class="content">
      <div>11月25日RCP发布最新上币活动公告，详细活动规则您可以点击下面网址查看 https://www.rdb.one/home/trade/eth/usdt      </div>
      <span> 风险提示：</span>
      <div>
        用户在进行充币前，建议仔细阅读该币充提页面的提示，以避免因为小于最小上账金额而无法上账。如有疑问，请及时联系客服。数字资产是创新的投资产品，价格波动较大，请您理性判断自己的投资能力，审慎做出投资决策</div>
      <span>RCP运营团队</span>
      <div>2018年12月12日</div>
    </div>
  </section>
</template>
<script>
export default {
  name: "advertDetails"
};
</script>
<style lang="scss" scoped>
.advertDetails {
  margin: 50px 15px;
  .title {
    font-size: 22px;
    font-weight: 600;
    padding: 20px 0;
    color: rgba(255, 255, 255, 1);
  }
  .team {
    display: flex;
    padding: 15px 0;
    align-items: center;
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    img {
      width: 35px;
      height: 35px;
    }
    .tema_r {
      margin-left: 10px;
      color: $white;
      font-size: 14px;
      .time {
        margin-top: 5px;
        color: $color2;
      }
    }
  }
  .content {
    color: $white;
    div{
      margin-bottom: 20px;
    }
  }
}
</style>
