<template>
    <section class="walletall">
        <Header :title="$t(`wallet.name`)" :rightEv='toacceptCoin' :leftShow='false' :rightIcon="require('../../assets/images/record@2x.png')" ></Header>
        <div class="walletbanner">
            <div class="w-t">
                <span>{{$t(`wallet.zichan`)}} </span>
                <router-link class="gateway" to="/gateway">信任网关</router-link>
                <!--<img  @click="hiddenmoney" src="../../assets/images/wallet_asset_eye@2x.png" alt="" srcset="" v-if="!hidden">
                <img  @click="hiddenmoney" src="../../assets/images/wallet_asset_eye_off@2x.png" alt="" srcset="" v-else>-->
            </div>
            <div class="w-t2">
                <span>{{(decimal.mul((balancesXRP.value || 0), moneyConvert)).toFixed(2)}}</span>&nbsp;{{moneyUnit}}
            </div>
        </div>

        <div class="hiddenmoney">
            <div class="h_l" @click="hiddenmoney">
                <img src="../../assets/images/night_asset_unchecked@2x.png" alt="" srcset="" v-if="!hidden">
                <img src="../../assets/images/asset_selection@2x.png" alt="" srcset="" v-else>
                <span>{{$t(`wallet.hide`)}}</span>
            </div>
        </div>

        <div class="money">
            <div class="coin">{{unitCoin(balancesXRP.currency || rcp.currency)}}</div>
            <div class="coin2">{{balancesXRP.value || 0}} <span> ≈ 0 <small>{{moneyUnit}}</small></span> </div>
            <div class="coin4">
                <div class="shou"  @click="$router.push('/shoukuan/' + $t('title'))" >{{$t(`wallet.shou`)}}</div>
                <div class="zhuan" @click="tozhuanzang(rcp.currency)">{{$t(`wallet.fu`)}}</div>
            </div>
        </div>

        <div class="money">
            <div class="coin">BTC</div>
            <div class="coin2">{{balancesBTC.value || 0}} <span> ≈ 0 <small>{{moneyUnit}}</small></span> </div>
            <div class="coin3" v-if="balancesBTC.counterparty">
                <div>{{$t(`gateway`)}}: {{balancesBTC.counterparty}}</div>
            </div>
            <div class="coin4">
                <div class="shou"  @click="$router.push('/shoukuan/btc')" >{{$t(`wallet.shou`)}}</div>
                <div class="zhuan" @click="tozhuanzang('BTC')">{{$t(`wallet.fu`)}}</div>
            </div>
        </div>


        <div class="money" v-for="(item,index) in balancesOthers" :key="item.currency" v-if="!(hidden && item.value < 0.1)">
            <div class="coin">{{unitCoin(item.currency)}}</div>
            <div class="coin2">{{item.value || 0}} <span> ≈ 0 <small>{{moneyUnit}}</small></span> </div>
            <div class="coin3" v-if="unitCoin(item.currency) != $t('title')">
                <div>{{$t(`gateway`)}}: {{item.counterparty || ''}}</div>
                <!--<div class="c_l">{{$t(`wallet.nocan`)}}：&nbsp;  {{hidden?'******':item.nocan}} </div>-->
            </div>
            <div class="coin4">
                <div class="shou"  @click="$router.push('/shoukuan/' + item.currency)" >{{$t(`wallet.shou`)}}</div>
                <div class="zhuan" @click="tozhuanzang(item.currency)">{{$t(`wallet.fu`)}}</div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: "wallet",
        mounted (){
        },
        data() {
            return {
                searchmsg: "",
                serchnow: false,
                hidden:false,
                coins: [

                ]
            };
        },
        watch: {
            searchmsg() {
                console.log(this.searchmsg);
                console.log(new RegExp(this.searchmsg).test('xxm'));
                if (this.searchmsg != "") {
                    this.serchnow = true;
                } else {
                    this.serchnow = false;
                }
            }
        },
        methods:{
            tozhuanzang(item){
                this.$router.push(`/zhuanqian/${item}`);
            },
            hiddenmoney(){
                this.hidden = !this.hidden

            },
            toacceptCoin(){
                this.$router.push({
                    path: "/acceptCoin",
                    query: {
                        type: 0
                    }
                });
            }
        }


    };
</script>
<style lang="scss" scoped>
    .gateway{
        color: $white;
    }
    .walletall {
        padding: 0 15px;
        min-height: 90vh;
        margin-bottom: 50px;
        .walletbanner {
            margin-top: 60px;
            height: 137px;
            background: url(../../assets/images/wallet__card_bj@2x.png);
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 5px;
            padding: 0 20px;
            .w-t {
                display: flex;
                justify-content: space-between;
                color: $white;
                padding: 20px 0 20px 0;
                align-items: center;
                img {
                    width: 22px;
                    height: 22px;
                }
            }
            .w-t2 {
                font-size: 22px;
                color: $white;
                text-align: left;
                span {
                    font-size: 40px;
                }
            }
        }
        .hiddenmoney {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 0;
            color: $color1;
            .h_l {
                display: flex;
                align-items: center;
                font-size: 12px;
                img {
                    margin-right: 5px;
                    width: 12px;
                    height: 12px;
                }
            }
            .h_r {
                height: 24px;
                width: 100px;
                display: flex;
                align-items: center;
                border-radius: 2px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                img {
                    width: 20px;
                    padding: 0 5px;
                    height: 12px;
                }
                input {
                    width: 70px;
                    height: 20px;
                    background: $bg;
                    border: none;
                    color: $white;
                }
            }
            .searchwid {
                width: 150px;
                input {
                    width: 120px;
                }
            }
        }
        .money {
            height: 100%;
            background: $bg2;
            margin-bottom: 20px;
            border-radius: 5px;

            .coin {
                padding: 20px 15px 0 15px;
                font-size: 18px;
                font-weight: 500;
                color: $active;
            }
            .coin2 {
                padding: 0 15px;
                font-size: 24px;
                color: $white;
                margin: 15px 0;
                span {
                    font-size: 18px;
                }
            }
            .coin3 {
                padding: 0 15px 10px 15px;
                font-size: 13px;
                font-weight: 600;
                color: $color1;

                display: flex;
                .c_l {
                    width: 50%;
                }
            }
            .coin4 {
                border-top: 1px solid $bg;
                height: 40px;
                color: $white;
                font-size: 14px;
                div {
                    line-height: 40px;
                    width: 49%;
                    display: inline-block;
                    text-align: center;
                }
                div:hover {
                    background: $active;
                    color: $white;
                }
                .shou {
                    border-right: 1px solid $bg;
                }
            }
        }
    }
</style>
