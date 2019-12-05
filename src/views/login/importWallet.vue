<template>
  <div class="container">
    <Header title="导入钱包" />
    <div class="content">

      <div class="psw-step-one">{{$t('lang1')}}</div>
      <div class="inp-password">
        <input type="password" v-model="password" :placeholder="$t('wallet.zhuanqian12')" />
      </div>

      <!-- 助记词/私钥 -->
      <div class="inputFwk" :class="{'active': activeIndex == 0}">
        <div class="input-title">{{$t('lang2')}}</div>
        <textarea class="input-area" v-model="mnemonic" :placeholder="$t('lang3')" />
        <div class="error-msg" v-if="errorMsg">*{{errorMsg}}</div>
      </div>
      <!-- 提交按钮 -->
      <r-button width="87.3%"
                bgColor="$active"
                :text="$t('lang4') + (submitState ? '...' : '')"
                class="submit" @comfirm="submit"/>
    </div>
  </div>
</template>

<script>
    export default {
        name : "importWallet",
        data() {
            return {
                activeIndex: 0, // 0助记词，1私钥
                password : "",
                mnemonic : "",
                errorMsg : "",
                submitState : false,
            };
        },
        methods: {
            selectTab(index) {
                this.activeIndex = index;
            },
           submit (){
                let {password, mnemonic} = this;
                if(password.length <= 0){
                    this.errorMsg = this.$t('lang5');
                    return;
                }

                if(mnemonic.length <= 0){
                    this.errorMsg = this.$t('lang6');
                    return;
                }

                this.submitState = true;

                this.account.importWallet(mnemonic, password).then(() => {
                    this.toRoute('/');
                    this.submitState = false;
                }).catch(e => {
                    this.errorMsg = e.message;
                    this.submitState = false;
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
  .container {
    .content {
      margin-top: 60px;
      border-top: solid 1px $border;
      padding-top: 30px;
      .psw-step-one{
        padding: 0 20px;
        font-size: 14px;
        color: $color1;
        margin-bottom: 12px;
      }
      .inp-password{
        background-color: $border2;
        border-radius:4px;
        padding: 12px 20px;
        margin: 0 20px;
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
      .tabs {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        .tab {
          font-size: 14px;
          color: $color1;
          position: relative;
          width: 50%;
          text-align: center;
          &.active {
            color: $active;
          }
          .active-line {
            display: inline-block;
            width: 22px;
            height: 2px;
            background-color: $active;
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
    .inputFwk {
      display: none;
      padding: 17px;
      .input-title {
        font-size: 14px;
        color: $color1;
      }
      .input-area {
        background-color: $border2;
        border: none;
        margin-top: 20px;
        height: 160px;
        outline: none;
        width: 100%;
        padding: 20px;
        font-size: 14px;
        color: white;
        overflow: hidden;
      }
      &.active {
        display: inline-block;
        width: 100%;
      }
      .error-msg{
        font-size: 12px;
        color: $up;
        margin-top: 12px;
      }
    }
    .submit{
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>