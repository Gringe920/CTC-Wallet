import Vue from "vue"
import VueI18n from "vue-i18n"

import zh from './lang/zh.json';
import zhCN from './lang/zh-tw.json'
import en from './lang/en.json'
import ru from './lang/ru.json'
Vue.use(VueI18n);
let  vueI18n =  new VueI18n({
    locale: 'zh',
    messages : {
        zh,
        zhCN,
        en,
        ru
    }
});

export default vueI18n;