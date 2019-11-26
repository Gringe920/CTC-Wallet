import Vue from 'vue';
const Wallet= require("rcp-offline-wallet");

function plugin(Vue, wallet) {

    if (plugin.installed) {
        return
    }
    plugin.installed = true;

    if (!wallet) {
        console.error('You have to install wallet');
        return
    }
    if (!wallet.Account) {
        console.error('You have to install Account');
        return
    }
    if (!wallet.RCP) {
        console.error('You have to install RCP');
        return
    }

    // Vue.account = wallet.Account;
    let account = new wallet.Account();
    account.getAccount();

    Object.defineProperties(Vue.prototype, {
        account: {
            get() {
                return account
            }
        },

    })
};
Vue.use(plugin, Wallet);


