<template>
  <section>
      <Header title="地址详情" />
      <div class="detail-list">
          <div class="detail-row" @click="changeAddrModal">
              <span>更改地址名称</span>
              <i></i>
          </div>
          <div class="detail-row" @click="$router.push({path: '/mnemonicWord'})">
              <span>备份地址助记词</span>
              <i></i>
          </div>
          <div class="detail-row" @click="$router.push({path: '/exportSecretKey'})">
              <span>导出私钥</span>
              <i></i>
          </div>
          <div class="detail-row">
              <span>删除地址</span>
              <i></i>
          </div>
      </div>
        <!-- 更换地址弹窗 -->
        <r-modal title="修改地址名称"
             @on-ok="submit"
             btnText="激活"
             :show="isShowModal"
             @on-cancel="isShowModal = false">
            <div class="inp-password">
            <input type="text" placeholder="限25字以内">
            </div>
        </r-modal>
        <!-- 安全密码弹窗 -->
        <r-modal title="安全密码"
             @on-ok="submitPsw"
             :show="isShowPswModal"
             @on-cancel="isShowPswModal = false">
            <div class="inp-password">
                <input type="password" placeholder="请输入安全密码">
            </div>
        </r-modal>
  </section>
</template>

<script>
export default {
    data(){
        return{
            isShowModal: false,
            isShowPswModal: false
        }
    },
    methods: {
        changeAddrModal(){
            this.isShowModal = true;
        },
        submitPsw(){

        },
        submit(){
            
        }
    }
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