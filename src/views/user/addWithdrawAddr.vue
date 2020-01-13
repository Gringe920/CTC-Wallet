<template>
  <section>
      <Header title="添加提币地址"/>
      <div class="container">
          <div  class="info-list">
          <div class="info-item">
                  <span class="i-k">币种</span>
                      <div class="turn-right">
                          <span>请选择币种</span>
                            <i></i>
                      </div>
                  <div class="line"></div>
              </div>
              <div class="info-item" @click="$router.push({path: '/nickname'})">
                  <span class="i-k">接收地址</span>
                      <div class="turn-right">
                          <span>请输入提币地址</span>
                            <i class="scan"></i>
                      </div>
                  <div class="line"></div>
              </div>
              <div class="info-item">
                  <span class="i-k">标签</span>
                      <div class="turn-right">
                          <span>用于表示这个地址自定义名称</span>
                      </div>
                  <div class="line"></div>
              </div>
              <div class="tips">
                  *请填写对应平台的提币地址，否则提币无法到账，由此造成的损失，本平台改不负责。
              </div>
              </div>
              
              <r-button text="确定" width="90%" class="comfirm"/>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{
    padding-top: 50px;
}
.info-list{
    padding: 0 15px;
    .tips{
        font-size: 12px;
        margin-top: 12px;
        color: #97A2AF;
    }
}
.info-item{
                display: flex;
                position: relative;
                font-size: 14px;
                justify-content: space-between;
                align-items: center;
                padding: 16px 0;
                .i-k{
                        color: $active;
                    }
                        .turn-right{
                            span{
                                font-size: 12px;
                                color: $color1
                            }
                            
                            i{
                                display: inline-block;
                                width: 10px;
                                background-size: 100% 100%;
                                background-image: url('../../assets/images/next_black@2x.png');
                                height: 10px;
                                margin-left: 7px;
                                vertical-align: middle;
                            }
                            i.scan{
background-image: url('../../assets/images/add_scan@2x.png');
width: 16px;
height: 16px;
                            }
                        }
                .line{
                    background-color: #F2F2F2;
                    height: 1px;
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                }
                
            }
                                    .comfirm{
    position: absolute;
    bottom: 20px;
    transform: translateX(-50%);
    left: 50%;
}
</style>