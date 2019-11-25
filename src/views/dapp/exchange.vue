<template>
  <section class="exchange">
      <Header title="兑换"
              :right-icon="require('../../assets/images/record@2x.png')"
              :right-ev="toAccept"
              />
      <div class="container">
        <div class="ex-content">
          <div class="ex-icon">
            <img src="../../assets/images/asset_circular@2x.png" alt="">
          </div>
          <div class="ex-count">
            <div class="row from">
              <span class="r-key">从</span>
              <span class="r-value">{{fromValue}}</span>
            </div>
            <div class="row to">
              <span class="r-key">到</span>
              <span class="r-value">{{toValue}}</span>
            </div>
            <div class="transfer" @click="transfer">
              <img src="../../assets/images/night_asset_switch@2x.png" alt="">
            </div>
          </div>
        </div>
        <div class="ex-coin">
          <p class="count-name">数量</p>
          <div class="inp-coin-count">
            <input type="text" placeholder="请输入数量"/>
            <div class="chose-type">
              <span class="c-name">BTC</span>
              <span class="line">|</span>
              <span class="c-all">全部</span>
            </div>
            
          </div>
          <div class="tips">*可用：0.0000 BTC；手续费：0.0000 RCP</div>
        </div>
      </div>
      <r-button text="确定" width="90%" class="btn-comfirm"></r-button>
      <r-modal title="安全密码"
             @on-ok="submit"
             :show="isShowModal"
             @on-cancel="isShowModal = false">
        <div class="inp-password">
          <input type="password" placeholder="请输入安全密码">
        </div>
      </r-modal>
  </section>
</template>

<script>
export default {
  data(){
    return {
      fromValue: 'BRC',
      toValue: 'RCP',
      isShowModal: false
    }
  },
  methods: {
    transfer(){
      let {fromValue, toValue} = this;
      [fromValue, toValue] = [toValue, fromValue]
      this.fromValue = fromValue;
      this.toValue = toValue;
    },
    submit(){

    },
    toAccept(){
      this.$router.push({ 
          path: "/acceptCoin",
          query: {
            type: 2
          }
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.exchange{
  .container{
    padding-top: 70px;
    margin: 0 15px;
    .ex-content{
      background: #2b2e3d;
      border-radius: 4px;
      display: flex;
      align-items: center;
      padding: 0 12px;
      position: relative;
      .ex-icon{
        margin-right: 12px;
        img{
          width: 6px;
        }
      }
      .ex-count{
        font-size: 14px;
        .row{
          padding: 16px 0;
          &.from{
            border-bottom: 1px solid rgba(31,35,50,1);
          }
        }
        span.r-key{
          margin-right: 20px;
          color: #687D9C;
        }
        span.r-value{
          color: #fff;
        }
      }
      .transfer{
        position: absolute;
        height: 100%;
        right: 0;
        top: 0;
        width: 18.8%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 50%;
        }
      }
    }
    .ex-coin{
      background: #2b2e3d;
      margin-top: 15px;
      padding: 15px;
      .count-name{
        font-size: 12px;
        color: #fff;
        margin-bottom: 12px;
      }
      .inp-coin-count{
        display: flex;
        font-size: 14px;
        justify-content:space-between;
        padding-bottom: 15px;
        border-bottom: 1px solid #1F2332;
        input{
          width: 69%;
          background-color: transparent;
          border: 0;
          line-height: 14px;
          color: #fff;
          &::placeholder{
            color: #7D8398;
          }
        }
        .chose-type{
          display: flex;

          span.c-name{
            color: #7D8398;
            margin-right: 10px;
          }
          span.line{
            margin-right: 10px;
            color: #7D8398;
          }
          span.c-all{
            color: #fff;
          }
        }
        
      }
      .tips{
        font-size: 12px;
        color: #7D8398;
        padding-top: 12px; 
      }
    }
  }
  .btn-comfirm{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
  }
}

</style>