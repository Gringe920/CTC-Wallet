<template>
  <div class="container">
      <div class="content">
        <div class="logo">
            <img src="../../assets/images/qr_logo@2x.png" alt="">
        </div>
        <div class="login-btn-group">
                <r-button width="73%"
                        text="创建地址"
                        bgColor="#00C28F"
                        class="setup-addr"
                        @comfirm="$router.push({path: './exportAddr'})"/>
                <r-button width="73%"
                        text="导入地址"
                        bgColor="#00CCFF"
                        class="export-addr"
                        @comfirm="$router.push({path: './exportAddr'})"/>
                <div class="tips">
                    <i @click="select" :class="{'active': isAllow}"></i>
                    我已经仔细阅读并同意<span>《RCP用户协议》</span>
                </div>
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            isAllow: false
        }
    },
    methods: {
        select(){
            this.isAllow = !this.isAllow
        },
    }
}
</script>

<style lang="scss" scoped>
.container{
    background-color: #171B29;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .logo{
        width: 60%;
        margin: 0 auto;
        padding-bottom: 33.3%;
        img{
            width: 100%;
        }
    }
    .login-btn-group{
        .setup-addr{
            margin-bottom: 20px;
        }
        .export-addr{
            margin-bottom: 61px;
        }
        .tips{
            font-size: 12px;
            color: #fff;
            text-align: center;
            span{
                color: #00C28F;
            }
            i{
                display: inline-block;
                width: 14px;
                height: 14px;
                border: 1px solid #fff;
                border-radius: 7px;
                margin-right: 5px;
                vertical-align: middle;
                &.active{
                    background: url('../../assets/images/selection@2x.png');
                    background-size: 100% 100%;
                    border: 0;
                }
            }
        }
    }
    
}
</style>