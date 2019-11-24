import Vue from 'vue';
const header = () => import(/* webpackChunkName: "header" */ '../components/header');
const button = () => import(/* webpackChunkName: "header" */ '../components/button');
const qrcode = () => import(/* webpackChunkName: "header" */ '../components/qrcode');
const empty = () => import(/* webpackChunkName: "empty" */ '../components/empty');
const countdown = () => import(/* webpackChunkName: "countdown" */ '../components/countdown');
const rankList = () => import(/* webpackChunkName: "rankList" */ '../components/rankList');
const powerDetail = () => import(/* webpackChunkName: "powerDetail" */ '../components/powerDetail');

Vue.component('Header', header);
Vue.component('rButton', button);
Vue.component('rQrcode', qrcode);
Vue.component('Empty', empty);
Vue.component('Countdown', countdown);
Vue.component('RankList', rankList);
Vue.component('PowerDetail', powerDetail);