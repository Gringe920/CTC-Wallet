<template>
    <div class="container">
        <Header title="卷积"/>
        <div class="content">
            <div class="percent common-bg">
                <div class="c-title">
                    <i></i>当前卷积比例
                </div>
                <div class="count">
                    0.00015 BTC
                </div>
            </div>
            <div class="convolut-list common-bg">
                <div class="con-row">
                    <div class="name">下一层卷积</div>
                    <div class="value">0.00018 BTC</div>
                </div>
                <div class="con-row">
                    <div class="name">当前层卷积</div>
                    <div class="value green">剩余8499 RCP(75%)</div>
                </div>
                <div class="con-row">
                    <div class="name">上一层卷积</div>
                    <div class="value">0.00018 BTC</div>
                </div>
            </div>
            <div class="profit">
                <div class="pro-title">
                    <p class="p-tit">推广收益</p>
                    <div class="tips">
                        <span><i></i>α卷积</span>
                        <span><i></i>β卷积</span>
                    </div>
                </div>
                <div class="process-bars">
                    <div class="bar green" style="width: 100%">100</div>
                    <div class="bar blue" style="width: 40%">40</div>
                </div>
            </div>
            <r-button text="兑换" class="convolut-btn"
                      @comfirm="$router.push({'path': '/exchange'})"/>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{
    padding-top: 70px;
    .content{
        margin: 0px 15px;
        & >.common-bg{
            background-color: $border2;
            border-radius: 5px;
            padding: 15px;
            margin-bottom: 20px;
        }
        .percent{
            .c-title{
                font-size: 12px;
                color:$active;
                margin-bottom: 33px;
                i{
                    display: inline-block;
                    background-size: 100% 100%;
                    background-image: url('../../assets/images/pie_chart@2x.png');
                    width: 14px;
                    height: 14px;
                    margin-right: 10px;
                    vertical-align: middle;
                }
            }
            .count{
                font-size: 24px;
                color: $active;
                margin-bottom: 5px;
            }
        }
        .convolut-list{
            padding: 0 15px;
            .con-row{
                display: flex;
                align-items: center;
                justify-content:  space-between;
                font-size: 14px;
                border-bottom: 1px solid $bg;
                .name{
                    color: $color1;
                    padding: 15px 0;
                }
                .value{
                    color: $active;
                    &.green{
                        color: $active;
                    }
                }
            }
        }
        .profit{
            .pro-title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 15px;
                p.p-tit{
                    font-size: 14px;
                    color: $active;
                }
                .tips{
                    span{
                        font-size: 12px;
                        color: $color1;
                        margin-left: 20px;
                        i{
                            width: 4px;
                            height: 4px;
                            display: inline-block;
                            background-color: $active;
                            border-radius: 4px;
                            margin-right: 5px;
                            vertical-align: middle; 
                        }
                    }
                }
            }
            .process-bars{
                .bar{
                    padding: 7px 15px;
                    border-top-right-radius: 30px;
                    border-bottom-right-radius: 30px;
                    text-align: right;
                    margin-bottom: 5px;
                    color: $white;
                    font-size: 12px;
                    &.green{
                        background-color: #107260;
                    }
                    &.blue{
                        background-color: #107798;
                    }
                }
                
            }
        }
        .convolut-btn{
            position: absolute;
            bottom: 20px;
            width: 90%;
        }
    }
}
</style>