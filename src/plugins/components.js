import Vue from 'vue';
const header = () => import(/* webpackChunkName: "header" */ '../components/header');
const button = () => import(/* webpackChunkName: "header" */ '../components/button');

Vue.component('Header', header);
Vue.component('rButton', button);