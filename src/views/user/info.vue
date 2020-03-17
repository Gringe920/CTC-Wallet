<template>
  <section class="container">
    <Header title="个人信息" />
    <div class="info-container">
      <div class="info-list">
        <div class="info-item" @click="$router.push({path: '/nickname'})">
          <span class="i-k">昵称</span>
          <div class="turn-right">
            <span>{{user.basicInfo.username ?user.basicInfo.username :'去设置'}}</span>
            <i></i>
          </div>
          <div class="line"></div>
        </div>
        <div class="info-item">
          <span class="i-k">UID</span>
          <div class="turn-right">
            <span>{{user.basicInfo.uid}}</span>
          </div>
          <div class="line"></div>
        </div>
        <div class="info-item" >
          <span class="i-k">手机号</span>
          <div class="turn-right">
            <span>{{user.basicInfo.phone}}</span>
          </div>
          <div class="line"></div>
        </div>
        <div class="info-item" @click="$router.push({path: '/changePsw'})">
          <span class="i-k">修改登录密码</span>
          <div class="turn-right">
            <i></i>
          </div>
          <div class="line"></div>
        </div>
        <div  @click="logout()"   > 
          <r-button text="登出" width="90%" class="comfirm"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      submitstatus: false
    };
  },
    computed: {
    ...mapState(["user"])
  },
  methods: {
    logout() {
      var self = this;
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/logout",
        params: {
        }
      })
        .then(res => {
          self.submitstatus = false;
          this.$toast.show("登出成功!");
          console.log(res);
          this.$router.push("/user");
        })
        .catch(err => {
          self.submitstatus = false;
            this.$toast.show({ msg:  "登出出失败，请重试" });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.comfirm {
  position: absolute;
  bottom: 20px;
  transform: translateX(-50%);
  left: 50%;
}
.container {
  height: 100%;
  padding-top: 50px;

  .info-container {
    margin: 0 15px;
    .info-list {
      .info-item {
        display: flex;
        position: relative;
        font-size: 14px;
        justify-content: space-between;
        align-items: center;
        padding: 16px 0;
        .i-k {
          color: $active;
        }
        .turn-right {
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
            vertical-align: middle;
          }
        }
        .line {
          background-color: #f2f2f2;
          height: 1px;
          width: 100%;
          position: absolute;
          bottom: 0;
        }
      }
    }
  }
}
</style>