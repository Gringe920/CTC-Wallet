import Vue from 'vue';
import header from '../components/header'
const button = () => import(/* webpackChunkName: "components" */ '../components/button');
const qrcode = () => import(/* webpackChunkName: "components" */ '../components/qrcode');
const empty = () => import(/* webpackChunkName: "components" */ '../components/empty');
const countdown = () => import(/* webpackChunkName: "components" */ '../components/countdown');
const rankList = () => import(/* webpackChunkName: "components" */ '../components/rankList');
const powerDetail = () => import(/* webpackChunkName: "components" */ '../components/powerDetail');
const modal = () => import(/* webpackChunkName: "components" */ '../components/modal');
const copy = () => import(/* webpackChunkName: "components" */ '../components/copy');
const load = () => import(/* webpackChunkName: "components" */ '../components/load');
const rSwitch = () => import(/* webpackChunkName: "components" */ '../components/switch');
const tradedialog= () => import(/* webpackChunkName: "components" */ '../components/tradedialog');

Vue.component('Header', header);
Vue.component('rButton', button);
Vue.component('rQrcode', qrcode);
Vue.component('Empty', empty);
Vue.component('Countdown', countdown);
Vue.component('RankList', rankList);
Vue.component('PowerDetail', powerDetail);
Vue.component('rModal', modal);
Vue.component('rCopy', copy);
Vue.component('load', load);
Vue.component('rSwitch', rSwitch);
Vue.component('Tradedialog',tradedialog);