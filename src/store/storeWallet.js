const {Account, RCP} = require("rcp-offline-wallet");
import Store from './store.js';

import axios from '../plugins/axios';

function plusReady(callback) {
    if(/offlinewallet/gi.test(navigator.userAgent)){
        if(window.plus) {
            setTimeout(function() {
                callback();
            }, 0);
        } else {
            document.addEventListener("plusready", function() {
                callback();
            }, false);
        }
    }else{
        callback();
    }
};


let timeOut = 1500;

function getPrice() {
    axios({
        url : "/service/price_info",
    }).then(res => {
        // console.log(res.data);
        Store.commit('moneyConvertAll', res.data || {});
        Store.commit('moneyConvert', (res.data && res.data[Store.state.moneyUnit.toLowerCase() + '_price']) || 1);
    }).catch(e => {
        console.log(e.message);
        Store.commit('moneyConvertAll', {});
        Store.commit('moneyConvert', 1);
    });
}

function getBase (){
    axios({
        url : "/service/rcp_info",
        params : {
        }
    }).then(res => {
        // console.log(res);
        // rcp.option.server = 'ws://s1.goaladdin.org:7070';
        rcp.option.server = 'ws://47.56.147.245:7070';
        rcp.connect();
    }).catch(e => {
        console.log(e.message);
        setTimeout(getBase, timeOut);
    });
};


// /service/login_info?address=rLRYTN7ovVayaqk7ksRDLyySw2hZP6L5cy
function getAddressInfo() {
    axios({
        url : "/service/login_info",
        params : {
            address : account.getAddress()
        }
    }).then(res => {
        console.log(res);
        Store.commit('btcDepositAddress', res.data.btcAddress || "");
        Store.commit('inviteServe', res.data.inviter || "");
    }).catch(e => {
        console.log(e.message);
        Store.commit('btcDepositAddress', "");
        Store.commit('inviteServe', "");
        setTimeout(getAddressInfo, timeOut);
    });
}
let account = new Account();
let rcp = new RCP({}, "");

plusReady(function () {
    account.getAccount();

    rcp.address = account.getAddress();

    rcp.connected = upData;
    rcp.api.on('ledger', ledger => {
        // console.log(JSON.stringify(ledger, null, 2));
        upData(ledger);
    });
    getPrice();
    getBase();
    getAddressInfo();
});

function upData(ledger) {
    // console.log(ledger && ledger.transactionCount <= 0 && rcp.address == account.getAddress());
    if(ledger && ledger.transactionCount <= 0 && rcp.address == account.getAddress()) return;

    getPrice();

    rcp.address = account.getAddress();
    //
    // console.log(rcp.address);
    // console.log(rcp.option);
    Store.commit('connected', true);

    rcp.getBalances().then(data => {
        var coinVolume = [];
        var balancesOthers = [];
        if(Array.isArray(data)){
            data.forEach((item, index) => {
                if(coinVolume.indexOf(item.currency) < 0){
                    coinVolume.push(item.currency);
                }
                if(item.currency.toUpperCase() == 'BTC' && item.counterparty == Store.state.btcAddress){
                    Store.commit('balancesBTC', item);
                }else{
                    if(item.currency != rcp.currency){
                        balancesOthers.push(item);
                    }
                }
            });
        }
        Store.commit('balancesXRP', data[0] || {});
        Store.commit('balancesOthers', balancesOthers);
        Store.commit('coinVolume', coinVolume);
        Store.commit('balances', data);
        Store.commit('isjihuo', true);
    }).catch(e => {
        // console.log(e.message);
        Store.commit('balancesXRP', {});
        Store.commit('balancesOthers', []);
        Store.commit('isjihuo', false);
        Store.commit('balances', []);
        Store.commit('coinVolume', []);
    });

    rcp.api.getFee().then(data => {
        Store.commit('fee', data);
    }).catch(e => {
        Store.commit('fee', 0);
    });


    if(Store.state.invite.length <= 0){
        rcp.api.getTransactions(rcp.address, {
            counterparty : Store.state.inviteAddress,
            binary : true,
            initiated : true,
            excludeFailures : true,
            limit : 100,
        }).then(data => {
            if(data.length > 0){
                data.reverse();
                for(let i = 0; i < data.length; i++){
                    if(data[i].specification && data[i].specification.memos && data[i].specification.memos[0].data){
                        Store.commit('invite', data[i].specification.memos[0].data);
                        break;
                    }
                }
            }else{
                Store.commit('invite', "");
            };
        }).catch(e => {
            console.log(e);
        });
    }

    rcp.api.getTransactions(Store.state.adAddress, {
        binary : true,
        initiated : true,
        excludeFailures : true,
        limit : 100,
    }).then(data => {
        let ad = [];
        // console.log(data);
        data.forEach(item => {
            if(item.specification && item.specification.memos){
                let memos = item.specification.memos[0] || {};
                if(memos.data){
                    try {
                        let d = JSON.parse(memos.data);
                        d.date = item.outcome.ledgerVersion;
                        if(d.author){

                        }else{
                            d.author = item.address;
                        }
                        d.id = item.id;
                        ad.push(d);
                    }catch (e) {

                    }
                }
            }
        });
        // console.log(ad);
        Store.commit('adData', ad);
    }).catch(e => {
        console.log(e);
        Store.commit('adData', []);
    });

    // rabp6QeFztgCXvjtrz7MuENAbSGxSMH5WQ
}

export default  {
    account,
    rcp
}