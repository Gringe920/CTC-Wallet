<template>
    <div class="container">
        <Header :title="$t('importAddress')" />
        <div class="content">
            <!-- tabs -->
            <div class="tabs">
                <div class="tab" @click="selectTab(0)" :class="{'active': activeIndex == 0}">
                    {{$t('mnemonic')}}
                    <span class="active-line" v-if="activeIndex == 0"></span>
                </div>
                <div class="tab" :class="{'active': activeIndex == 1}" @click="selectTab(1)">
                    {{$t('privateKey')}}
                    <span class="active-line" v-if="activeIndex == 1"></span>
                </div>
            </div>
            <!-- 助记词/私钥 -->
            <div class="inputFwk">
                <div class="input-title">{{activeIndex == 0 ? $t('mnemonicPlaceholder') :$t('privateKeyPlaceholder')}}</div>
                <textarea class="input-area" placeholder="" v-model="text" />
                <!--<div class="error-msg">*当前助记词输入错误，请检查</div>-->
            </div>
            <!-- 提交按钮 -->
            <r-button width="87.3%" bgColor="$active" :text="$t('importStart') + (submitState ? '...' : '')" class="submit" @comfirm="submit" />
        </div>

        <r-modal :title="$t(`wallet.zhuanqian10`)"
                 @on-ok="submitPsw"
                 :show="isShowPswModal"
                 @on-cancel="isShowPswModal = false">
            <div class="inp-password">
                <input type="password" v-model="password" :placeholder="$t(`wallet.zhuanqian12`)">
            </div>
        </r-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                submitState: false,
                isShowPswModal: false,    // 0助记词，1私钥
                activeIndex: 0,    // 0助记词，1私钥
                text : "",
                password : "",
            };
        },
        methods: {
            async submitPsw (){
                if(this.submitState) return;
                this.submitState = true;
                this.account.verifyPassword(this.password).then(async () => {
                    this.isShowPswModal = false;
                    setTimeout(() => {
                        if(this.activeIndex == 0){
                            this.account.importMnemonic(this.text, this.password).then(data => {
                                this.submitState = false;
                                this.$router.push("/accountManage");
                                this.$toast.show(this.$t('importAddress') + this.$t('success'));
                            }).catch(e => {
                                this.submitState = false;
                                this.$toast.show(this.$t('mnemonic') + this.$t('error'));
                            });
                        }else{
                            this.account.importPrivate(this.text, this.password).then(data => {
                                // console.log(data);
                                this.submitState = false;
                                this.$router.push("/accountManage");
                                this.$toast.show(this.$t('importAddress') + this.$t('success'));
                            }).catch(e => {
                                this.submitState = false;
                                this.$toast.show(this.$t('privateKey') + this.$t('error'));
                            });
                        }
                    }, 0);
                }).catch(e => {
                    this.submitState = false;
                    this.$toast.show(this.$t('passwordError'));
                });
            },
            submit (){
                if(this.text.length <= 0){
                    if(this.activeIndex == 0){
                        this.$toast.show(this.$t('mnemonic') + this.$t('error'));
                    }else{
                        this.$toast.show(this.$t('privateKey') + this.$t('error'));
                    }
                    return;
                }
                if(this.activeIndex == 1 && !this.rcp.api.isValidSecret(this.text)){
                    this.$toast.show(this.$t('privateKey') + this.$t('error'));
                    return;
                }
                this.isShowPswModal = true;
            },
            selectTab(index) {
                this.activeIndex = index;
            }
        }
    };
</script>

<style lang="scss" scoped>
    .container {
        .content {
            margin-top: 60px;
            .tabs {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 10px 0;
                .tab {
                    font-size: 14px;
                    color: $color1;
                    position: relative;
                    width: 50%;
                    text-align: center;
                    &.active {
                        color: $active;
                    }
                    .active-line {
                        display: inline-block;
                        width: 22px;
                        height: 2px;
                        background-color: $active;
                        position: absolute;
                        bottom: -10px;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                }
            }
        }
        .inputFwk {
            padding: 17px;
            .input-title {
                font-size: 14px;
                color: $color1;
            }
            .input-area {
                background-color: $border2;
                border: none;
                margin-top: 20px;
                min-height: 240px;
                outline: none;
                width: 100%;
                padding: 20px;
                font-size: 14px;
                color: $active;
                overflow: hidden;
            }
            &.active {
                display: inline-block;
                width: 100%;
            }
            .error-msg{
                font-size: 12px;
                color: $up;
                margin-top: 12px;
            }
        }
        .submit{
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
</style>