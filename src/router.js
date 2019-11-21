import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Wallet from './views/wallet/index.vue' //钱包首页
import AcceptCoin from './views/wallet/acceptCoin.vue' //钱包收款记录页面
import Advert from './views/user/advert.vue' //公告
import AdvertDetails from './views/user/advertDetails.vue' //公告详情
import shoukuan from './views/wallet/shoukuan.vue' //收款
import zhuanqian from './views/wallet/zhuanqian.vue' //转账
import detais from './views/wallet/detais.vue' //收款转账详情
import Dapp from './views/dapp/index.vue' //DAPP首页
import Trade from './views/trade/index.vue' //交易中心
import Download from './views/download' 
import Invite from "./views/invite"
import User from "./views/user"
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/trade',
      name: 'trade',
      component: Trade
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: Wallet
    },
    {
      path: '/dapp',
      name: 'dapp',
      component: Dapp
    },
    {
      path: '/shoukuan',
      name: 'shoukuan',
      component: shoukuan
    },
    {
      path: '/zhuanqian',
      name: 'zhuanqian',
      component: zhuanqian
    },
    {
      path: '/detais/:id',
      name: 'detais',
      component:detais
    },
    {
      path: '/advert',
      name: 'advert',
      component: Advert
    },
    {
      path: '/advertDetails',
      name: 'advertDetails',
      component: AdvertDetails
    },
    
    {
      path: '/acceptCoin',
      name: 'acceptCoin',
      component:AcceptCoin
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/invite',
      name: 'invite',
      component: Invite
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
