<template>
    <div class="container">
        <Header title="邀请好友" />
        <div class="logo">
            <img src="../../assets/images/qr_logo@2x.png" alt="">
        </div>
        <div class="content">
            <div class="title">我的邀请码</div>
            <div class="code">21311</div>
            <div class="text">邀请好友,享受更多收益</div>
            <div class="invite-qrcode">
                <rQrcode qrcodeUrl="www.baidu.com"/>
            </div>
            <r-button bgColor="linear-gradient(90deg,rgba(0,194,143,1) 0%, rgba(0,204,255,1) 100%)"
                      text="复制推广链接"
                      width="76%"
                      class="invite-button"></r-button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container{
    .logo{
        width: 36%;
        margin: 0 auto;
        img{
            width: 100%;
            padding: 81px 0 26px;

        }
    }
    .content{
        background-image: url('../../assets/images/qr_bj_white@2x.png');
        background-size: 100% 100%;
        width: 92%;
        margin: 0 auto;
        text-align: center;
        .title{
            font-size: 16px;
            padding: 30px 0;
            color: #333;
        }
        .code{
            font-size: 44px;
            color: #00C28F;
            margin-bottom: 35px;
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