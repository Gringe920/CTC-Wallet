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
import lastOrder from './views/trade/lastOrder' //交易中心历史记录
import tradeDetails from './views/trade/tradeDetails' //交易中心对应k线深度图页面

import Download from './views/download' 
import Invite from "./views/invite"
import User from "./views/user"
import Lang from "./views/user/lang"
import AccountManage from './views/user/accountManage'
import ExportAddr from './views/user/exportAddr'
import MnemonicWord from './views/user/mnemonicWord'
import ChangeSecurePsw from './views/user/changeSecurePsw'

import Login from './views/login'
import Convolution from './views/dapp/convolution'
import Exchange from './views/dapp/exchange'
import DigMine from './views/dapp/digMine'
import HashGuess from './views/dapp/hashGuess'
import Sequence from './views/dapp/sequence'
import TradeCompaign from './views/dapp/tradeCompaign'
import NewbieReward from './views/dapp/newbieReward'
import XPowerCompaign from './views/dapp/xPowerCompaign'
import YPowerCompaign from './views/dapp/yPowerCompaign'
import AlphaPowerDetail from './views/dapp/alphaPowerDetail'
import BetaPowerDetail from './views/dapp/betaPowerDetail'

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
      path: '/tradeDetails',
      name: 'tradeDetails',
      component: tradeDetails
    },
    {
      path: '/lastOrder',
      name: 'lastOrder',
      component: lastOrder
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
      path: '/lang',
      name: 'lang',
      component: Lang
    },
    {
      path: '/changeSecurePsw',
      name: 'changeSecurePsw',
      component: ChangeSecurePsw
    },
    {
      path: '/accountManage',
      name: 'accountManage',
      component: AccountManage
    },
    {
      path: '/exportAddr',
      name: 'exportAddr',
      component: ExportAddr
    },
    {
      path: '/mnemonicWord',
      name: 'mnemonicWord',
      component: MnemonicWord
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/convolution',
      name: 'convolution',
      component: Convolution
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: Exchange
    },
    {
      path: '/digMine',
      name: 'digMine',
      component: DigMine
    },
    {
      path: '/hashGuess',
      name: 'hashGuess',
      component: HashGuess
    },
    {
      path: '/sequence',
      name: 'sequence',
      component: Sequence
    },
    {
      path: '/tradeCompaign',
      name: 'tradeCompaign',
      component: TradeCompaign
    },{
      path: '/newbieReward',
      name: 'newbieReward',
      component: NewbieReward
    },{
      path: '/xPowerCompaign',
      name: 'xPowerCompaign',
      component: XPowerCompaign
    },{
      path: '/yPowerCompaign',
      name: 'yPowerCompaign',
      component: YPowerCompaign
    },
    {
      path: '/alphaPowerDetail',
      name: 'alphaPowerDetail',
      component: AlphaPowerDetail
    },
    {
      path: '/betaPowerDetail',
      name: 'betaPowerDetail',
      component: BetaPowerDetail
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
