import Vue from "vue";
import Store from "../store/store";

Vue.mixin({

    methods: {
        transactionTypeText (item){
            return this.$t('wallet.fu')
        },
        clickBinding (){
            if(this.isjihuo == false){
                this.$toast.show(this.$t('home.home8'));
                return;
            }
            if(this.invite){
                this.$toast.show(this.$t('home.home13'));
            }else{
                this.$store.commit('isBinding', true);
            }
        },
        unitCoin (name){
            if(typeof name != 'string') {
                return '';
            }
            name = name.toUpperCase();
            if(name == this.$t('title').toUpperCase()){
                return 'XRP'
            }else if(name == 'XRP'){
                return this.$t('title').toUpperCase()
            }
            return name;
        },
        toRoute(path){
            this.$router.push({ path: path});
        }
    }
})