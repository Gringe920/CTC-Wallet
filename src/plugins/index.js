import Vue from "vue";

Vue.mixin({

    methods: {
        errorMsg(error_code,msg){
            var self  =this
          
            var errorMsg = this.$t("error.error"+ error_code )
            console.log(errorMsg)
            if( !errorMsg && msg) {
                    this.$toast.show(msg);
            }else{
                this.$toast.show(errorMsg);
            }
        },
      resolvingDate(date){
              let d = new Date(date);
            
              let month = (d.getMonth() + 1) < 10 ? '0'+(d.getMonth() + 1) : (d.getMonth() + 1);
              let day = d.getDate()<10 ? '0'+d.getDate() : d.getDate();
              let hours = d.getHours()<10 ? '0'+d.getHours() : d.getHours();
              let min = d.getMinutes()<10 ? '0'+d.getMinutes() : d.getMinutes();
              let sec = d.getSeconds()<10 ? '0'+d.getSeconds() : d.getSeconds();
            
              let times=d.getFullYear() + '-' + month + '-' + day 
              return times
            },
            resolvingDate3(date){
                let d = new Date(date);
              
                let month = (d.getMonth() + 1) < 10 ? '0'+(d.getMonth() + 1) : (d.getMonth() + 1);
                let day = d.getDate()<10 ? '0'+d.getDate() : d.getDate();
                let hours = d.getHours()<10 ? '0'+d.getHours() : d.getHours();
                let min = d.getMinutes()<10 ? '0'+d.getMinutes() : d.getMinutes();
                let sec = d.getSeconds()<10 ? '0'+d.getSeconds() : d.getSeconds();
              
                let times=d.getFullYear() + '-' + month + '-' + day + '  '+hours + ':' + min + ':' + sec;
                return times
              },
            resolvingHover(date){
                let d = new Date(date);
              
                let month = (d.getMonth() + 1) < 10 ? '0'+(d.getMonth() + 1) : (d.getMonth() + 1);
                let day = d.getDate()<10 ? '0'+d.getDate() : d.getDate();
                let hours = d.getHours()<10 ? '0'+d.getHours() : d.getHours();
                let min = d.getMinutes()<10 ? '0'+d.getMinutes() : d.getMinutes();
                let sec = d.getSeconds()<10 ? '0'+d.getSeconds() : d.getSeconds();
              
                let times= month + '-' + day +'   '+hours + ':' + min + ':' + sec;
              
                return times
              },
       
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
                console.log(date,day,split)
                if (day) {
                    console.log(day,'-----day')
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
        twoLen(val) {
            return val < 10 ? "0" + val : val;
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
              return this.axios.defaults.baseURL + "/" + url;
            }
            let origin = process.env.NODE_ENV == "development"
                ? "http://otcapi.goaladdin.org"
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