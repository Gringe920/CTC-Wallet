<template>
  <section>
   <Header title="添加微信" />
    <div class="container">
      <div class="item-label">姓名</div>
      <input class="item-inp" type="text" placeholder="请输入姓名" />
      <div class="line"></div>
      <div class="item-label">账号</div>
      <input class="item-inp" type="text" placeholder="请输入微信账号" />
      <div class="line"></div>
      <div class="upload-code">
        <div class="up-tit">上传微信收款二维码</div>
        <div class="upload-box">
          点击上传
            <input  value type="file" @change="upload($event)">
        </div>
        <div class="upload-img">{{erweima}}</div>
      </div>
      <div @click="getVerifyCode">获取验证码</div>
      <r-button
        text="确定"
        width="90%"
        class="btn-submit"

      :tocomfirm='submit'
      />
    </div>
  </section>
</template>

<script>
export default {

  data() {
    return {
      nickname: "我不爱冰阔落",
      submitstatus: false,
      pwd: "xiemei1234567",
      code: "123456",
      account: "15111487619",
      name: "xm",
      file: "1",
      erweima:'',
      VerifyCodeStatus: false,
      getStateError: 2,
      path: "nameAuth",
      fileData: {
        state: -1
      }
    };
  },
  methods: {
    upload(e) {
      var file = e.target.files[0];
      console.log()
      if (!/\.jpg$|\.png$|\.gif$|\.jpeg$|\.webp$/.test(file.name)) {
        this.fileData = {
          state: this.getStateError,
          message: "请上传jpg、jpeg、png、gif、webp格式图片"
        };
        // this.$emit("input", this.fileData);
        return;
      }
      // if (file.size > 1024 * 1024 * this.size) {
      //   this.fileData = {
      //     state: this.getStateError,
      //     // message: this.lang.imgFormatSize.replace("{size}", this.size + "M")
      //   };
      //   // this.$emit("input", this.fileData);
      //   return;
      // }
      let formData = new FormData();
      console.log(formData, "formData =========");
      console.log(file,'------file')
      formData.append("file", file, file.name);
      formData.append("path", this.path);
            console.log(formData, "formData =========");
      // if (process.env.NODE_ENV == "development") {
      //   formData.append("cookie", document.cookie);
      // }
      var fileVal = e.target.value;
      // console.log(e.target)
      console.log(fileVal)

      this.fileData = {
        state: this.getStateStart,
        progress: 0,
        file: fileVal
      };
      // console.log(fileData, "fileData");

      // this.$emit("input", this.fileData);
      // var self = this;
      // this.axios({
      //   url: this.api.upFiles,
      //   headers: {
      //     "Content-Type": "multipart/form-data"
      //   },
      //   timeout: 120000,
      //   onUploadProgress(progressEvent) {
      //     self.$emit(
      //       "input",
      //       Object.assign({}, self.fileData, {
      //         progress: Math.floor(
      //           (progressEvent.loaded / progressEvent.total) * 100
      //         )
      //       })
      //     );
      //   },
      //   data: formData
      // })
      //   .then(res => {
      //     this.$store.commit("msg", this.lang.uploadFile1);
      //     console.log(res);
      //     e.target.value = "";
      //     this.fileData = {
      //       state: this.getStateSuccess,
      //       data: res.data.url,
      //       origin: this.origin + res.data.url,
      //       message: this.lang.uploadFile1,
      //       file: fileVal
      //     };

      //     this.$emit("input", this.fileData);
      //   })
      //   .catch(err => {
      //     e.target.value = "";
      //     this.fileData = {
      //       state: this.getStateError,
      //       message: err.message,
      //       file: fileVal
      //     };
      //     this.$emit("input", this.fileData);
      //     this.$store.commit("msg", this.lang.uploadFile2);
      //   });
    },
    getVerifyCode() {
      var self = this;
      var demo;
      if (this.VerifyCodeStatus) return;
      self.VerifyCodeStatus = true;
      this.axios({
        url: "/c2c/getVerifyCode",
        params: {}
      })
        .then(res => {
          self.VerifyCodeStatus = false;
          this.$toast.show("获取C2C操作验证码成功!");
        })
        .catch(err => {
          self.VerifyCodeStatus = false;
          this.$toast.show({
            msg: err.message || "获取C2C操作验证码失败，请重试"
          });
        });
    },
    submit() {
      var self = this;
      // if(){
      //   return false;
      // }
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/addWechat",
        method: "post",
        header:{
            'Content-Type': 'multipart/form-data'
        },
        params: {
          pwd: self.pwd,
          code: self.code,
          account: self.account,
          name: self.name,
          file: self.fileData
        }
      })
        .then(res => {
          self.submitstatus = false;
          this.$toast.show("微信支付添加成功");
        })
        .catch(err => {
          self.submitstatus = false;
          this.$toast.show({ msg: err.message || "微信支付添加失败，请重试" });
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