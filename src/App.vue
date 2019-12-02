<template>
    <div id="app">
        <router-view/>
        <div v-if="showNav" class="bg navall" >
            <router-link tag="a"   to="/home"   :class="($route.name=='empty'||$route.name=='home')?'nav-active':''">
                <div class="thenav">
                    <img src="./assets/images/home_press@2x.png" alt="" srcset="" v-if="$route.name=='home'" >
                    <img src="./assets/images/home@2x.png" alt="" srcset="" v-else >
                    <span class="nav-title">首页</span>
                </div>
            </router-link>
            <router-link tag="a" to="/dapp" :class="$route.name=='dapp'?'nav-active':''" >
                <div class="thenav">
                    <img src="./assets/images/dapp_press@2x.png" alt="" srcset="" v-if="$route.name=='dapp'" >
                    <img src="./assets/images/dapp@2x.png" alt="" srcset="" v-else >
                    <span class="nav-title" >DAPP</span>
                </div>
            </router-link>
            <router-link tag="a" to="/wallet" :class="$route.name=='wallet'?'nav-active':''" >
                <div class="thenav">
                    <img src="./assets/images/wallet_press@2x.png" alt="" srcset="" v-if="$route.name=='wallet'" >
                    <img src="./assets/images/wallet@2x.png" alt="" srcset="" v-else >
                    <span class="nav-title">钱包</span>
                </div>
            </router-link>
            <router-link tag="a" to="/user" :class="$route.name=='user'?'nav-active':''"  >
                <div class="thenav">
                    <img src="./assets/images/my_account@2x.png" alt="" srcset="" v-if="$route.name=='user'" >
                    <img src="./assets/images/my@2x.png" alt="" srcset="" v-else >
                    <span class="nav-title">我的</span>
                </div>
            </router-link>
        </div>
        <binding v-if="isBinding"></binding>
    </div>
</template>
<script>
    import { mapState } from "vuex";
    import Binding from "./components/binding";
    export default {
        name: "app",
        components: {Binding},
        data() {
            return {
                routeList: ['home', 'wallet', 'dapp', 'user']
            };
        },
        watch:{
            "$route"(n, o) {
                this.showBottomNav()
            }
        },
        methods: {
            showBottomNav(){
                this.$store.commit("showNav", this.shouldShowBottomNav());
            },
            shouldShowBottomNav(){
                return this.routeList.indexOf(this.$route.name) > -1
            },
        },
        created (){
            if((this.account.accounts.mnemonic == "" || this.account.accounts.address.length <= 0) && this.$route.name !='login'){
                this.toRoute('/login');
            };
        },
        mounted(){
            this.showBottomNav();
            // console.log(this.account.accounts);
            // this.account.createWallet('123456');
            // this.account.getAccount();
            // console.log(this.account.accounts.mnemonic);
        },
        computed: {
            ...mapState(['showNav'])
        },
    };
</script>

<style lang="scss">
    body,html{
        padding: 0;
        margin: 0;
        background: $bg;
    }
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background:$bg;
        .navall {
            background: $nav-bg;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: fixed;
            width: 100vw;
            height: 48px;
            bottom: 0;
            left: 0;
            .nav-active {
                color:  $active;
                span {
                    color:$active !important;
                }
            }
            .thenav {
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                    width: 25px;
                    height: 25px;
                }
                span {
                    font-size: 10px;
                    font-weight: 400;
                    color: $primary;
                }
            }
        }
    }
    // xm 2019/11/19
</style>
