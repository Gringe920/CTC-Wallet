<template>
  <div class="container">
      <Header title="备份助记词"/>
      <!-- 第一步 -->
      <div class="content" v-if="stepType == 0">
          <!-- tips -->
          <div class="tips">
              <p>请认真按顺序抄写下方12个助记词</p>
              <p>我们将在下一步验证</p>
          </div>
          <!-- 助记词列表  -->
          <div class="fill-in-world">
            <div class="fill-item">
                ticket
            </div>
            <div class="fill-item">
                job
            </div>
            <div class="fill-item">
                cup
            </div>
            <div class="fill-item">
                cup
            </div>
            <div class="fill-item">
                cup
            </div>
          </div>
          <!-- 提交按钮 -->
          <r-button width="91%"
                    text="下一步"
                    class="submit"
                    @comfirm="nextStep(1)"/>
      </div>
      <!-- 下一步 -->
      <div class="content" v-if="stepType == 1">
          <!-- tips -->
          <div class="tips">
              <p>请将您抄下的12个单词按正确顺序输入至下方</p>
          </div>
          <!-- 填写助记词  -->
          <div class="fill-in-world">
            <div class="fill-item" v-for="(item, index) in choseWordList" :key="index">
                {{item.name}}
            </div>
          </div>
          <!-- 选择助记词列表 -->
          <div class="word-list">
              <div class="word-item" 
                   :class="{'active': index == wordActiveIndex}" 
                   v-for="(item, index) in wordList" 
                   :key="index"
                   @click="choseWorld(item, index)">
                  {{item.name}}
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
            stepType: 0, //0 1 2
            
            // 后台返回
            wordList: [
                {
                    name: 'ticket'
                },
                {
                    name: 'ticket1'
                },{
                    name: 'ticket2'
                },{
                    name: 'ticket3'
                },{
                    name: 'ticket4'
                }
            ],
            wordActiveIndex: 0,
            choseWordList: []
        }
    },
    methods: {
        choseWorld(item, index){
            this.choseWordList.push(item);
            this.wordActiveIndex = index
        },
        nextStep(index){
            this.stepType = index;
        },
        // 第二步
        comfirm(){
            console.log('----')
            this.nextStep(2);
        },
        // 完成
        done(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    .content{
        margin: 0 15px;
        padding-top: 60px;
        .tips{
            font-size: 14px;
            color: #fff;
            margin-bottom: 22px;
        }
        .fill-in-world{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            background-color: #323645;
            border-radius:2px;
            opacity:0.6;
            text-align: center;
            padding: 15px;
            .fill-item{
                width: 33%;
                font-size: 14px;
                color: #fff;
                padding: 15px 0;
            }
        }
        .fill-in{
            
            margin-bottom: 30px;
            textarea{
                background-color: #323645;
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
                background-color: #323645;
                color: #fff;
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
                    color: #00C28F;
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
                color: #00C28F;
                font-size: 14px;
                margin-bottom: 15px;
            }
            .attention  {
                font-size: 12px;
                color: #7D8398;
            }
            
        }
    }
    .submit{
        position: absolute;
        bottom: 20px;
    }
}
</style>