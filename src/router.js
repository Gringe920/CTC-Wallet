import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

const User = () => import(/* webpackChunkName: "user" */ './views/user/index.vue');
const Info = () => import(/* webpackChunkName: "user" */ './views/user/info.vue');
const Lang = () => import(/* webpackChunkName: "user" */ './views/user/lang.vue');
const nickname = () => import(/* webpackChunkName: "user" */ './views/user/nickname.vue');
const about = () => import(/* webpackChunkName: "user" */ './views/user/about.vue');
const changePsw = () => import(/* webpackChunkName: "user" */ './views/user/changePsw.vue');
const changeTelephone = () => import(/* webpackChunkName: "user" */ './views/user/changeTelephone.vue');
const changeTradePsw = () => import(/* webpackChunkName: "user" */ './views/user/changeTradePsw.vue');
const setTradePsw = () => import(/* webpackChunkName: "user" */ './views/user/setTradePsw.vue');
const certification = () => import(/* webpackChunkName: "user" */ './views/user/certification.vue');
const uploadCertification = () => import(/* webpackChunkName: "user" */ './views/user/uploadCertification.vue');
const selectWithdrawAddr = () => import(/* webpackChunkName: "user" */ './views/user/selectWithdrawAddr.vue');
const addWithdrawAddr = () => import(/* webpackChunkName: "user" */ './views/user/addWithdrawAddr.vue');
const payway = () => import(/* webpackChunkName: "user" */ './views/payway/index.vue');
const selectPayway = () => import(/* webpackChunkName: "user" */ './views/payway/selectPayway.vue');
const addBank = () => import(/* webpackChunkName: "user" */ './views/payway/addBank.vue');
const searchBank = () => import(/* webpackChunkName: "user" */ './views/payway/searchBank.vue');
const addWechat = () => import(/* webpackChunkName: "user" */ './views/payway/addWechat.vue');
const addAlipay = () => import(/* webpackChunkName: "user" */ './views/payway/addAlipay.vue');

const login = () => import(/* webpackChunkName: "user" */ './views/login/index.vue');
const phoneRegist = () => import(/* webpackChunkName: "user" */ './views/login/phoneRegist.vue');
const emailRegist = () => import(/* webpackChunkName: "user" */ './views/login/emailRegist.vue');
const searchArea = () => import(/* webpackChunkName: "user" */ './views/login/searchArea.vue');
const forget = () => import(/* webpackChunkName: "user" */ './views/login/forget.vue');

const order = () => import(/* webpackChunkName: "user" */ './views/order/index.vue');
const publish = () => import(/* webpackChunkName: "user" */ './views/order/publish.vue');
const sellResult = () => import(/* webpackChunkName: "user" */ './views/order/result.vue');
const buyResult = () => import(/* webpackChunkName: "user" */ './views/order/buyResult.vue');
const status = () => import(/* webpackChunkName: "user" */ './views/order/status.vue');

//资产页面
const wallet = () => import(/* webpackChunkName: "ctc" */ './views/wallet/index.vue');
const address = () => import(/* webpackChunkName: "ctc" */ './views/wallet/address.vue');
const zhuanqian = () => import(/* webpackChunkName: "ctc" */ './views/wallet/zhuanqian.vue');//
const addAdress = () => import(/* webpackChunkName: "ctc" */ './views/wallet/addAdress.vue');//
const acceptCoin = () => import(/* webpackChunkName: "ctc" */ './views/wallet/acceptCoin.vue');//
const reCharge = () => import(/* webpackChunkName: "ctc" */ './views/wallet/reCharge.vue');//
const detais = () => import(/* webpackChunkName: "ctc" */ './views/wallet/detais.vue');//

//交易模块页面
const Ctc = () => import(/* webpackChunkName: "ctc" */ './views/ctc/index.vue');
const Orderstatus = () => import(/* webpackChunkName: "ctc" */ './views/ctc/Orderstatus.vue');
const chat = () => import(/* webpackChunkName: "ctc" */ './views/ctc/chat.vue');

Vue.use(Router)
export default new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    mode: (/file/gi.test(location.href)) ? 'hash' : process.env.NODE_ENV === 'production' ? 'hash' : 'history' ,
    // base: process.env.BASE_URL,
    base: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
    routes: [
        {
            path: '/',
            redirect: '/ctc'
        },
        {
            path: '/detais',
            name: 'detais',
            component: detais
        },
        {
            path: '/reCharge/:coin',
            name: 'reCharge',
            component: reCharge
        },
        {
            path: '/acceptCoin',
            name: 'acceptCoin',
            component: acceptCoin
        },
        {
            path: '/address',
            name: 'address',
            component: address
        },
        {
            path: '/addAdress',
            name: 'addAdress',
            component: addAdress
        },
        {
            path: '/wallet',
            name: 'wallet',
            component: wallet
        },
        {
            path: '/zhuanqian/:coin',
            name: 'zhuanqian',
            component: zhuanqian
        },
        {
            path: '/chat',
            name: 'chat',
            component: chat
        },
        {
            path: '/buyResult',
            name: 'buyResult',
            component: buyResult
        },
        {
            path: '/Orderstatus',
            name: 'Orderstatus',
            component: Orderstatus
        },
        {
            path: '/ctc',
            name: 'ctc',
            component: Ctc
        },
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: '/info',
            name: 'info',
            component: Info
        },
        {
            path: '/nickname',
            name: 'nickname',
            component: nickname
        },
        {
            path: '/lang',
            name: 'lang',
            component: Lang
        },
        {
            path: '/changePsw',
            name: 'changePsw',
            component: changePsw
        },
        {
            path: '/changeTelephone',
            name: 'changeTelephone',
            component: changeTelephone
        },
        // {
        //     path: '/buyResult',
        //     name: 'buyResult',
        //     component: buyResult
        // },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/changeTradePsw',
            name: 'changeTradePsw',
            component: changeTradePsw
        },
        {
            path: '/setTradePsw',
            name: 'setTradePsw',
            component: setTradePsw
        },
        {
            path: '/certification',
            name: 'certification',
            component: certification
        },
        {
            path: '/uploadCertification',
            name: 'uploadCertification',
            component: uploadCertification
        },
        {
            path: '/selectWithdrawAddr',
            name: 'selectWithdrawAddr',
            component: selectWithdrawAddr
        },
        {
            path: '/addWithdrawAddr',
            name: 'addWithdrawAddr',
            component: addWithdrawAddr
        },
        {
            path: '/payway',
            name: 'payway',
            component: payway
        },
        {
            path: '/selectPayway',
            name: 'selectPayway',
            component: selectPayway
        },
        {
            path: '/addBank',
            name: 'addBank',
            component: addBank
        },
        {
            path: '/searchBank',
            name: 'searchBank',
            component: searchBank
        },
        {
            path: '/addWechat',
            name: 'addWechat',
            component: addWechat
        },
        {
            path: '/addAlipay',
            name: 'addAlipay',
            component: addAlipay
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/phoneRegist',
            name: 'phoneRegist',
            component: phoneRegist
        },
        {
            path: '/emailRegist',
            name: 'emailRegist',
            component: emailRegist
        },
        {
            path: '/searchArea',
            name: 'searchArea',
            component: searchArea
        },
        {
            path: '/forget',
            name: 'forget',
            component: forget
        },
        {
            path: '/order',
            name: 'order',
            component: order
        },
        {
            path: '/publish',
            name: 'publish',
            component: publish
        },
        {
            path: '/sellResult',
            name: 'sellResult',
            component: sellResult
        },
        {
            path: '/status',
            name: 'status',
            component: status
        },
    ]
})
