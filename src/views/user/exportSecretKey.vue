<template>
  <section>
      <Header title = "导出私钥" />
      <div class="container">
          <div class="notice">
              <img src="../../assets/images/private_key_tips@2x.png" alt="">
              <p>认真抄写 安全保管 切勿泄露自己的私钥</p>
          </div>
          <div class="secret-key-list">
              <div class="secret-key-box">
                  <div class="stitle">
                      RCP地址
                  </div>
                  <div class="s-addr">
                      RKWPDQTXW3FUPZTUNVCEAUG8HEDXEX7ZWQ
                  </div>
                  <r-copy copyText="RKWPDQTXW3FUPZTUNVCEAUG8HEDXEX7ZWQ">
                    <div class="copy-icon">
                        <img src="../../assets/images/copy@2x.png" class="copy-icon-img" alt="">
                    </div>
                  </r-copy>
              </div>
              <div class="secret-key-box">
                  <div class="stitle">
                      RCP地址
                  </div>
                  <div class="s-addr">
                      RKWPDQTXW3FUPZTUNVCEAUG8HEDXEX7ZWQ
                  </div>
                  <r-copy copyText="RKWPDQTXW3FUPZTUNVCEAUG8HEDXEX7ZWQ">
                    <div class="copy-icon">
                        <img src="../../assets/images/copy@2x.png" class="copy-icon-img" alt="">
                    </div>
                  </r-copy>
              </div>
          </div> 
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{
    padding-top: 70px;
    margin: 0 15px;
    .notice{
        text-align: center;
        img{
            width: 31px;
            margin-bottom: 20px;
        }
        p{
            font-size: 14px;
            color: $up
        }
    }
    .secret-key-list{
        margin: 0 15px;
        padding-top: 40px;
        .secret-key-box{
            background-color: $border2;
            border-radius:5px;
            padding: 15px;
            position: relative;
            margin-bottom: 15px;
            color: $white;
            .stitle{
                font-size: 14px;
                padding-bottom: 10px;
            }
            .s-addr{
                font-size: 12px;
                color: $color1;
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .copy-icon{
                width: 16px;
                height: 16px;
                position: absolute;
                right: 15px;
                top: 15px;
                img{
                    width: 100%;
                }
            }
        }
    }
}
</style>