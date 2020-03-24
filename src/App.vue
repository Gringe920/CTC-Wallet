<template>
    <div id="app">
        <router-view/>
        <div v-if="showNav" class="bg navall" >
            <router-link tag="a"   to="/ctc"   :class="($route.name=='empty'||$route.name=='home')?'nav-active':''">
                <div class="thenav">
                    <img src="./assets/images/home_transaction_press@2x.png" alt="" srcset="" v-if="$route.name=='ctc'" >
                    <img src="./assets/images/home_transaction@2x.png" alt="" srcset="" v-else >
                    <span class="nav-title">交易</span>
                </div>
            </router-link>
            <router-link tag="a" to="/order" :class="$route.name=='order'?'nav-active':''" >
                <div class="thenav">
                    <img src="./assets/images/home_order_press@2x.png" alt="" srcset="" v-if="$route.name=='order'" >
                    <img src="./assets/images/home_order@2x.png" alt="" srcset="" v-else >
                    <span class="nav-title" >订单</span>
                </div>
            </router-link>
            <router-link tag="a" to="/wallet" :class="$route.name=='wallet'?'nav-active':''" >
                <div class="thenav">
                    <img src="./assets/images/home_wallet_press@2x.png" alt="" srcset="" v-if="$route.name=='wallet'" >
                    <img src="./assets/images/home_wallet@2x.png" alt="" srcset="" v-else >
                    <span class="nav-title">资产</span>
                </div>
            </router-link>
            <router-link tag="a" to="/user" :class="$route.name=='user'?'nav-active':''"  >
                <div class="thenav">
                    <img src="./assets/images/home_my_press@2x.png" alt="" srcset="" v-if="$route.name=='user'" >
                    <img src="./assets/images/home_my@2x.png" alt="" srcset="" v-else >
                    <span class="nav-title">我的</span>
                </div>
            </router-link>
        </div>
        <binding v-if="isBinding"></binding>
        <trust-btc v-if="isTrustBtc"></trust-btc>
    </div>
</template>
<script>
import { mapState } from "vuex";
import Binding from "./components/binding";
import TrustBtc from "./components/trustBtc";
export default {
  name: "app",
  components: { TrustBtc, Binding },
  data() {
    return {
      userState: false,
      routeList: ["ctc", "wallet", "dapp", "user", "order"],
      submitstatus: false,
      loginCheckTimer: undefined
    };
  },
  watch: {
    $route(n, o) {
      this.showBottomNav();
            this.getUser();
    },
  },

  created() {
    this.removeLoad();
    this.plusReady();
    this.getcoin_list();
    this.getUser()
  },
  mounted() {
    this.showBottomNav();
  },
  computed: {
    ...mapState(["showNav", "user", "coin_list",'UserChange'])
  },
  methods: {
    getcoin_list() {
      var self = this;
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/coin_list",
        params: {}
      })
        .then(res => {
          self.submitstatus = false;
          this.$store.commit("coin_list", res.data || {});
          // this.$toast.show("获取币种成功!");
        })
        .catch(err => {
          self.submitstatus = false;
          this.$store.commit("coin_list", {});
          this.$toast.show({ msg: err.message || "币种信息获取失败，请重试" });
        });
    },
    getUser() {
      var self = this;
      this.axios({
        url: "/service/user_info"
      })
        .then(res => {
          var data = res.data.data || {};
          this.$store.commit("user", res.data);
          this.userState = true;
          this.removeLoad();
          // this.loginCheck();
         
        })
        .catch(err => {
          this.userState = true;
          // this.$router.push("login");
          this.$store.commit("user", {});
          this.removeLoad();
          // this.loginCheck();
        });
    },
    loginCheck() {
      if (this.userState
          && this.$route.name != "ctc"
            && this.$route.name != "user"
          && !!!(this.user.basicInfo && this.user.basicInfo.uid)
          && this.$route.name != "phoneRegist"
          && this.$route.name != "login"
          && this.$route.name != "forget"
      ) {
        this.$router.push("/login?origin=" + this.$route.name);
      }
      if (this.loginCheckTimer) {
        clearTimeout(this.loginCheckTimer);
        this.loginCheckTimer = undefined;
      }
      this.loginCheckTimer = setTimeout(() => {
        // this.getMyAeWallet();
      }, 5000);
    },
    dispark() {
      this.$toast.show(this.$t("dispark"));
    },
    backbutton() {
      let self = this;
      plus.key.addEventListener("backbutton", function(e) {
        let webview = plus.webview.getLaunchWebview();
        webview.canBack(function(e) {
          if (e.canBack) {
            webview.back();
          } else {
            plus.nativeUI.confirm(
              self.$t("exitAPP"),
              function(e) {
                if (e.index == 0) {
                  plus.runtime.quit();
                }
              },
              self.$t("title")
            );
          }
        });
      });
    },
    plusReady() {
      if (!/offlinewallet/gi.test(navigator.userAgent)) {
        return false;
      }
      let self = this;
      if (window.plus) {
        setTimeout(function() {
          self.updateApp();
          self.backbutton();
        }, 0);
      } else {
        document.addEventListener(
          "plusready",
          function() {
            self.updateApp();
            self.backbutton();
          },
          false
        );
      }
    },
    updateApp() {
      let self = this;
      this.axios({
        url: "/service/app_info"
      })
        .then(res => {
          let data = res.data;
          if (/android/gi.test(navigator.userAgent)) {
            if (plus.runtime.version != data.app_android_version) {
              if (/\.apk/gi.test(data.app_android_download)) {
                plus.nativeUI.confirm(
                  data.app_android_update_desc,
                  function(e) {
                    var task = plus.downloader.createDownload(
                      data.app_android_download,
                      {},
                      function(d, status) {
                        // console.log(d.filename);
                        if (status == 200) {
                          plus.runtime.install(
                            d.filename,
                            {
                              force: true
                            },
                            function(widgetInfo) {
                            },
                            function(err) {
                            }
                          );
                        } else {
                        }
                      }
                    );
                    task.start();
                  },
                  {
                    title: data.app_android_version,
                    buttons: [self.$t("confirm")]
                  }
                );
              } else {
                self.downloadFile(data.app_android_download);
              }
            } else {
              setTimeout(function() {
                self.updateApp();
              }, 8000);
            }
          } else {
            if (plus.runtime.version != data.app_ios_version) {
              if (/\.plist/gi.test(data.app_ios_download)) {
                plus.nativeUI.confirm(
                  data.app_ios_update_desc,
                  function(e) {
                    plus.runtime.openURL(data.app_ios_download, function(
                      openURLerr
                    ) {
                      console.log(openURLerr);
                      plus.runtime.openWeb(data.app_ios_download, function(
                        err
                      ) {
                        console.log(err);
                      });
                    });
                  },
                  {
                    title: data.app_ios_version,
                    buttons: [self.$t("confirm")]
                  }
                );
              } else {
                self.downloadFile(data.app_ios_download);
              }
            } else {
              setTimeout(function() {
                self.updateApp();
              }, 8000);
            }
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
          setTimeout(function() {
            self.updateApp();
          }, 8000);
        });
    },
    downloadFile(wgtUrl) {
      let self = this;
      plus.nativeUI.showWaiting(self.$t("updateApp.lang1"));
      var task = plus.downloader.createDownload(
        wgtUrl,
        { filename: "_doc/update/" },
        function(d, status) {
          console.log("下载成功：" + d.filename);
          if (status == 200) {
            self.installWgt(d.filename); // 安装wgt包
          } else {
            console.log("下载wgt失败！");
            plus.nativeUI.alert(self.$t("updateApp.lang2"));
          }
          plus.nativeUI.closeWaiting();
        }
      );

      task.start();
    },
    installWgt(path) {
      let self = this;
      plus.nativeUI.showWaiting(self.$t("updateApp.lang3"));
      plus.runtime.install(
        path,
        {},
        function() {
          plus.nativeUI.closeWaiting();
          plus.nativeUI.alert(self.$t("updateApp.lang4"), function() {
            plus.runtime.restart();
          });
        },
        function(e) {
          plus.nativeUI.closeWaiting();
          plus.nativeUI.alert(
            self.$t("updateApp.lang5") + "[" + e.code + "]：" + e.message
          );
        }
      );
    },
    removeLoad() {
      setTimeout(() => {
        if (document.querySelector("#app-load")) {
          document.querySelector("#app-load").remove();
        }
      }, 500);
    },
    showBottomNav() {
      this.$store.commit("showNav", this.shouldShowBottomNav());
    },
    shouldShowBottomNav() {
      return this.routeList.indexOf(this.$route.name) > -1;
    },
    loginPage() {
      if (
        this.account.accounts.address.length <= 0 &&
        this.$route.name != "login"
      ) {
        this.toRoute("/login");
      }
      // if((this.account.accounts.mnemonic == "" || this.account.accounts.address.length <= 0) && this.$route.name !='login'){
      //     this.toRoute('/login');
      // };
    }
  }
};
</script>

<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
  background: $bg;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $bg;
  .navall {
    background: $white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 48px;
    bottom: 0;
    left: 0;
    box-shadow: 0px 2px 14px 0px rgba(30, 49, 107, 0.1);
    .nav-active {
      color: $active;
      span {
        color: $active !important;
      }
    }
    .thenav {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        margin-bottom: 2px;
      }
      span {
        font-size: 10px;
        font-weight: 400;
        color: $primary;
      }
    }
  }
}
// xm 2019/11/19
</style>
