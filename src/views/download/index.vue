<template>
    <div class="download-container">
        <div class="turn-back">
            <img src="../../assets/images/home_search_white.png" @click="$router.go(-1)" alt=""/>
        </div>
        <div class="download-logo">
            <img src="../../assets/images/download_logo.png" alt=""/>
        </div>
        <div class="download-btn">
            <r-button width="64%" 
                      bgColor="linear-gradient(90deg,rgba(0,194,143,1) 0%, rgba(0,204,255,1) 100%)"
                      text="IOS版下载"
                      icon="download_ios"
                      class="d-btn"/>
            <r-button width="64%"
                      bgColor="linear-gradient(90deg,rgba(0,194,143,1) 0%, rgba(0,204,255,1) 100%)"
                      text="安卓版下载"
                      icon="download_android"
                      class="d-btn"/>
            <!--<r-button width="64%"
                      bgColor="linear-gradient(90deg,rgba(0,194,143,1) 0%, rgba(0,204,255,1) 100%)"
                      text="登录WEB版本"
                      icon="download_web"
                      class="d-btn"/>-->
        </div>
        <div class="download-qrcode">
            <rQrcode qrcodeUrl="www.baidu.com"/>
        </div>
    </div>
</template>

<script>


export default {
    data(){
        return {
        }
    },
    
    
}
</script>
<style lang="scss" scoped>
.download-container{
    background-image: url('./../../assets/images/download_bj.png');
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    .turn-back{
        position: absolute;
        left: 0;
        top: 0;
        padding: 15px;
        img{
            width: 22px;
        }
    }
    .download-logo{
        width: 60%;
        margin: 0 auto;
        padding: 88.5px 0 50px;
        img{
            width: 100%;
        }
        
    }
    .download-btn{
        .d-btn{
            margin-bottom: 30px;
        }
    }
    .download-qrcode{
        width: 38.6%;
        margin: 0 auto;
        padding-top: 35px;
        
    }
}
</style>
