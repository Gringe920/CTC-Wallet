<template>
    <div class="home">
        <div class="hometou">
            <div class="home-l">
                <div class="ke">{{$t(`home.home1`)}}</div>
                <img  class="imgs" @click="toHidden" src="../assets/images/wallet_asset_eye@2x.png" v-if="!hidden">
                <img  class="imgs" @click="toHidden" src="../assets/images/wallet_asset_eye@2x.png" v-else>
            </div>
            <div class="home-t2">
                <span>{{hidden ? '******' : (balancesXRP.value || 0)}}</span>&nbsp;{{hidden ?'******': $t('title') }}
            </div>
        </div>
        <div class="bg"></div>
        <div class="home-type">
            <div class="ht_box" @click="toRoute('shoukuan')">
                <img src="../assets/images/receivables.png" alt="" srcset="">
                <div>{{$t(`home.home2`)}}</div>
            </div>
            <div class="ht_box" @click="$router.push('/acceptCoin')" v-if="invite">
                <img src="../assets/images/activation@2x.png" alt="" srcset="">
                <div>{{$t(`wallet.jilu`)}} </div>
            </div>
            <div class="ht_box" @click="clickBinding" v-else>
                <img src="../assets/images/activation@2x.png" alt="" srcset="">
                <div>{{$t(`home.home15`)}}</div>
            </div>
            <div class="ht_box"   @click="$router.push('/zhuanqian/XRP')">
                <img src="../assets/images/transfer@2x.png" alt="" srcset="">
                <div>{{$t(`home.home4`)}}</div>
            </div>
        </div>
        <div class="bg"></div>
        <div class="advert">
            <div class="advert_l" @click="toRoute('advertDetails')">
                <img src="../assets/images/horn@2x.png" alt="" srcset="">
                <div>{{adData[0] && adData[0].title || '-'}}</div>
            </div>
            <div class="advert_r" @click="toRoute('advert')">{{$t(`home.home5`)}}</div>
        </div>
        <div class="jiuo" @click="clickBinding">
            <img src="../assets/images/not_active@2x.png" alt="" srcset="" v-if="!isjihuo || !invite.length">
            <img src="../assets/images/phine_active@2x.png" alt="" srcset="" v-else>
            <div class="jiho_r">
                <div class="t">{{isjihuo && invite.length ? $t(`home.home13`) : isjihuo ? $t(`home.home12`) : $t(`home.home6`)}}</div>
                <div class="last">{{isjihuo && invite.length ? $t(`home.home9`) : isjihuo ? $t(`home.home14`) : $t(`home.home8`)}}</div>
            </div>
        </div>

<!--        <r-modal :title="$t(`home.home10`)"
                 @on-ok="submitPsw"
                 :show="isShowPswModal"
                 @on-cancel="isShowPswModal = false">
            <div class="inp-password">
                <input type="password" :placeholder="$t(`home.home11`)">
            </div>
        </r-modal>-->
    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        name: "home",
        data() {
            return {
                hidden: false,
                isShowPswModal: false
            };
        },
        methods: {
            clickActivate (){

            },
            submitPsw() {
                this.isShowPswModal = false;
                this.$store.commit('isjihuo', true);
            },
            toHidden() {
                this.hidden = !this.hidden;
            }
        },
        components: {}
    };
</script>
<style lang="scss" scoped>
    // xm start
    .home {
        .hometou {
            height: 200px;
            width: 100%;
            background: url("../assets/images/home_bj_1@2x.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            .home-l {
                padding: 40px 15px 20px 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: $color1;
                font-size: 16px;
                .imgs {
                    width: 30px;
                    height: 30px;
                }
            }
            .home-t2 {
                margin: 0 15px 0 30px;
                font-size: 18px;
                color: $color1;
                /*font-weight: bold;*/
                span {
                    font-size: 38px;
                    color: $white;
                }
            }
        }
        .bg {
            position: relative;
            top: -20px;
            height: 2px;
            border-radius: 10px 10px 0px 0px;
            width: 80%;
            float: right;
            background-image: linear-gradient(
                            90deg,
                            rgba(0, 194, 143, 0) 0%,
                            rgba(0, 194, 143, 3) 100%
            );
        }
        .home-type {
            position: relative;
            top: -20px;
            width: 100%;
            display: flex;
            height: 125px;
            border-radius: 0 0 0 50px;
            background: linear-gradient(
                            235deg,
                            rgba(31, 35, 50, 1) 0%,
                            rgba(50, 54, 69, 1) 100%
            );
            // background: url("../assets/images/home_bj_2@2x.png");
            justify-content: space-around;
            background-repeat: no-repeat;
            background-size: cover;
            align-items: center;
            .ht_box {
                font-size: 12px;
                color: $color1;
                text-align: center;
                img {
                    width: 30px;
                    height: 30px;
                }
            }
        }
        .advert {
            position: relative;
            top: -20px;
            border: 1px solid red;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 15px;
            border-radius: 24px;
            border: 1px solid $border2;
            background: rgba(50, 54, 69, 1);
            height: 50px;
            padding: 0 15px;
            .advert_l {
                color: $white;
                display: flex;
                align-items: center;
                width: 84%;
                height: 50px;
                font-size: 14px;
                white-space: nowrap;
                line-height: 50px;
                div::-webkit-scrollbar {
                    display: none;
                }
                div {
                    overflow-x: scroll;
                }
                img {
                    width: 20px;
                    height: 20px;
                    margin-right: 5px;
                }
            }
            .advert_r {
                color: $color1;
                font-size: 14px;
            }
            .advert_r:hover {
                color: $active;
            }
        }
        .jiuo {
            position: relative;
            top: -20px;
            margin: 0 15px;
            background: $border2;
            border-radius: 5px;
            display: flex;
            padding: 20px 15px;
            img {
                width: 40px;
                height: 70px;
                margin-right: 15px;
            }
            .jiho_r {
                display: inline-block;
                .t {
                    font-size: 16px;
                    font-weight: bold;
                    color: $white;
                    margin-bottom: 10px;
                }
                .last {
                    color: $color1;
                    font-weight: 14px;
                }
            }
        }
    }
</style>

