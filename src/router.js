import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Wallet from './views/wallet/index.vue' //钱包首页
import AcceptCoin from './views/wallet/acceptCoin.vue' //钱包收款记录页面
import Advert from './views/user/advert.vue' //公告
import AdvertDetails from './views/user/advertDetails.vue' //公告详情
import shoukuan from './views/wallet/shoukuan.vue' //钱包收款记录页面

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
      path: '/wallet',
      name: 'wallet',
      component: Wallet
    },
    {
      path: '/shoukuan',
      name: 'shoukuan',
      component: shoukuan
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
