import Vue from 'vue'
import Vuex from 'vuex'
import { mapState } from 'vuex'

Vue.use(Vuex);
Vue.mixin({
    computed : {
        ...mapState([
        
            'connected',
            'isjihuo',
            'balances',
            'balancesXRP',
            'moneyUnit',
            'moneyConvert',
            'coinVolume',
            'fee',
            'invite',
            'inviteAddress',
            'isBinding',
            'balancesBTC',
            'btcAddress',
            'balancesOthers',
            'adAddress',
            'adData',
            'btcDepositAddress',
            'inviteServe',
            'rcp_info',
            'isTrustBtc',
            'inviteX',
            'inviteY',
        ])
    },
});

// r3X73sspnDdFfohkEaUHM81uyMtHuupB7W   shpWCEKcks4PHi9XEcQnwDDchjZ2x
let inviteAddress = 'r3X73sspnDdFfohkEaUHM81uyMtHuupB7W';
// rfsxcm8AqdhCVz1re3bBn9pvwYtGtaTYEW   snt9XjibLt7TjEPYZW8LfLkHgmdo2
let btcAddress = 'rfsxcm8AqdhCVz1re3bBn9pvwYtGtaTYEW';
// rabp6QeFztgCXvjtrz7MuENAbSGxSMH5WQ   sn884U2pfdWqCRKFsSve7wHx3rMJY
let adAddress = 'rabp6QeFztgCXvjtrz7MuENAbSGxSMH5WQ';
export default new Vuex.Store({
    state: {
        user: {},//用户信息
        rcp_info : {},  // rcp_info  rcp 系统相关地址
        inviteAddress : inviteAddress,  // 激活地址
        btcAddress : btcAddress, // BTC 网关地址
        adAddress : adAddress, // 公告 网关地址
        btcDepositAddress : "", // BTC 充币地址
        invite : "",
        inviteX : "",
        inviteY : "",
        inviteServe : "",
        showNav : true,
        isBinding : false,
        isTrustBtc : false,
        connected : false,
        isjihuo : false, // 链激活状态
        balances : [],  // 链上全部资产余额
        balancesOthers : [],  // 链上除了XRP BTC 官方网关资产余额
        balancesXRP : {}, // 主链余额
        balancesXRPTotal : {}, // 主链余额
        balancesBTC : {}, // BTC余额
        moneyUnit : 'CNY', // ¥ 人民币 CNY， $ 美元 USD，₽ 俄罗斯 RUB
        moneyConvert : 1, // 当前当我 换算价格 1 XRP = 1 moneyUnit
        moneyConvertAll : {}, // 当前当我 换算价格 1 XRP = 1 moneyUnit
        coinVolume : [], // 当前地址货币列表
        fee : 0, // 手续费
        adData : [],  // 公告数据
        // 首页start
        buySellShow: false,
        buyType:'buy',
        type:'phone',
        //首页ens
        coin_list:[],
        assets_detail:{},
        withdraw_address_list:{},
        UserPendList:{},
        PendList:{},
        order_detail:{},
        addAlipayinfo:{}
    },
    mutations: {
        addAlipayinfo(state, val) {
            state.addAlipayinfo = val;
        },
        UserPendList(state, val) {
            state.UserPendList = val;
        },
        PendList(state, val) {
            state.PendList = val;
        },
        withdraw_address_list(state, val) {
            state.withdraw_address_list = val;
        },
        assets_detail(state, val) {
            state.assets_detail = val;
        },
        coin_list(state, val) {
            state.coin_list = val;
        },
        user(state, val) {
            state.user = val;
        },
        type (state, data) {
            state.type = data;
        },
        buyType (state, data) {
            state.buyType = data;
        },
        buySellShow (state, data) {
            state.buySellShow = data;
        },
        inviteX (state, data) {
            state.inviteX = data;
        },
        inviteY (state, data) {
            state.inviteY = data;
        },
        isTrustBtc (state, data) {
            state.isTrustBtc = data;
        },
        rcp_info (state, data) {
            state.rcp_info = data;
        },
        inviteServe (state, data) {
            state.inviteServe = data;
        },
        btcDepositAddress (state, data) {
            state.btcDepositAddress = data;
        },
        moneyConvertAll (state, data) {
            state.moneyConvertAll = data;
        },
        adData (state, data) {
            state.adData = data;
        },
        adAddress (state, data) {
            state.adAddress = data;
        },
        balancesOthers (state, data) {
            state.balancesOthers = data;
        },
        btcAddress (state, data) {
            state.btcAddress = data;
        },
        balancesBTC (state, data) {
            state.balancesBTC = data;
        },
        isBinding (state, data) {
            state.isBinding = data;
        },
        inviteAddress (state, data) {
            state.inviteAddress = data;
        },
        invite (state, data) {
            state.invite = data;
        },
        connected (state, data) {
            state.connected = data;
        },
        fee (state, data) {
            state.fee = data;
        },
        coinVolume (state, data) {
            state.coinVolume = data;
        },
        moneyConvert (state, data) {
            state.moneyConvert = data;
        },
        moneyUnit (state, data) {
            state.moneyUnit = data;
            state.moneyConvert = state.moneyConvertAll[state.moneyUnit.toLowerCase() + '_price'] || 1;
        },
        balancesXRP (state, data) {
            state.balancesXRP = data;
        },
        balances (state, data) {
            state.balances = data;
        },
        isjihuo (state, data) {
            state.isjihuo = data;
        },
        showNav (state, data) {
            state.showNav = data;
        },
        order_detail(state, val) {
            state.order_detail = val;
        },

    },
    actions: {

    }
});

