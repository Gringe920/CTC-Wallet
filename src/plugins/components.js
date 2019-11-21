import Vue from 'vue';
const header = () => import(/* webpackChunkName: "header" */ '../components/header');
const button = () => import(/* webpackChunkName: "header" */ '../components/button');
const qrcode = () => import(/* webpackChunkName: "header" */ '../components/qrcode');
Vue.component('Header', header);
Vue.component('rButton', button);
Vue.component('rQrcode', qrcode);