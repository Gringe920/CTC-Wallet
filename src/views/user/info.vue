<template>
  <section class="container">
      <Header title="我的资料"/>
      <div class="info-container">
          <div class="info-list">
              <div class="info-item" @click="$router.push({path: '/nickname'})">
                  <span class="i-k">昵称</span>
                      <div class="turn-right">
                          <span>Parren</span>
                            <i></i>
                      </div>
                  <div class="line"></div>
              </div>
              <div class="info-item">
                  <span class="i-k">UID</span>
                      <div class="turn-right">
                          <span>80006744</span>
                      </div>
                  <div class="line"></div>
              </div>
              <div class="info-item" @click="$router.push({path: '/changeTelephone'})">
                  <span class="i-k">修改手机号</span>
                      <div class="turn-right">
                          <span>13823240888</span>
                            <i></i>
                      </div>
                  <div class="line"></div>
              </div>
              <div class="info-item" @click="$router.push({path: '/changeSecurePsw'})">
                  <span class="i-k">修改登录密码</span>
                      <div class="turn-right">
                            <i></i>
                      </div>
                  <div class="line"></div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{
    height: 100%;
    margin-top: 50px;
    .info-container{
        margin: 0 15px;
        .info-list{
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
                        }
                .line{
                    background-color: #F2F2F2;
                    height: 1px;
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                }
                
            }
        }
    }
}
</style>