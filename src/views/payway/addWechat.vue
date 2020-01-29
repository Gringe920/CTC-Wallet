<template>
  <section>
   <Header title="添加微信" />
    <div class="container">
      <div class="item-label">姓名</div>
      <input class="item-inp" type="text" placeholder="请输入姓名" />
      <div class="line"></div>
      <div class="item-label">账号</div>
      <input class="item-inp" type="text" placeholder="请输入微信账号" />
      <div class="line"></div>
      <div class="upload-code">
        <div class="up-tit">上传微信收款二维码</div>
        <div class="upload-box">
          点击上传
          <!-- 上传成功，点击替换 -->
        </div>
        <div class="upload-img"></div>
      </div>
      <r-button
        text="确定"
        width="90%"
        class="btn-submit"
        @click="$router.push({path: '/selectPayway'})"
      />
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
section {
  .container {
    padding-top: 50px;
    height: 100%;
    margin: 0 15px;
    .item-label {
      font-size: 12px;
      color: $active;
      margin-bottom: 15px;
      margin-top: 20px;
    }

    .item-inp {
      font-size: 14px;
      color: $active;
      outline: none;
      border: none;
      background: none;
      width: 100%;
      padding-bottom: 15px;
    }
    .upload-code{
      margin-top: 20px;
      
      .up-tit{
        font-size: 12px;
        color: $active;
        margin-bottom: 15px;
      }
      .upload-box{
        text-align: center;
        color: #1771ED;
        font-size: 16px;
        border-radius: 3px;
        padding: 12px 0;
        border: 1px dashed #1771ED;
        margin-bottom: 20px;
      }
    }
  }
}
</style>