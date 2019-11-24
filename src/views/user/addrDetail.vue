<template>
  <section>
      <Header title="地址详情" />
      <div class="detail-list">
          <div class="detail-row">
              <span>更改地址名称</span>
              <i></i>
          </div>
          <div class="detail-row">
              <span>备份地址助记词</span>
              <i></i>
          </div>
          <div class="detail-row">
              <span>导出私钥</span>
              <i></i>
          </div>
          <div class="detail-row">
              <span>删除地址</span>
              <i></i>
          </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
section{
  .detail-list{
      margin: 0 15px;
      padding-top: 70px;
      .detail-row{
          font-size: 14px;
          color: #fff;
          padding: 15px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          i{
              display: inline-block;
              background-image: url('../../assets/images/triangle@2x.png');
              background-size: 100% 100%;
              width: 7px;
              height: 7px;

          }
      }
  }  
}
</style>