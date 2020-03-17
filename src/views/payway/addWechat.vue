<template>
  <section>
   <Header :title="user.wechat_state==1?'修改微信':'添加微信'" />
    <div class="container">
      <div class="item-label">姓名</div>
      <input class="item-inp" type="text" placeholder="请输入姓名" v-model="name" />
      <div class="line"></div>
      <div class="item-label">账号</div>
      <input class="item-inp" type="text" placeholder="请输入微信账号" v-model="account" />
      <div class="line"></div>
      <div class="upload-code">
        <div class="up-tit">上传微信收款二维码</div>
        <div class="upload-box">
          <div>  点击上传</div>
            <input  value type="file" @change="upload($event)">
        </div>
        <div class="upload-img">
          <img :src="img" alt="" srcset="">
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
      pwd: "",
      code: "",
      account: "",
      name: "",
      file: {},
      erweima: "",
      VerifyCodeStatus: false,
      getStateError: 2,
      path: "nameAuth",
      getPayPathStatus: false,
      img: "",
      fileData: {
        state: -1
      },

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
      const {name, account, img} = this;
      if(!name){
        this.$toast.show("请输入姓名！");
        return;
      }
      if(!account){
        this.$toast.show("请输入支付宝账号！");
        return;
      }
      if(!img){
        this.$toast.show("请上传支付宝收款二维码！");
        return;
      }
      this.pwdshow = true;
    },
    upload(e) {
      this.file = e.target.files[0];
      const fileType = this.file.type;
      if(fileType === 'image/png' 
        || fileType === 'image/jpg'
        || fileType ==='image/jpeg'){
          const reader = new FileReader();
          reader.readAsDataURL(this.file);
          reader.onload = (e) => {
            this.img = e.target.result;
          }
      }else{
        this.$toast.show("请上传png/jpg/jpeg格式的图片");
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
            this.$toast.show("微信修改成功!");
          } else {
            this.$toast.show("微信添加成功!");
          }
          this.getPayPath();
        })
        .catch(err => {
          self.submitstatus = false;
          if (this.user.wechat_state == 1) {
            this.$toast.show("微信修改失败");
          } else {
            this.$toast.show("微信添加失败");
          }
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
        })
        .catch(err => {
          self.getPayPathStatus = false;
          this.$store.commit("wechat_info", {});
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