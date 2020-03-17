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
        // 判断为空
        isEmpty (obj) {//判断输入是否为空
            if (typeof obj == "undefined" || obj == null || obj == "") {
              return true;
            } else {
              const regu = "^[ ]+$";
              const re = new RegExp(regu);
              return re.test(obj);
              //return false;
            }
          },
        // 手机格式
        isValidPhone (value) {
            return this.isRegexMatched(value, {
              regex: /^[0-9]{11}$/,
              includeEmptyCheck: false
            });
          },
          isRegexMatched (value, {regex, includeEmptyCheck}) {
            return includeEmptyCheck
              ? this.isEmpty(value) && regex.test(value)
              : regex.test(value);
          },
        // 邮箱格式
        isValidEmail (value) {
            return this.isRegexMatched(value, {
              regex: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
              includeEmptyCheck: false
            });
          },
        //   图片路径
          imgUrl (url) {
            if ((/file/gi.test(location.href))) {
              return axios.defaults.baseURL + "/" + url;
            }
            let origin = process.env.NODE_ENV == "development"
                ? "http://47.240.110.55:9200"
                : window.location.origin;
        
            return origin  +'/'+ url;
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