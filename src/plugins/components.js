import Vue from 'vue';
const header= () => import(/* webpackChunkName: "header" */ '../components/header');
Vue.component('Header', header);