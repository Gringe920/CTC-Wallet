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
        ])
    },
});

// r3X73sspnDdFfohkEaUHM81uyMtHuupB7W   shpWCEKcks4PHi9XEcQnwDDchjZ2x
let inviteAddress = 'r3X73sspnDdFfohkEaUHM81uyMtHuupB7W';
// rfsxcm8AqdhCVz1re3bBn9pvwYtGtaTYEW   snt9XjibLt7TjEPYZW8LfLkHgmdo2
let btcAddress = 'rfsxcm8AqdhCVz1re3bBn9pvwYtGtaTYEW';

export default new Vuex.Store({
    state: {
        inviteAddress : inviteAddress,  // 激活地址
        btcAddress : btcAddress, // BTC 网关地址
        invite : "",
        showNav : true,
        isBinding : false,
        connected : false,
        isjihuo : false, // 链激活状态
        balances : [],  // 链上全部资产余额
        balancesOthers : [],  // 链上除了XRP BTC 官方网关资产余额
        balancesXRP : {}, // 主链余额
        balancesBTC : {}, // BTC余额
        moneyUnit : 'CNY', // ¥ 人民币 CNY， $ 美元 USD，₽ 俄罗斯 RUB
        moneyConvert : 1, // 当前当我 换算价格 1 XRP = 1 moneyUnit
        coinVolume : [], // 当前地址货币列表
        fee : 0, // 手续费
    },
    mutations: {
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

    },
    actions: {

    }
});

