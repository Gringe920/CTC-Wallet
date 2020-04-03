<template>
  <section>
        <load v-if="loading"></load>
   <Header :title="user.alipay_state==0?$t(`pay.pay1`):$t(`pay.pay2`)" />
    <div class="container"  v-if="!loading">
      <div class="item-label">{{$t(`pay.pay3`)}}</div>
      <input class="item-inp" type="text" :placeholder="$t(`pay.pay4`)" v-model="name" />
      <div class="line"></div>
      <div class="item-label" >{{$t(`pay.pay5`)}}</div>
      <input class="item-inp" type="text" :placeholder="$t(`pay.pay6`)" v-model="account" />
      <div class="line"></div>
      <div class="upload-code">
        <div class="up-tit">{{$t(`pay.pay7`)}}</div>
        <div class="upload-box">
          {{$t(`pay.pay8`)}}
          <input  value type="file" @change="upload($event)">
        </div>
        <div class="upload-img">
          <img :src="fileVal" alt="" srcset="">
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
      getPayPathStatus: false,
      pwd: "",
      code: "",
      account: "",
      name: "",
      file: {},
      erweima: "",
      VerifyCodeStatus: false,
      getStateError: 2,
      path: "nameAuth",
      fileData: {
        state: -1
      },
      fileVal: "",
      size:4,
      loading: true
    };
  },
  mounted() {
    this.getPayPath();
  },
  computed: {
    ...mapState(["user", "addAlipayinfo"])
  },
  methods: {
    topwdshow() {
      const { name, account, fileVal } = this;
      if (!name) {
        this.$toast.show(this.$t('pay.pay10'));
        return;
      }
      if (!account) {
        this.$toast.show(this.$t('pay.pay11'));
        return;
      }
      if (!fileVal) {
        this.$toast.show(this.$t('pay.pay12'));
        return;
      }
      this.pwdshow = true;
    },
    getPayPath() {
      var self = this;
      if (this.getPayPathStatus) return;
      var params = {
        uid: this.user.basicInfo.uid,
        paytype: 3
      };
      self.getPayPathStatus = true;
      this.axios({
        url: "/service/getPayPath",
        params
      })
        .then(res => {
          self.getPayPathStatus = false;
          this.$store.commit("addAlipayinfo", res.data || {});
          var str = res.data.path;
          var index = str.lastIndexOf("/");
          this.fileVal = this.imgUrl(str.substring(index + 1, str.length));
          this.name = res.data.name || "";
          this.account = res.data.account || "";
          this.loading = false;
        })
        .catch(err => {
          self.getPayPathStatus = false;
          this.loading = false;
          this.$store.commit("addAlipayinfo", {});
        });
    },
    upload(e) {
      let file = e.target.files[0];
      if (!/\.jpg$|\.png$|\.gif$|\.jpeg$|\.webp$/gi.test(file.name)) {
        this.$toast.show(this.$t('pay.pay13'));
        return;
      }
      if (file.size > 1024 * 1024 * this.size) {
        this.$toast.show(this.$t('pay.pay14') + this.size + this.$t('pay.pay15'));
        return;
      }
      const fileType = file.type;
         this.file = e.target.files[0];
      if (
        fileType === "image/png" ||
        fileType === "image/jpg" ||
        fileType === "image/jpeg"
      ) {
         const reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onload = e => {
          this.fileVal = e.target.result;
        };
      } else {
        this.$toast.show(this.$t('pay.pay16'));
        this.file = {};
      }
   
    },
    submit: function(pwd, code) {
      var self = this;
      var formData = new FormData();
      formData.append("file", this.file, "file");
      formData.append("name", this.name);
      formData.append("pwd", pwd);
      formData.append("code", code);
      formData.append("account", this.account);
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/addAlipay",
        method: "post",
        header: {
          "Content-Type": "multipart/form-data"
        },
        data: formData
      })
        .then(res => {
          self.submitstatus = false;
          if (this.user.alipay_state == 1) {
            this.$toast.show(this.$t('pay.pay17'));
          } else {
            this.$toast.show(this.$t('pay.pay18'));
          }
          this.pwdshow = false;
          this.getPayPath();
        })
        .catch(err => {
          self.submitstatus = false;
          if (this.user.alipay_state == 1) {
            this.$toast.show(this.$t('pay.pay19'));
          } else {
            this.$toast.show(this.$t('pay.pay20'));
          }
                 this.pwdshow = false;
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
    .upload-img {
      text-align: center;
      img {
        width: 100px;
      }
    }
    .upload-code {
      margin-top: 20px;

      .up-tit {
        font-size: 12px;
        color: $active;
        margin-bottom: 15px;
      }
      .upload-box {
        text-align: center;
        color: #1771ed;
        font-size: 16px;
        border-radius: 3px;
        padding: 12px 0;
        border: 1px dashed #1771ed;
        margin-bottom: 20px;
        position: relative;
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