<template>
    <div class="container">
        <div class="userinfo">
            <div class="avatar">
                <img src="../../assets/images/my_head@2x.png" alt="">
            </div>
            <div class="info">
                <div class="name">Parren Ye</div>
                <div class="uid">UID：0650021300</div>
            </div>
        </div>
        <div class="user-navigation">
            <div class="user-nav-item" @click="activeAddr">
                <i class="icon my_activation"></i>
                <p>{{$t('user.index.active')}}</p>
                <div class="turn-right">
                    <span>未激活</span>
                    <i></i>
                </div>
            </div>
            <div class="user-nav-item" @click="$router.push({path: '/invite'})">
                <i class="icon my_share"></i>
                <p>分享APP</p>
                <div class="turn-right">
                    <i></i>
                </div>
            </div>
            <div class="user-nav-item" @click="$router.push({path: '/lang'})">
                <i class="icon my_a"></i>
                <p>语言设置</p>
                <div class="turn-right">
                    <span>中文设置</span>
                    <i></i>
                </div>
            </div>
            <div class="user-nav-item" @click="$router.push({path: '/accountManage'})">
                <i class="icon my_account"></i>
                <p>账户管理</p>
                <div class="turn-right">
                    <i></i>
                </div>
            </div>
            <div class="user-nav-item" @click="$router.push({path: '/changeSecurePsw'})">
                <i class="icon my_lock"></i>
                <p>登录密码</p>
                <div class="turn-right">
                    <i></i>
                </div>
            </div>
            <div class="user-nav-item">
                <i class="icon my_l"></i>
                <p>版本</p>
                <div class="turn-right">
                    <i></i>
                </div>
            </div>
        </div>
        <r-modal title="激活地址"
             @on-ok="submit"
             btnText="激活"
             :show="isShowModal"
             @on-cancel="isShowModal = false">
            <div class="inp-password">
            <input type="text" placeholder="输入激活地址">
            </div>
        </r-modal>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isShowModal: false
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