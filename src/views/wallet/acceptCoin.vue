<template>
    <section class="acceptCoin">
        <Header :title="$t(`wallet.jilu`)" :leftEv="leftEv"></Header>
        <!--<div class="acceptCoin_type">-->
            <!--<div    :class="0 == activeIdx ? 'divactive' : '' "  @click="changetype(0)">{{$t(`wallet.shou`)}}</div>-->
            <!--<div   :class="1 == activeIdx ? 'divactive' : '' "  @click="changetype(1)">{{$t(`wallet.fu`)}}</div>-->
            <!--<div    :class="2 == activeIdx ? 'divactive' : '' " @click="changetype(2)">{{$t(`wallet.duihuan`)}}</div>-->
        <!--</div>-->
        <!-- 收款 -->
        <div class="zhuaninfo">
            <load v-if="loadState"></load>
            <div class="zhuan" v-for="item in list" :key="item.id" @click="$router.push('/detais/'+ item.id)">
                <div class="top">
                    <img src="../../assets/images/night_record_time@2x.png" alt srcset />
                    {{item.outcome.ledgerVersion}} {{$t('ledgerVersion')}}
                    <small>({{transactionTypeText(item)}})</small>
                </div>
                <div class="center">
                    <div v-if="activeIdx <= 1">
                        {{item.address == rcp.address ? '-' : '+'}}{{item.specification.source.maxAmount.value}} {{unitCoin(item.specification.source.maxAmount.currency)}}
                    </div>
                    <img src="../../assets/images/triangle@2x.png" alt srcset />
                </div>
                <div class="last">{{item.address == rcp.address ? item.specification.destination.address : item.specification.source.address}}</div>
            </div>
        </div>
        <!-- 兑换 -->
    </section>
</template>
<script>
    export default {
        name: "acceptCoin",
        props : ['activeIdx'],
        data() {
            return {
                //0 收款 1 转账 2 兑换
                // activeIdx: this.$route.query.type || 0,
                list : [],
                loadState : true,
                routerNum : 0,

            };
        },
        watch : {
            activeIdx (){
                this.routerNum ++;
                this.getPayment();
            },
            connected (n, o){
                if(n != o){
                    this.getPayment();
                }
            }
        },
        created (){
            this.getPayment();
        },
        methods: {
            leftEv (){
                if(this.routerNum > 3){
                    this.$router.push('/wallet');
                    return true;
                }else{
                    return false;
                }
            },
            changetype(activeIdx) {
                if(activeIdx != this.activeIdx){
                    this.$router.push({name : this.$route.name, params : {activeIdx}});
                }
            },
            getPayment (){
                if(!this.connected){
                    return;
                }
                let activeIdx = this.activeIdx;
                this.loadState = true;
                this.list = [];
                this.rcp.api.getTransactions(this.rcp.address, {
                    // counterparty : 'rL6ypidEnws5krUzb7Xo4EwJTwrr2zebfm',
                    binary : true,
                    excludeFailures : true,
                    // initiated : activeIdx == 0 ? false : activeIdx == 1 ? true : null,
                    // types : ['payment'],
                    limit : 100,
                }).then(data => {
                    console.log(data);
                    this.list = data;
                    this.loadState = false;
                }).catch(e => {
                    console.log(e);
                    this.loadState = false;
                });
            },
        }
    };
</script>

<style lang="scss" scoped>
    // xm

    .acceptCoin {
        margin-bottom: 60px;
        .acceptCoin_type {
            display: flex;
            margin-top: 50px;
            justify-content: space-around;
            align-items: center;
            background: $nav-bg;
            height: 35px;
            color: $color1;
            font-size: 14px;
            .divactive {
                height: 100%;
                line-height: 35px;
                color: $active;
                border-bottom: 1px solid $active;
            }
            div:hover {
                color: $active;
                line-height: 35px;
                border-bottom: 1px solid $active;
            }
        }
        .zhuaninfo {
            margin-top :50px;
            border-top: solid 1px $border;
            .zhuan {
                color: $color1;
                padding: 15px;
                font-size: 12px;
                border-bottom: 1px solid $border;
                .top {
                    margin-bottom: 10px;
                    img {
                        width: 12px;
                        height: 12px;
                        margin-right: 5px;
                    }
                }
                .center {
                    margin-bottom: 7px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 500;
                    color: $white;
                    small{
                        color: $color1;
                    }
                    img {
                        width: 8px;
                        height: 8px;
                    }
                }
            }
        }
    }
</style>
