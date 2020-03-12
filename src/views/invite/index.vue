<template>
    <div class="container">
        <Header :title="$t('inviteTitle')" />
        <div class="logo">
            <img src="../../assets/images/qr_logo@2x.png" alt="">
        </div>
        <div class="content">
            <div class="tab-address">
                <span  :class="{active : activeState == 0}" @click="activeState = 0">{{$t('invite1')}}</span>
                <span  :class="{active : activeState == 1}" @click="activeState = 1">{{$t('invite2')}}</span>
            </div>
            <div class="title"></div>
            <div class="code">
                <r-copy :copyText="activeState == 0 ? inviteX : inviteY">
                    {{activeState == 0 ? inviteX : inviteY}}
                </r-copy>
            </div>
            <div class="text">{{$t('inviteText')}}</div>
            <!--<div class="invite-qrcode">
                <rQrcode qrcodeUrl="www.baidu.com"/>
            </div>
            <r-copy copyText="fuzhifuzhi">
                <r-button bgColor="linear-gradient(90deg,rgba(0,194,143,1) 0%, rgba(0,204,255,1) 100%)"
                      text="复制推广链接"
                      width="76%"
                      class="invite-button"></r-button>
            </r-copy>-->
            
        </div>
    </div>
</template>
<script>
    export default {
        data (){
            return {
                activeState : 0
            }
        }
    }
</script>
<style lang="scss" scoped>
.container{
    .tab-address{
        display: flex;
        height: 50px;
        align-items: center;
        justify-content: center;
        span{
            flex: 1;
            font-size: 16px;
            color: $color1;
            &.active{
                color: $active;
                cursor: pointer;
            }
        }
    }
    .logo{
        width: 36%;
        margin: 0 auto;
        img{
            width: 100%;
            padding: 81px 0 26px;

        }
    }
    .content{
        /*background-image: url('../../assets/images/qr_bj_white@2x.png');*/
        background-color: $white;
        background-size: 100% 100%;
        padding-bottom: 30px;
        padding-top: 20px;
        border-radius: 30px;
        width: 92%;
        margin: 0 auto;
        text-align: center;
        .title{
            font-size: 16px;
            padding: 30px 0;
            color: #333;
        }
        .code{
            font-size: 20px;
            max-width: 80%;
            text-transform: lowercase;
            color: $active;
            overflow: hidden;
            margin: 0 auto 35px;
            word-wrap:break-word;
        }
        .text{
            color: #8A8A8A;
            font-size: 14px;
            margin-bottom: 55px;
        }
        .invite-qrcode{
            width: 45%;
            margin: 0 auto 30px;
        }
        .invite-button{
            padding-bottom: 20px;
        }
    }
}
</style>