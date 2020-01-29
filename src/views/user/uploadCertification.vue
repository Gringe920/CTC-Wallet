<template>
  <section>
    <Header title="上传证件" />
    <div class="container">
      <div class="box-upload">
        <div class="box front">
          <div class="b-text">请上传手持证件正面</div>
          <div class="b-upload">
            <img src="../../assets/images/id_front@2x.png" alt />
          </div>
        </div>
        <div class="box reverse">
          <div class="b-text">请上传手持证件反面</div>
          <div class="b-upload">
            <img src="../../assets/images/id_opposite@2x.png" alt />
          </div>
        </div>
      </div>
      <div class="addition">
        <div class="a-title">拍摄要求</div>
        <div class="a-list">
          1、需本人双手持身份证放胸前；
          <br />2、本人免冠、五官清晰可见，且完成露出双手手臂；
          <br />3、手持身份证照片内的证件文字信息必须完整清晰，必须手写清晰的签名、日期。
          <br />注：建议横屏拍摄
        </div>
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
  padding-top: 50px;
  .box-upload {
    border-bottom: 10px solid #f7f9fc;
    .box {
      text-align: center;
      margin: 25px auto 10px;
      width: 53%;
      .b-text {
        font-size: 14px;
        margin-bottom: 13px;
      }
      .b-upload {
        background-color: #f7f9fc;
        padding: 14px 18px;
        img {
          width: 82%;
        }
      }
    }
  }
  .addition {
    padding: 20px 15px;
    .a-title {
      font-size: 14px;
    }
    .a-list {
      font-size: 12px;
      color: #97a2af;
      line-height: 1.7;
    }
  }
  .comfirm {
    position: absolute;
    bottom: 20px;
    transform: translateX(-50%);
    left: 50%;
  }
}
</style>