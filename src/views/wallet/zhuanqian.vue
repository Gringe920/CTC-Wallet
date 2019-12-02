<template>
    <section class="zhuanqian">
        <Header :title="$t(`wallet.fu`)" :rightEv='toacceptCoin' :rightIcon="require('../../assets/images/record@2x.png')"></Header>

        <div class="cointype">
            <div class="l">{{unitCoin(coin)}}</div>
            <div class="r" @click="toclose">
                {{$t(`wallet.zhuanqian1`)}}
                <img src="../../assets/images/triangle@2x.png" alt="" srcset="">
            </div>
        </div>

        <div class="box2">
            <div class="text1"> {{$t(`wallet.zhuanqian3`)}}</div>
            <div class="text2">
                <input type="text" v-model="address" :placeholder="$t(`wallet.zhuanqian9`)">
                <img @click="$router.push('/scanning')" src="../../assets/images/add_scan_white@2x(2).png" alt="" srcset="">
            </div>
        </div>

        <div class="box2" v-if="unitCoin(coin) != $t(`title`)">
            <div class="text1"> {{$t(`gateway`)}}</div>
            <div class="text2">
                <input type="text" v-model="gateway" :placeholder="$t(`gatewayAddress`)">
            </div>
        </div>

        <div class="box2">
            <div class="text1"> {{$t(`wallet.zhuanqian2`)}}</div>
            <div class="text2">
                <input type="number" v-model="num" :placeholder="$t(`wallet.zhuanqian8`)" class="in2">
                <div class="r">
                    <small>{{unitCoin(coin)}}&nbsp;&nbsp;| </small>&nbsp;&nbsp; <span @click="clickAll">{{$t(`wallet.zhuanqian4`)}}</span>
                </div>
            </div>
            <div class="l">* {{`${$t(`wallet.can`)}：${coinBalances} ${unitCoin(coin)}； ${$t(`wallet.zhuanqian5`)}： ${fee} ${$t('title')}`}}</div>
        </div>

        <div class="btn" @click="submit" > {{$t(`wallet.zhuanqian6`)}}{{submitState ? '...' : ''}}</div>

        <div class="coinchange" v-if="close" @click="toclose">
            <div class="coinbox">
                <div @click="clickCoin(item, index)" class="coin" :class="coin == item ? 'active' : ''" v-for="(item, index) in coinVolume" :key='item'>
                    <!--<img src="../../assets/images/btc@2x.png" alt="" srcset="">-->
                    <div>{{unitCoin(item)}}</div>
                </div>
                <div class="coin cg" >
                    <div @click.stop="toclose"> {{$t(`wallet.zhuanqian7`)}}</div>
                </div>
            </div>
        </div>

        <r-modal :title="$t(`wallet.zhuanqian10`)"
                 @on-ok="submitPsw"
                 :show="isShowPswModal"
                 @on-cancel="isShowPswModal = false">
            <div class="inp-password">
                <input type="password" v-model="password" :placeholder="$t(`wallet.zhuanqian12`)">
            </div>
        </r-modal>
    </section>
</template>
<script>
    export default {
        name: "zhuanqian",
        data() {
            return {
                close: false,
                isShowPswModal: false,
                coin: '',
                coinBalances : 0,
                address : "",
                gateway : "",
                num : "",
                password : "",
                submitState : false
            };
        },
        created (){
            if(this.$route.query.coin){
                this.coin = this.$route.query.coin;
            }else{
                this.coin = this.coinVolume[0] || 'XRP';
            }

        },
        watch : {
            coin (){
                this.updateBalances();
            },
            isjihuo (n, o){
                this.updateBalances();
            }
        },
        methods: {
            updateBalances (){
                let coinIndex = this.coinVolume.indexOf(this.coin);
                this.coinBalances = (this.balances[coinIndex] && this.balances[coinIndex].value) || 0;
            },
            clickAll (){
                this.num = this.coinBalances > (this.rcp.activeNum || 10) ? this.decimal.sub(this.coinBalances, 10)  : 0;
            },
            clickCoin (item){
                this.coin = item;
            },
            submit(){
                let {num, address, coin, gateway} = this;
                if(this.submitState) return;
                if(!this.rcp.api.isValidAddress(address)){
                    this.$toast.show(this.$t('wallet.addressError'));
                    return;
                }
                if(num <= 0){
                    this.$toast.show(this.$t('wallet.numError'));
                    return;
                }
                if(coin.length <= 0){
                    this.$toast.show(this.$t('wallet.coinError'));
                    return;
                }
                if(this.unitCoin(coin) != this.$t(`title`) && !this.rcp.api.isValidAddress(gateway)){
                    this.$toast.show(this.$t('gatewayError'));
                    return;
                }
                this.isShowPswModal = true;
            },
            async submitPsw (){
                this.account.verifyPassword(this.password).then(async () => {
                    this.isShowPswModal = false;
                    this.submitState = true;
                    let seed = await this.account.exportPrivate(this.password);
                    let {num, address, coin, gateway} = this;
                    let option = {
                        address,
                        value : Number(num),
                        seed,
                    };
                    if(gateway.length > 0){
                        option.currency = coin;
                        option.counterparty = gateway;
                    }
                    this.rcp.preparePayments(option).then(data => {
                        this.submitState = false;
                        if(data.engine_result_code == 0){
                            this.$toast.show(this.$t('wallet.fuSuccess'));

                        }else{
                            this.$toast.show(data.engine_result_message);
                        }
                    }).catch(e => {
                        this.submitState = false;
                        this.$toast.show(e.message);
                    });
                }).catch(e => {
                    this.$toast.show(this.$t('passwordError'));
                });
            },
            changeAddrModal() {
                this.isShowModal = true;
            },
            toclose() {
                this.close = !this.close;
            },
            toacceptCoin() {
                this.$router.push({
                    path: "/acceptCoin",
                    query: {
                        type: 1
                    }
                });
            }
        }
    };
</script>
<style lang="scss" scoped>
    .zhuanqian {
        text-transform: uppercase;
        margin-top: 65px;
        padding: 0 15px;
        .cointype {
            margin-bottom: 15px;
            border-radius: 4px;
            display: flex;
            color: $white;
            justify-content: space-between;
            padding: 15px;
            align-items: center;
            background: $bg2;
            .r {
                color: $color1;
                font-size: 13px;
            }
            img {
                width: 8px;
                height: 8px;
            }
        }
        .box2 {
            margin-bottom: 15px;
            color: $white;
            font-size: 14px;
            background: $bg2;
            padding: 15px;
            border-radius: 4px;
            .l {
                color: $color1;
                padding-top: 15px;
                margin-top: 10px;
                border-top: 1px solid $bg;
            }
            .text2 {
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 30px;
                .r {
                    small {
                        color: $color1;
                    }
                }
                img {
                    width: 20px;
                    height: 20px;
                }
                input {
                    height: 100%;
                    border: none;
                    min-width: 90%;
                    color: $white;
                    background: none;
                }
                .in2 {
                    min-width: 70%;
                }
                .r {
                }
            }
        }
        .coinchange {
            width: 100%;
            height: 100vh;
            z-index: 100;
            position: absolute;
            top: 0;
            left: 0;
            background: $bg4;
            .coinbox {
                position: absolute;
                bottom: 0;
                background: $bg;
                width: 100%;
                .cg {
                    border-top: 10px solid $nav-bg;
                }
                .coin {
                    width: 100%;
                    text-align: center;

                    height: 48px;
                    color: $color1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-bottom: 1px solid $nav-bg;
                    &.active {
                        color: $white;
                    }
                    img {
                        width: 20px;
                        height: 20px;
                    }
                    div {
                        margin-left: 6px;
                        display: inline-block;
                    }
                }
            }
        }
    }
</style>