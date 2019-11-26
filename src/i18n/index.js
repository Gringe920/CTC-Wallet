import Vue from "vue"
import VueI18n from "vue-i18n"

import zh from './lang/zh.js';
import zhCN from './lang/zh-CN.js'
import en from './lang/en.js'
import ru from './lang/ru.js'
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