<template>
  <div class="container">
    <div class="userinfo" @click="$router.push({path: '/info'})">
      <div class="avatar">
        <img src="../../assets/images/china@2x.png" alt />
      </div>
      <div class="info">
        <div class="name" v-if="!user.uid" @click="toRoute('login')">请先登陆</div>
        <div class="name" v-if="user.uid">{{user.username || '我是谁'}}</div>
        <div class="uid" v-if="user.uid">UID: {{user.uid}}</div>
      </div>
      <div class="turn-right">
        <i></i>
      </div>
    </div>
    <div class="user-navigation">
      <div class="user-nav-item" @click="$router.push({path: '/payway'})">
        <i class="icon my_receivables"></i>
        <p>收款方式</p>
        <div class="turn-right">
          <span>{{isjihuo && invite.length ? $t(`home.home13`) : isjihuo ? $t(`home.home12`) : $t(`home.home6`)}}</span>
          <i></i>
        </div>
      </div>
      <div class="user-nav-item" @click="$router.push({path: '/address'})">
        <i class="icon my_extract"></i>
        <p>提币地址</p>
        <div class="turn-right">
          <i></i>
        </div>
      </div>
      <div class="user-nav-item" @click="$router.push({path: '/certification'})">
        <i class="icon my_identity"></i>
        <p>身份认证</p>
        <div class="turn-right">
          <i></i>
        </div>
      </div>
      <div v-if='user.deal_pwd_state == 0' class="user-nav-item" @click="$router.push({path: '/setTradePsw'})">
        <i class="icon my_lock"></i>
        <p>交易密码</p>
        <div class="turn-right">
          <span>未设置</span>
          <i></i>
        </div>
      </div>
      <div class="user-nav-item" @click="$router.push({path: '/changeTradePsw'})">
        <i class="icon my_lock"></i>
        <p>交易密码</p>
        <div class="turn-right">
          <span>已设置</span>
          <i></i>
        </div>
      </div>
      <div class="user-nav-item" @click="$router.push({path: '/lang'})">
        <i class="icon my_language"></i>
        <p>多语言</p>
        <div class="turn-right">
          <span>
            {{
            $i18n.locale == 'en' ? 'English' : $i18n.locale == 'ru' ? 'русский язык' : $i18n.locale == 'zhCN' ? '中文繁体' : '中文简体'
            }}
          </span>
          <i></i>
        </div>
      </div>
      <div class="user-nav-item" @click="$router.push({path: '/about'})">
        <i class="icon my_about"></i>
        <p>关于我们</p>
        <div class="turn-right">
          <i></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      submitstatus: false
    };
  },
  created() {
    this.getLoginInfo();
  },
   computed: {
    ...mapState(['user'])
  },
  methods: {
    getLoginInfo() {
      var self = this;
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/user_info",
        params: {}
      })
        .then(res => {
          self.submitstatus = false;
            this.$store.commit("user", res.data || {});
          localStorage.setItem("user_info", res.data || {});
          this.$toast.show("用户信息获取成功!");
        })
        .catch(err => {
          self.submitstatus = false;
          this.$router.push("login");
          this.$store.commit("user", {});
          this.$toast.show({ msg: err.message || "用户信息获取失败，请重试" });
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  background-color: #fff;
  .turn-right {
    position: absolute;
    right: 0;

    span {
      font-size: 12px;
      color: $color1;
    }
    i {
      display: inline-block;
      width: 10px;
      background-size: 100% 100%;
      background-image: url("../../assets/images/next_black@2x.png");
      height: 10px;
      margin-left: 7px;
    }
  }
  .userinfo {
    display: flex;
    align-items: center;
    padding: 40px 0;
    position: relative;
    margin: 0 30px;
    .avatar {
      width: 9.6%;
      margin-right: 15px;
      img {
        width: 100%;
      }
    }
    .info {
      .name {
        font-size: 19px;
        color: $active;
      }
      .uid {
        font-size: 12px;
        color: $color1;
      }
    }
  }
  .user-navigation {
    padding: 0 15px;
    margin: 0 15px;
    .user-nav-item {
      display: flex;
      align-items: center;
      padding: 15px 0;
      position: relative;

      i.icon {
        display: inline-block;
        width: 18px;
        height: 18px;
        background-size: 100% 100%;
        margin-right: 24px;
      }
      .my_receivables {
        background-image: url("../../assets/images/my_receivables@2x.png");
      }
      .my_extract {
        background-image: url("../../assets/images/my_extract@2x.png");
      }
      .my_identity {
        background-image: url("../../assets/images/my_identity@2x.png");
      }
      .my_lock {
        background-image: url("../../assets/images/my_lock@2x.png");
      }
      .my_language {
        background-image: url("../../assets/images/my_language@2x.png");
      }
      .my_about {
        background-image: url("../../assets/images/my_about@2x.png");
      }
      p {
        font-size: 14px;
        color: $active;
      }
    }
  }
}
</style>