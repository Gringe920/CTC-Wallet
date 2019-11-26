import Vue from "vue"
import VueI18n from "vue-i18n"

import zh from './lang/zh.json';
import zhCN from './lang/zh-CN.json'
import en from './lang/en.json'
import ru from './lang/ru.json'
Vue.use(VueI18n);

export default  new VueI18n({
    locale: 'zh',
    messages : {
        zh,
        zhCN,
        en,
        ru
    }
})