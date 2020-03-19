<template>
  <section>
        <load v-if="loading"></load>
   <Header :title="user.alipay_state==0?'添加支付宝':'修改支付宝'" />
    <div class="container"  v-if="!loading">
      <div class="item-label">姓名</div>
      <input class="item-inp" type="text" placeholder="请输入姓名" v-model="name" />
      <div class="line"></div>
      <div class="item-label" >账号</div>
      <input class="item-inp" type="text" placeholder="请输入支付宝账号" v-model="account" />
      <div class="line"></div>
      <div class="upload-code">
        <div class="up-tit">上传支付宝收款二维码</div>
        <div class="upload-box">
          点击上传
          <input  value type="file" @change="upload($event)">
          <!-- 上传成功，点击替换 -->
        </div>
        <div class="upload-img">
          <img :src="fileVal" alt="" srcset="">
        </div>
      </div>
      <r-button
        text="确定"
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
        this.$toast.show("请输入姓名！");
        return;
      }
      if (!account) {
        this.$toast.show("请输入支付宝账号！");
        return;
      }
      if (!fileVal) {
        this.$toast.show("请上传支付宝收款二维码！");
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
        this.$toast.show("请上传jpg、jpeg、png、gif、webp格式图片");
        return;
      }
      if (file.size > 1024 * 1024 * this.size) {
        this.$toast.show("请不要上传超过" + this.size + "M的图片");
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
        this.$toast.show("请上传png/jpg/jpeg格式的图片");
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
            this.$toast.show("支付宝修改成功!");
          } else {
            this.$toast.show("支付宝添加成功!");
          }
          this.pwdshow = false;
          this.getPayPath();
        })
        .catch(err => {
          self.submitstatus = false;
          if (this.user.alipay_state == 1) {
            this.$toast.show("支付宝添加失败");
          } else {
            this.$toast.show("支付宝添加失败");
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