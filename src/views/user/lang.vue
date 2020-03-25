<template>
    <div class="container">
        <Header :title="$t('user.userMsg62')"/>
        <div class="lang-list">
            <div class="lang-container">
                <div class="lang-item" 
                    @click="selectLang(item)"
                    v-for="(item, index) in langList"
                    :key="index">
                    <i class="icon" :class="item.icon"></i>
                    <p>{{item.name}}</p>
                    <i class="select selection" v-show="item.isSelect"></i>
                    <span class="line"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            langList: [{
                name: '中文简体',
                icon: 'china',
                isSelect: true,
                locale: 'zh'
            },{
                name: '中文繁体',
                icon: 'hongkong',
                isSelect: false,
                locale: 'zhCN'
            },{
                name: 'English',
                icon: 'usa',
                isSelect: false,
                locale: 'en'
            },{
                name: 'русский язык',
                icon: 'russia',
                isSelect: false,
                locale: 'ru'
            }],
            localeOption: ''
        }
    },
    created(){
        const localeOption = window.localStorage.getItem('localeOption');
        if(localeOption) this.setLangList(JSON.parse(localeOption))
    },
    methods: {
        selectLang(option){
            this.setLangList(option)
            window.localStorage.setItem('localeOption', JSON.stringify(option))
            this.$i18n.locale = option.locale;
            console.log(this.$i18n)
        },
        setLangList(option){
            if(option.name == 'zh' || option.name == 'zhCN'){
                this.$store.commit('adAddress', this.rcp_info.ad_cn_address);
            }else if(option.name == 'en'){
                this.$store.commit('adAddress', this.rcp_info.ad_en_address);
            }else{
                this.$store.commit('adAddress', this.rcp_info.ad_ru_address);
            }
            this.langList = this.langList.map(item => {
                item.isSelect = false
                if(item.name == option.name)  item.isSelect = true
                return item
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.container{
    .lang-list{
        margin-top: 50px;
    }
    .lang-container{
        margin: 0 15px;
    }
    .lang-item{
        display: flex;
        align-items: center;
        padding: 14px 0;
        position: relative;
        .icon{
            width: 20px;
            height: 20px;
            display: inline-block;
            background-size: 100% 100%;
            margin-right: 10px;
            &.china{
                background-image: url('../../assets/images/china@2x.png')
            }
            &.hongkong{
                background-image: url('../../assets/images/hongkong@2x.png')
            }
            &.usa{
                background-image: url('../../assets/images/usa@2x.png')
            }
            &.russia{
                background-image: url('../../assets/images/russia@2x.png')
            }
        }
        p{
            font-size: 14px;
            color: $active;
        }
        i.select{
            width: 14px;
            height: 14px;
            display: inline-block;
            background-size: 100% 100%;
            background-image: url('../../assets/images/selection@2x.png');
            position: absolute;
            right: 15px;
        }
        span.line{
            height:1px;
            background:#e5e5e5;
            position: absolute;
            bottom: 0;
            display: inline-block;
            width: 100%;
            left: 0;
        }
    }
}
</style>