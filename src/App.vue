<template>
  <div id="app">
    <div id="nav">
      <router-view/>
    </div>
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
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "app",
  data() {
    return {
      showNav: true
    };
  }
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
