<template>
    <section class="acceptCoin">
        <Header :title="$t(`wallet.jilu`)" :leftEv="leftEv"></Header>
        <div class="acceptCoin_type">
            <div    :class="0 == activeIdx ? 'divactive' : '' "  @click="changetype(0)">提币</div>
            <div   :class="1 == activeIdx ? 'divactive' : '' "  @click="changetype(1)">充币</div>
        </div>
        <!-- 提币 -->
        <div class="zhuaninfo">
            <load v-if="loadState"></load>
            <div class="zhuan" v-for="item in list" :key="item.id" @click="$router.push('/detais/'+ item.id)">
                <div class="top">
                    <!-- <img src="../../assets/images/night_record_time@2x.png" alt srcset /> -->
                    2019/09/01
                </div>
                <template v-if="item.type == 'payment'">
                    <div class="center">
                        <div>
                            提币:&nbsp;6700&nbsp; RCp
                        </div>
                        <img src="../../assets/images/next_black@2x.png" alt srcset />
                    </div>
                    <div class="last">01/03 &nbsp;23:20</div>
                </template>
                <template v-if="item.type == 'trustline'">
                    <div class="center">
                        <div>
                            {{item.specification.currency}}
                        </div>
                        <img src="../../assets/images/next_black@2x.png" alt srcset />
                    </div>
                    <div class="last">{{$t('gateway')}} : {{item.specification.counterparty}}</div>
                </template>
            </div>
        </div>
        <!-- 充币 -->
    </section>
</template>
<script>
    export default {
        name: "acceptCoin",
        props : ['activeIdx'],
        data() {
            return {
                //0 提币 1 充币 
                activeIdx: this.$route.query.type || 0,
                list : [
                    {
                    id:1,
                    type:'payment'
                    },
                       {
                    id:1,
                    type:'payment'
                    }
                ],
                loadState : false,
                routerNum : 0,
            };
        },
        watch : {
        },
        created (){
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
    
        }
    };
</script>

<style lang="scss" scoped>
    // xm
    .acceptCoin {
        text-transform: uppercase;
        margin-bottom: 60px;
        .acceptCoin_type {
            display: flex;
            margin-top: 50px;
            background:#F9F9F9;
            justify-content: space-around;
            align-items: center;
            height: 35px;
            color: $color1;
            font-size: 14px;
            .divactive {
                height: 100%;
                line-height: 35px;
                color: $fontActive;
                border-bottom: 1px solid $fontActive;
            }
            div:hover {
                color: $fontActive;
                line-height: 35px;
                border-bottom: 1px solid $fontActive;
            }
        }
        .zhuaninfo {
        padding: 0 15px;
            
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
                    color: $active;
                    small{
                        color: $active;
                    }
                    img {
                        width: 14px;
                        height: 14px;
                    }
                }
            }
        }
    }
</style>
