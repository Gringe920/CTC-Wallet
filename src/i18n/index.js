import Vue from "vue"
import VueI18n from "vue-i18n"

import zh from './lang/zh';

Vue.use(VueI18n);

export default  new VueI18n({
    locale: 'zh',
    messages : {
        zh
    }
})