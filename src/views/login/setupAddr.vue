<template>
  <section>
      <Header title="创建地址" />
      <div class="container">
          <div class="psw-step-one">{{doubleConfirmed == 0 ? '请设置一个安全密码' : '请再次输入您的安全密码'}}</div>
          <div class="inp-password" v-if="doubleConfirmed == 0">
              <input type="password" v-model="password" placeholder="请输入密码" />
          </div>
          <div class="inp-password" v-if="doubleConfirmed == 1">
              <input type="password" v-model="restarPassword" placeholder="请输入密码" />
          </div>
          <div class="err-msg" v-if="errorMsg">*{{errorMsg}}</div>
      </div>
      <r-button text="确定" width="90%" class="btn-submit" @comfirm="submit"></r-button>
  </section>
</template>

<script>
export default {
    data(){
        return{
            doubleConfirmed: 0, //1 再次验证
            password: '',
            restarPassword: '',
            errorMsg: ''
        }
    },
    methods: {
        submit(){
            const {doubleConfirmed, password, restarPassword} = this;
            if(doubleConfirmed == 0 && !password){
                this.errorMsg = '密码不能为空'
                return;
            }
            if(doubleConfirmed == 0){
                this.doubleConfirmed = 1;
                return;
            } 

            if(doubleConfirmed == 1 && !restarPassword){
                this.errorMsg = '密码不能为空'
                return;
            }
            if(password != restarPassword) {
                this.errorMsg = '*密码不一致'
                return;
            }

        }
    },
    watch: {
       password(val){
           if(val) this.errorMsg = ''
       },
       restarPassword(val){
           if(val) this.errorMsg = ''
       }
    }
}
</script>

<style lang="scss" scoped>
.container{
    padding-top: 70px;
    margin: 0 15px;
    .psw-step-one{
        font-size: 14px;
        color: $white;
        margin-bottom: 12px;
    }
    .inp-password{
        background-color: $border2;
        border-radius:4px;
        padding: 12px 15px;
        font-size: 14px;
        input{
            appearance: none;
            border: 0;
            outline: none;
            width: 100%;
            background-color: transparent;
            color: $white;
        }
    }
    .err-msg{
        font-size: 12px;
        margin-top: 12px;
        color: $up;
    }
}
</style>