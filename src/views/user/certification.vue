<template>
  <section>
    <Header title="实名认证"/>
    <div class="container">
        <div class="inp-box">
            <span>真实姓名</span>
            <div class="inp">
                <input type="text" placeholder="请输入真实姓名"/>
            </div>
        </div>
        <div class="line"></div>
        <div class="inp-box">
            <span>证件类型</span>
            <div class="turn-right">
                <span>身份证</span>
                <i></i>
            </div>
        </div>
        <div class="line"></div>
        <div class="inp-box">
            <span>证件号码</span>
            <div class="inp">
                <input type="text" placeholder="请输入身份证号码"/>
            </div>
        </div>
        <div class="line"></div>
         <r-button text="下一步" width="90%" class="comfirm"/>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  padding: 50px 15px 0px;
  .inp-box{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;
      font-size: 14px;
      .inp{
          input{
              text-align: right;
          }
          
      }
  }
  .line{
                    background-color: #F2F2F2;
                    height: 1px;
                    width: 100%;
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
                        .comfirm{
    position: absolute;
    bottom: 20px;
    transform: translateX(-50%);
    left: 50%;
}
}

</style>