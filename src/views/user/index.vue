<template>
    <div class="container">
        <div class="userinfo">
            <div class="avatar">
                <img src="../../assets/images/my_head@2x.png" alt="">
            </div>
            <div class="info">
                <div class="name">{{$t('title')}}</div>
                <div class="uid">{{account.getAddress()}}</div>
            </div>
        </div>
        <div class="user-navigation">
            <div class="user-nav-item" @click="clickBinding">
                <i class="icon my_activation"></i>
                <p>{{$t('user.index.active')}}</p>
                <div class="turn-right">
                    <span>{{isjihuo && invite.length ? $t(`home.home13`) : isjihuo ? $t(`home.home12`) : $t(`home.home6`)}}</span>
                    <i></i>
                </div>
            </div>
            <div class="user-nav-item" @click="$router.push({path: '/invite'})">
                <i class="icon my_account"></i>
                <p>{{$t('inviteTitle')}}</p>
                <div class="turn-right">
                    <i></i>
                </div>
            </div>
            <div class="user-nav-item" @click="$router.push({path: '/download'})">
                <i class="icon my_share"></i>
                <p>{{$t('shareAPP')}}</p>
                <div class="turn-right">
                    <i></i>
                </div>
            </div>
            <div class="user-nav-item" @click="$router.push({path: '/lang'})">
                <i class="icon my_a"></i>
                <p>{{$t('langSet')}}</p>
                <div class="turn-right">
                    <span>{{
                        $i18n.locale == 'en' ? 'English' : $i18n.locale == 'ru' ? 'русский язык' : $i18n.locale == 'zhCN' ? '中文繁体' : '中文简体'
                        }}</span>
                    <i></i>
                </div>
            </div>
            <div class="user-nav-item" @click="$router.push({path: '/accountManage'})">
                <i class="icon my_account"></i>
                <p>{{$t('accountManagement')}}</p>
                <div class="turn-right">
                    <i></i>
                </div>
            </div>
<!--            <div class="user-nav-item" @click="$router.push({path: '/changeSecurePsw'})">
                <i class="icon my_lock"></i>
                <p>登录密码</p>
                <div class="turn-right">
                    <i></i>
                </div>
            </div>-->
            <div class="user-nav-item">
                <i class="icon my_l"></i>
                <p>{{$t('versions')}}</p>
                <div class="turn-right">
                    <span>{{version}}</span>
                </div>
            </div>
        </div>
<!--        <r-modal title="激活地址"
             @on-ok="submit"
             btnText="激活"
             :show="isShowModal"
             @on-cancel="isShowModal = false">
            <div class="inp-password">
            <input type="text" placeholder="输入激活地址">
            </div>
        </r-modal>-->
    </div>
</template>
<script>
export default {
    data(){
        return{
            isShowModal: false,
            version: ''
        }
    },
    created (){
        if(typeof plus == 'object'){
            this.version = plus.runtime.version;
        }else{
            this.version = '1.0.0'
        }
    },
    methods: {
        activeAddr(){
            this.isShowModal = true;
        },
        submit(){
            console.log('----')
        }
    }
}
</script>
<style lang="scss" scoped>
.container{
    background-image: url('../../assets/images/my_bj@2x.png');
    background-size: 100% 100%;
    min-height: 100vh;
    .userinfo{
        display: flex;
        align-items: center;
        padding: 40px 30px;

        .avatar{
            width: 16%;
            margin-right: 20px;
            img{
                width: 100%;
            }
            
        }
        .info{
            .name{
                font-size: 20px;
                color: $white;
                margin-bottom: 10px;
            }
            .uid{
                font-size: 12px;
                color: $color1
            }
        }
    }
    .user-navigation{
        padding: 0 15px;
        margin: 0 15px;
        background-color: $bg;
        border-radius: 10px;
        .user-nav-item{
            display: flex;
            align-items: center;
            padding: 15px 0;
            position: relative;
            i.icon{
                display: inline-block;
                width: 31px;
                height: 31px;
                background-size: 100% 100%;
                margin-right: 7px;
            }
            .my_activation{
                background-image: url('../../assets/images/my_activation@2x.png');
            }
            .my_share{
                background-image: url('../../assets/images/my_share@2x.png');
            }
            .my_a{
                background-image: url('../../assets/images/my_a@2x.png');
            }
            .my_lock{
                background-image: url('../../assets/images/my_lock@2x.png');
            }
            .my_l{
                background-image: url('../../assets/images/my_l@2x.png');
            }
            .my_account{
                background-image: url('../../assets/images/my_account@2x.png');
            }
            p{
                font-size: 14px;
                color: $white;
            }
            .turn-right{
                position: absolute;
                right: 0;
                span{
                    font-size: 12px;
                    color: $color1
                }
                i{
                    display: inline-block;
                    width: 7px;
                    background-size: 100% 100%;
                    background-image: url('../../assets/images/triangle@2x.png');
                    height: 7px;
                    margin-left: 7px;
                }
            }
        }
    }
}
</style>