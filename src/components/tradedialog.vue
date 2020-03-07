<template>
  <div class="pasword">
      <div class="top">
        <div class="l ">请输入交易密码</div>
        <img class="img2" @click="onClose" src="../assets/images/top_off_black@2x.png" alt="" srcset="">
      </div>
      <div class="inp">
        <input type="password" placeholder="输入交易密码">
      </div>
        <div class="inp">
        <input type="password" placeholder="输入短信验证码">
        <div class="code" @click="getVerifyCode">获取验证码</div>
      </div>
       <div class="btn" @click="onConfirm">确定</div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed:{

    },
    methods: {
        getVerifyCode() {

        },
        onConfirm() {
            this.$emit('onConfirm');
        },
        onClose() {
            this.$emit('onClose')
        }
    }
}
</script>

<style lang="scss" scoped>
.pasword {
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: $white;
    padding: 25px 15px;
    border-radius: 16px 16px 0px 0px;
    .top {
      position: relative;
      margin-bottom: 25px;
      .l {
        text-align: center;
      }
      .img2 {
        position: absolute;
        right: 0;
        top: 0px;
        width: 15px;
        height: 15px;
        margin-left: 10px;
      }
    }
    .inp {
      display: flex;
      padding: 0 5px;
      font-size: 12px;
      justify-content: space-between;
      margin-bottom: 20px;
      border-radius: 6px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      height: 44px;
      input {
        min-width: 70%;
        line-height: 44px;
        padding: 5px;
      }

      .code {
        line-height: 44px;
        padding-left: 10px;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }
</style>