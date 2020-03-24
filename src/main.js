import Vue from 'vue'

import App from './App.vue'
// const App = () => import(/* webpackChunkName: "APPVue" */ './App.vue');
import router from './router'
import store from './store/store'
import i18n from './i18n/'
import './plugins/axios'
import './assets/css/common.scss'
import './plugins/components'
import './plugins/index'
import Toast from "@/components/toast"
// import "./plugins/wallet";
// import "./plugins/decimal";

Vue.use(Toast);
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
    if(to.name != 'ctc' 
        && to.name != 'user' 
        && to.name != 'phoneRegist'
        && to.name != 'login'
        && to.name != 'forget'
        && !!!(store.state.user.basicInfo && store.state.user.basicInfo.uid)){
        next({
            path: "/login?origin=" + to.name
        })
    }else{
        next()
    }
})