const {Account, RCP} = require("rcp-offline-wallet");
import Store from './store.js';


let account = new Account();
account.getAccount();

let rcp = new RCP({}, account.getAddress());

// rcp.option.server = 'ws://s1.goaladdin.org:7070';
rcp.option.server = 'ws://47.56.147.245:7070';
rcp.connected = upData;
rcp.connect();

rcp.api.on('ledger', ledger => {
    // console.log(JSON.stringify(ledger, null, 2));
    upData(ledger);
});


function upData(ledger) {
    if(ledger && ledger.transactionCount <= 0) return;

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
        console.log(e.message);
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
}

export default  {
    account,
    rcp
}