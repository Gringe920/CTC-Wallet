<template>
  <section class="container">
    <Header :title="$t('user.userMsg21')" />
    <div class="info-container">
      <div class="info-list">
        <div class="info-item" @click="$router.push({path: '/nickname'})">
          <span class="i-k">{{$t('user.userMsg55')}}</span>
          <div class="turn-right">
            <span>{{user.basicInfo.username ?user.basicInfo.username :$t('user.userMsg56')}}</span>
            <i></i>
          </div>
          <div class="line"></div>
        </div>
        <div class="info-item">
          <span class="i-k">{{$t('user.userMsg2')}}</span>
          <div class="turn-right">
            <span>{{user.basicInfo.uid}}</span>
          </div>
          <div class="line"></div>
        </div>
        <div class="info-item" >
          <span class="i-k">{{$t('user.userMsg57')}}</span>
          <div class="turn-right">
            <span>{{user.basicInfo.phone}}</span>
          </div>
          <div class="line"></div>
        </div>
        <div class="info-item" @click="$router.push({path: '/changePsw'})">
          <span class="i-k">{{$t('user.userMsg58')}}</span>
          <div class="turn-right">
            <i></i>
          </div>
          <div class="line"></div>
        </div>
        <div  @click="logout()"   > 
          <r-button :text="$t('user.userMsg59')" width="90%" class="comfirm"/>
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
    ...mapState(["user",'UserChange'])
  },
  mounted(){
    this.$store.commit("UserChange", !this.UserChange);
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
          this.$toast.show(this.$t('user.userMsg60'));
          this.$router.push("/user");
        })
        .catch(err => {
          self.submitstatus = false;
            this.$toast.show(this.$t('user.userMsg61'));
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