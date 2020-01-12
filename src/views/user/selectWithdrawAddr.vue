<template>
    <section>
        <Header title="选择提币地址"/>
        <div class="container">
            <div class="empty-box" v-if="false">
                <img src="../../assets/images/blank_page_book@2x.png" alt="">
                <div class="emp-text">暂无提币地址</div>
            </div>
            <div class="addr-list">
                <div class="addr-box">
                    <div class="name-info">
                        <span class="name">RCP</span>
                        <span class="delete">删除</span>
                    </div>
                    <div class="addr-info">
                        <div class="addr">地址：RKWPDQTXW3FUPZTUNVCEAUG8HEDXEX7ZWQ</div>
                        <div class="tag">标签：RCP地址</div>
                    </div>
                    <div class="line"></div>
                </div>
            </div>
            <r-button text="添加地址" width="90%" class="comfirm"/>
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
    .empty-box{
        margin-top: 60px;
        text-align: center;
        img{
            width: 21%;
        }
        .emp-text{
            font-size: 14px;
            color: #97A2AF;
            margin-top: 10px;
        }
    }
    .addr-list{
        padding: 0 15px;
        .addr-box{
            position: relative;
        }
        .name-info{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 15px;
            margin-bottom: 10px;
            .name{
                font-size: 16px;
            }
            span.delete{
                display: inline-block;
                color: #97A2AF;
                border: 1px solid #e2e2e2;
                border-radius:4px;
                padding: 0 10px;
                font-size: 12px;
            }
            
        }
        .addr-info{
                font-size: 12px;
                color: #97A2AF;
                padding-bottom: 15px;
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
}
</style>