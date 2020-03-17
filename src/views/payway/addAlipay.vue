<template>
  <section>
   <Header :title="alipay_state==1?'添加支付宝':'x'" />
    <div class="container">
      <div class="item-label">姓名</div>
      <input class="item-inp" type="text" placeholder="请输入姓名" v-model="name" />
      <div class="line"></div>
      <div class="item-label" >账号</div>
      <input class="item-inp" type="text" placeholder="请输入微信账号" v-model="account" />
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
      fileVal: ""
    };
  },
  mounted() {
    this.getPayPath();
  },
  computed: {
    ...mapState(["user", "addAlipayinfo"])
  },
  methods: {
    getPayPath() {
      var self = this;
      console.log('sss')
      if (this.getPayPathStatus) return;
      var params = {
        uid: this.user.uid,
        paytype: 1
      };
      self.getPayPathStatus = true;
      this.axios({
        url: "/service/getPayPath",
        params: {}
      })
        .then(res => {
          self.getPayPathStatus = false;
          this.$store.commit("addAlipayinfo", res.data || {});
        })
        .catch(err => {
          self.getPayPathStatus = false;
        });
    },
    upload(e) {
      this.file = e.target.files[0];
      console.log(this.file);
    },
    submit: function(pwd, code) {
      var self = this;
      var formData = new FormData();
      formData.append("file", this.file, "file");
      formData.append("name", this.name);
      formData.append("pwd", pwd);
      formData.append("code", code);
      formData.append("account", this.account);
      console.log(this.file, "this.file========", this.file.name);
      console.log(formData, "--formData");
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
          this.$toast.show("支付宝添加成功!");
          this.getPayPath();
        })
        .catch(err => {
          self.submitstatus = false;
          console.log(" err.message");
          this.$toast.show({ msg: err.message || "支付宝添加失败" });
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
      .upload-box {
        text-align: center;
        color: #1771ed;
        font-size: 16px;
        border-radius: 3px;
        padding: 12px 0;
        border: 1px dashed #1771ed;
        margin-bottom: 20px;
      }
    }
  }
}
</style>