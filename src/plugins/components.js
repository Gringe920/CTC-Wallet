import Vue from 'vue';
const header = () => import(/* webpackChunkName: "header" */ '../components/header');
const button = () => import(/* webpackChunkName: "header" */ '../components/button');
const qrcode = () => import(/* webpackChunkName: "header" */ '../components/qrcode');
const empty = () => import(/* webpackChunkName: "empty" */ '../components/empty');

Vue.component('Header', header);
Vue.component('rButton', button);
Vue.component('rQrcode', qrcode);
Vue.component('Empty', empty);