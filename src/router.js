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
import scanning from './views/wallet/scanning.vue' //扫一扫
import Dapp from './views/dapp/index.vue' //DAPP首页
import Trade from './views/trade/index.vue' //交易中心
import lastOrder from './views/trade/lastOrder' //交易中心历史记录
import tradeDetails from './views/trade/tradeDetails' //交易中心对应k线深度图页面

import Download from './views/download' //下载界面
import Invite from "./views/invite" //邀请
import User from "./views/user" //我的首页
import Lang from "./views/user/lang" //语言设置

import AccountManage from './views/user/accountManage' //账号管理
import ExportAddr from './views/user/exportAddr' //导出地址
import MnemonicWord from './views/user/mnemonicWord' //备份助记词
import ChangeSecurePsw from './views/user/changeSecurePsw' //修改安全密码
import AddrDetail from './views/user/addrDetail' //地址详情
import RemoveAddr from './views/user/removeAddr' //移除地址
import ExportSecretKey from './views/user/exportSecretKey' //导出私钥

import Login from './views/login' //登陆
import SetupAddr from './views/login/setupAddr' //创建地址
import importWallet from './views/login/importWallet' //导入钱包

import Convolution from './views/dapp/convolution' //卷积
import Exchange from './views/dapp/exchange' //兑换
import DigMine from './views/dapp/digMine' //挖矿
import HashGuess from './views/dapp/hashGuess' //竞猜
import Sequence from './views/dapp/sequence' //接龙
import TradeCompaign from './views/dapp/tradeCompaign' //交易大赛
import NewbieReward from './views/dapp/newbieReward' //新人奖
import XPowerCompaign from './views/dapp/xPowerCompaign' //X算力争霸
import YPowerCompaign from './views/dapp/yPowerCompaign' //Y算力竞赛
import AlphaPowerDetail from './views/dapp/alphaPowerDetail' //α算力明细
import BetaPowerDetail from './views/dapp/betaPowerDetail' //β算力明细

Vue.use(Router)
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/scanning',
            name: 'scanning',
            component:scanning
        },
        {
            path: '/importWallet',
            name: 'importWallet',
            component:importWallet
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
            component:detais,
            props: true
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
            redirect: '/acceptCoin/0'
        },
        {
            path: '/acceptCoin/:activeIdx',
            name: 'acceptCoin',
            component:AcceptCoin,
            props: true
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
            path: '/mnemonicWord/:mnemonic/:stepType',
            name: 'mnemonicWord',
            component: MnemonicWord,
            props: true
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
            path: '/addrDetail/:address',
            name: 'addrDetail',
            component: AddrDetail,
            props : true,
        },
        {
            path: '/removeAddr',
            name: 'removeAddr',
            component: RemoveAddr
        },
        {
            path: '/exportSecretKey/:address/:seed',
            name: 'exportSecretKey',
            component: ExportSecretKey,
            props : true
        },
        {
            path: '/setupAddr',
            name: 'setupAddr',
            component: SetupAddr
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
