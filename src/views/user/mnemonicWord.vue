<template>
  <div class="container">
      <Header title="备份助记词"/>
      <!-- 第一步 -->
      <div class="content" v-if="stepType == 0">
          <!-- tips -->
          <div class="tips">
              <p>请认真按顺序抄写下方{{data.length}}个助记词</p>
              <p>我们将在下一步验证</p>
          </div>
          <!-- 助记词列表  -->
          <div class="fill-in-world">
            <div class="fill-item" v-for="item in data">
                {{item}}
            </div>
          </div>
          <!-- 提交按钮 -->
          <r-button width="91%" text="下一步" class="submit" @comfirm="nextStep(1)"/>
      </div>

      <!-- 下一步 -->
      <div class="content" v-if="stepType == 1">
          <!-- tips -->
          <div class="tips">
              <p>请将您抄下的12个单词按正确顺序选择至下方</p>
          </div>
          <!-- 填写助记词  -->
          <div class="fill-in-world">
            <div class="fill-item" v-for="(item,i) in selectData" :key="item" @click="delWorld(item, i)">
                {{item}}
            </div>
          </div>
          <div class="error-msg" v-if="errorMsg">*{{errorMsg}}</div>
          <!-- 选择助记词列表 -->
          <div class="word-list">
              <div class="word-item active" v-for="(item,i) in randomData" :key="item" @click="selectWorld(item, i)">
                  {{item}}
              </div>
          </div>
          <!-- 提交按钮 -->
          <r-button width="91%"
                    text="确定"
                    class="submit"
                    @comfirm="comfirm"/>
      </div>

      <!-- 完成 -->
      <div class="content" v-if="stepType == 2">
          <div class="success-content">
              <img src="../../assets/images/private_key_success@2x.png" alt="">
              <p class="success-txt">地址助记词备份成功！</p>
              <div class="attention">
                  <p>请妥善保管您的助记词</p>
                  <p>请勿丢失或泄露给他人</p>
              </div>
          </div>
          <r-button width="91%"
                    text="完成"
                    class="submit"
                    @comfirm="done"/>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // stepType: 0, //0 1 2
            data : [],
            randomData : [],
            selectData : [],
            errorMsg : '',
        }
    },
    props: {
        mnemonic : String,
        stepType : 0,
    },
    watch : {
        selectData (){
            if(this.selectData.length == this.data.length && this.selectData.join('') != this.data.join('')){
                this.errorMsg = '助记词顺序不正确，请检查';
            }else{
                this.errorMsg = "";
            }
        }
    },
    mounted (){
        this.data = (this.mnemonic || '').split(' ');
        let data = (this.mnemonic || '').split(' ');
        for (let ran = 0; ran < this.data.length; ran ++){
            this.randomData.push(data.splice(Math.floor(Math.random() * data.length), 1)[0]);
        }
        // console.log(this.mnemonic);
    },
    methods: {
        delWorld(item, index){
            this.randomData.push(item);
            this.selectData.splice(index, 1);
        },
        selectWorld(item, index){
            this.selectData.push(item);
            this.randomData.splice(index, 1);
        },
        nextStep(index){
            this.$router.push({name : this.$router.name, params : {
                    mnemonic: this.mnemonic,
                    stepType : index
                }});
        },
        // 第二步
        comfirm(){
            if(this.selectData.join('') == this.data.join('')){
                this.nextStep(2);
            }else{
                this.errorMsg = '助记词顺序不正确，请检查';
            }
        },
        // 完成
        done(){
            this.$router.push('/');
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    overflow: hidden;
    .content{
        margin: 50px 0 0;
        padding: 30px 15px 0;
        border-top: solid 1px $border;
        .error-msg{
            font-size: 12px;
            color: $up;
            margin-top: 12px;
        }
        .tips{
            font-size: 14px;
            color: $white;
            margin-bottom: 22px;
        }
        .fill-in-world{
            display: flex;
            align-items: start;
            flex-wrap: wrap;
            background-color: $border2;
            border-radius:2px;
            opacity:0.6;
            text-align: center;
            padding: 15px;
            min-height: 160px;
            .fill-item{
                width: 33%;
                font-size: 14px;
                color: $white;
                padding: 15px 0;
            }
        }
        .fill-in{
            
            margin-bottom: 30px;
            textarea{
                background-color: $border2;
                border-radius:2px;
                height: 206px;
                width: 100%;
                border: 0;
            }
        }
        .word-list{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 30px;
            .word-item{
                background-color: $border2;
                color: $white;
                font-size: 14px;
                text-align: center;
                padding: 6px 0;
                width: 26%;
                margin-right: 10%;
                margin-bottom: 15px;
                &:nth-child(3n){
                    margin-right: 0;
                }
                &.active{
                    background-color: #1c333b;
                    color: $active;
                }
            }
        }
        .success-content{
            text-align: center;
            img{
                width: 7%;
                margin-bottom: 20px;
            }
            p.success-txt{
                color: $active;
                font-size: 14px;
                margin-bottom: 15px;
            }
            .attention  {
                font-size: 12px;
                color: $color1;
            }
            
        }
    }
    .submit{
        position: absolute;
        bottom: 20px;
    }
}
</style>