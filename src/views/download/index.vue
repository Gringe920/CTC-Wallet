<template>
    <div class="download-container">
        <div class="turn-back">
            <img src="../../assets/images/home_search_white@2x.png" @click="$router.go(-1)" alt=""/>
        </div>
        <div class="download-logo">
            <img src="../../assets/images/download_logo@2x.png" alt=""/>
        </div>
        <section class="browser-download" v-if="state" >
            {{$t('Please open it in the browser')}} ↑
        </section>
        <div class="download-btn">
            <r-button width="64%" 
                      bgColor="$active"
                      :text="'IOS ' + $t('download')"
                      icon="download_ios"
                      class="d-btn" @comfirm="dispark"/>
            <r-button width="64%"
                      bgColor="$active"
                      :text="'Android ' + $t('download')"
                      icon="download_android"
                      class="d-btn" @comfirm="downloadApp" />
            <!--<r-button width="64%"
                      bgColor="$active"
                      text="登录WEB版本"
                      icon="download_web"
                      class="d-btn"/>-->
        </div>
        <div class="download-qrcode">
            <rQrcode :qrcodeUrl="axios.defaults.baseURL +  '/dist/index.html#/download'"/>
        </div>
    </div>
</template>

<script>


export default {
    data(){
        return {
            state : false,
            android : "",
        }
    },
    created (){
        this.micromessenger();
        //this.getUrl();
    },
    methods : {
        getUrl (){
            this.axios({
                url : "/service/app_info"
            }).then(res => {
                this.android = res.data.app_android_download;
            }).catch(e => {
            })
        },
        micromessenger () {
            if (/micromessenger/gi.test(navigator.userAgent)) {
                this.state = true;
            }
        },
        dispark (){
            this.$toast.show(this.$t('dispark'));
        },
        downloadApp (){
            location.href = this.android || 'http://rcposs.oss-accelerate.aliyuncs.com/app/RCP.v.1.0.7.apk';
        }
    }
}
</script>
<style lang="scss" scoped>
    .browser-download{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        color: $white;
        padding-top: 40px;
        font-size: 20px;
        padding-right: 10px;
        text-align: right;
    }
.download-container{
    background-image: url('./../../assets/images/download_bj@2x.png');
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    max-width: 750px;
    margin: 0 auto;
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
