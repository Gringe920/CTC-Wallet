<template>
  <section>
    <load v-if="loading"></load>
    
    <Header :title="user.bankcard_state==0?'添加银行卡':'修改银行卡'" />
    <div class="container" v-if="!loading">
      <div class="item-label">姓名</div>
      <input class="item-inp" type="text" placeholder="请输入姓名"  v-model="name" />
      <div class="line"></div>
      <div class="item-label">开户银行</div>
      <input class="item-inp" type="text" placeholder="请输入开户银行"  v-model="register_bank" />
      <div class="line"></div>
      <div class="item-label">银行卡号</div>
      <input class="item-inp" type="text" placeholder="请输入银行卡号"   v-model="card"/>
      <div class="line"></div>
      <div class="item-label">开户支行</div>
      <input class="item-inp" type="text" placeholder="请输入开户支行"  v-model="second_bank" />
      <div class="line"></div>
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
      name: "",
      register_bank: "",
      second_bank: "",
      card: "",
      getPayPathStatus: false,
      loading: true
    };
  },
  computed: {
    ...mapState(["user", "Bankkinfo"])
  },
  mounted() {
    this.getPayPath();
  },
  methods: {
    getPayPath() {
      var self = this;
      if (this.getPayPathStatus) return;
      var params = {
        uid: this.user.basicInfo.uid,
        paytype: 1
      };
      self.getPayPathStatus = true;
      this.axios({
        url: "/service/getPayPath",
        params
      })
        .then(res => {
          self.getPayPathStatus = false;
          this.$store.commit("Bankkinfo", res.data || {});
          this.name = res.data.name || "";
          this.register_bank = res.data.register_bank || "";
          this.second_bank = res.data.second_bank || "";
          this.card = res.data.card || "";
          this.loading = false;
        })
        .catch(err => {
          self.getPayPathStatus = false;
          this.$store.commit("Bankkinfo", {});
          this.loading = false;
        });
    },
    onConfirm(data) {
      console.log(data);
    },
    topwdshow() {
      this.pwdshow = true;
    },
    submit: function(pwd, code) {
      const { name, register_bank, card, second_bank } = this;
      if (this.isEmpty(name)) {
        this.$toast.show("姓名不能为空");
        return;
      }
      if (this.isEmpty(register_bank)) {
        this.$toast.show("开户银行不能为空");
        return;
      }
      if (this.isEmpty(card)) {
        this.$toast.show("银行卡号不能为空");
        return;
      }
      if (this.isEmpty(second_bank)) {
        this.$toast.show("开户支行不能为空");
        return;
      }
      var self = this;
      var params = {
        pwd: pwd,
        code: code,
        name: this.name,
        register_bank: this.register_bank,
        second_bank: this.second_bank,
        card: this.card
      };
      if (this.submitstatus) return;
      self.submitstatus = true;
      this.axios({
        url: "/service/addBankcard",
        params
      })
        .then(res => {
          self.submitstatus = false;
          if (this.user.bankcard_state == 0) {
            this.$toast.show("银行卡添加成功!");
          } else {
            this.$toast.show("银行卡修改成功!");
          }

          this.pwd = ""
            this.code = ""
            this.name = ""
            this.register_bank = ""
            this.second_bank = ""
            this.card = ""
          this.getPayPath();
             this.pwdshow = false;
        })
        .catch(err => {
          self.submitstatus = false;
              this.errorMsg(err.code)
             this.pwdshow = true;
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
      display: flex;
      justify-content: space-between;
      i.right {
        display: inline-block;
        width: 10px;
        background-size: 100% 100%;
        background-image: url("../../assets/images/next_black@2x.png");
        height: 10px;
        margin-left: 7px;
        vertical-align: middle;
      }
    }
  }
}
</style>