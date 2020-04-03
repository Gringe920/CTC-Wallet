<template>
  <section>
        <load v-if="loading"></load>
   <Header :title="user.wechat_state==1?$t(`pay.pay44`):$t(`pay.pay45`)" />
    <div class="container" v-if="!loading">
      <div class="item-label">{{$t(`pay.pay3`)}}</div>
      <input class="item-inp" type="text" :placeholder="$t(`pay.pay4`)" v-model="name" />
      <div class="line"></div>
      <div class="item-label">{{$t(`pay.pay5`)}}</div>
      <input class="item-inp" type="text" :placeholder="$t(`pay.pay46`)" v-model="account" />
      <div class="line"></div>
      <div class="upload-code">
        <div class="up-tit">{{$t(`pay.pay47`)}}</div>
        <div class="upload-box">
          <div>   {{$t(`pay.pay8`)}}</div>
            <input  value type="file" @change="upload($event)">
        </div>
        <div class="upload-img">
          <img :src="img" alt="" srcset="">
        </div>
        
      </div>
      <r-button
       :text="$t(`pay.pay9`)"
        width="90%"
        class="btn-submit"
        :tocomfirm='topwdshow'
      />
    </div>
    <Tradedialog v-on:onClose='pwdshow = !pwdshow'  v-on:onConfirm="submit" v-if="pwdshow"></Tradedialog>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      pwdshow: false,
      submitstatus: false,
      pwd: "",
      code: "",
      account: "",
      name: "",
      file: {},
      erweima: "",
      VerifyCodeStatus: false,
      getStateError: 2,
      loading: true,
      path: "nameAuth",
      getPayPathStatus: false,
      img: "",
      fileData: {
        state: -1
      },
      size: 4
    };
  },
  computed: {
    ...mapState(["user", "wechat_info"])
  },
  mounted() {
    this.getPayPath();
  },
  methods: {
    topwdshow() {
      const { name, account, img } = this;
      if (!name) {
        this.$toast.show(this.$t("pay.pay10"));
        return;
      }
      if (!account) {
        this.$toast.show(this.$t("pay.pay48"));
        return;
      }
      if (!img) {
        this.$toast.show(this.$t("pay.pay49"));
        return;
      }
      this.pwdshow = true;
    },
    upload(e) {
      let file = e.target.files[0];
      if (!/\.jpg$|\.png$|\.gif$|\.jpeg$|\.webp$/gi.test(file.name)) {
        this.$toast.show(this.$t("pay.pay13"));
        return;
      }
      if (file.size > 1024 * 1024 * this.size) {
        this.$toast.show(
          this.$t("pay.pay14") + this.size + this.$t("pay.pay15")
        );
        return;
      }
      this.file = e.target.files[0];
      const fileType = this.file.type;
      if (
        fileType === "image/png" ||
        fileType === "image/jpg" ||
        fileType === "image/jpeg"
      ) {
        const reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = e => {
          this.img = e.target.result;
        };
      } else {
        this.$toast.show(this.$t("pay.pay16"));

        this.file = {};
      }
    },
    submit: function(pwd, code) {
      var self = this;
      var formData = new FormData();
      var params = {
        pwd: pwd,
        code: code,
        name: this.name,
        account: this.account,
        file: new FormData()
      };
      formData.append("file", this.file, this.file.name);
      formData.append("name", this.name);
      formData.append("pwd", pwd);
      formData.append("code", code);
      formData.append("account", this.account);
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/addWechat",
        method: "post",
        header: {
          "Content-Type": "multipart/form-data"
        },
        data: formData
      })
        .then(res => {
          self.submitstatus = false;
          if (this.user.wechat_state == 1) {
            this.$toast.show(this.$t("pay.pay50"));
          } else {
            this.$toast.show(this.$t("pay.pay51"));
          }
          this.getPayPath();
          this.pwdshow = false;
        })
        .catch(err => {
          self.submitstatus = false;
          if (this.user.wechat_state == 1) {
            this.$toast.show(this.$t("pay.pay52"));
          } else {
            this.$toast.show(this.$t("pay.pay53"));
          }
          this.pwdshow = false;
        });
    },
    getPayPath() {
      var self = this;
      if (this.getPayPathStatus) return;
      var params = {
        uid: this.user.basicInfo.uid,
        paytype: 2
      };
      self.getPayPathStatus = true;
      this.axios({
        url: "/service/getPayPath",
        params
      })
        .then(res => {
          self.getPayPathStatus = false;
          this.$store.commit("wechat_info", res.data || {});
          var str = res.data.path;
          var index = str.lastIndexOf("/");
          this.img = this.imgUrl(str.substring(index + 1, str.length));
          this.name = res.data.name || "";
          this.account = res.data.account || "";
          this.loading = false;
        })
        .catch(err => {
          self.getPayPathStatus = false;
          this.$store.commit("wechat_info", {});
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  .container {
    padding-top: 50px;
    height: 100%;
    margin: 0 15px;
    .item-label {
      font-size: 12px;
      color: $active;
      margin-bottom: 15px;
      margin-top: 20px;
    }

    .item-inp {
      font-size: 14px;
      color: $active;
      outline: none;
      border: none;
      background: none;
      width: 100%;
      padding-bottom: 15px;
    }

    .upload-code {
      margin-top: 20px;

      .up-tit {
        font-size: 12px;
        color: $active;
        margin-bottom: 15px;
      }
      .upload-img {
        text-align: center;
        img {
          width: 100px;
          height: 100px;
        }
      }
      .upload-box {
        text-align: center;
        color: #1771ed;
        font-size: 16px;
        border-radius: 3px;
        padding: 12px 0;
        position: relative;
        border: 1px dashed #1771ed;
        margin-bottom: 20px;
        input {
          opacity: 0;
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          left: 0;
        }
      }
    }
  }
}
</style>