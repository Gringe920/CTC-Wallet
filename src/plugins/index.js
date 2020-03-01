import Vue from "vue";

Vue.mixin({

    methods: {
        localDate(date, day, split = "-") {
            if (date) {
                day = day || false;
                date = date + "";
                if (/\./.test(date)) {
                    date = date * 1000 + "";
                }
                if (date.length == 10) {
                    date = date * 1000;
                }
                var d = new Date(Math.floor(date * 1));
                d = d ? d : new Date();
                if (day) {
                    if (day == -1) {
                        return (
                            this.twoLen(d.getMonth() + 1) +
                            split +
                            this.twoLen(d.getDate()) +
                            " " +
                            this.twoLen(d.getHours()) +
                            ":" +
                            this.twoLen(d.getMinutes()) +
                            ":" +
                            this.twoLen(d.getSeconds())
                        );
                    } else {
                        return (
                            this.twoLen(d.getHours()) +
                            ":" +
                            this.twoLen(d.getMinutes()) +
                            ":" +
                            this.twoLen(d.getSeconds())
                        );
                    }
                } else {
                    return (
                        d.getFullYear() +
                        split +
                        this.twoLen(d.getMonth() + 1) +
                        split +
                        this.twoLen(d.getDate()) +
                        " " +
                        this.twoLen(d.getHours()) +
                        ":" +
                        this.twoLen(d.getMinutes()) +
                        ":" +
                        this.twoLen(d.getSeconds())
                    );
                }
            } else {
                return "";
            }
        },
        transactionTypeText (item){
            if(item.type == 'trustline'){
                return this.$t('trust') + this.$t('gateway');
            }
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