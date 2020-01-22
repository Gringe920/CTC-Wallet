<template>
  <section>
    <div class="header">
      <span>订单</span>
      <span class="publish">发布</span>
    </div>
    <div class="nav-tag">
      <ul class="nav-li">
        <li class="active">我发布的</li>
        <li>未完成</li>
        <li>已完成</li>
        <li>已取消</li>
        <li>已申诉</li>
      </ul>
    </div>
    <div class="order-list">
      <div class="box published">
        <div class="box-h">
          <div class="coin">
            <span class="icon">买</span>
            <span>USDT</span>
          </div>
          <div class="kill-order">撤单</div>
        </div>
        <div class="line"></div>
        <div class="box-c">
          <div class="c-item">
            <p class="i-t">委托价格</p>
            <p>6.89 CNY</p>
          </div>
          <div class="c-item">
            <p class="i-t">委托数量</p>
            <p>1000</p>
          </div>
          <div class="c-item">
            <p class="i-t">已成交数量</p>
            <p>0.000000</p>
          </div>
        </div>
      </div>
    </div>
    <div class="order-list">
      <div class="box unpublish">
        <div class="box-h">
          <div class="coin">
            <span class="icon">买</span>
            <span>USDT</span>
          </div>
          <div class="h-tips">待打款</div>
        </div>
        <div class="line"></div>
        <div class="box-c-h">
          <div class="c-row order-money">
            交易金额：6890 CNY
          </div>
          <div class="c-row">
            商家信息：风轻云淡
          </div>
          <div class="c-row">
            转账备注：368888
          </div>
          <div class="c-row">
            创建时间：2019/02/01 08:30:00
          </div>
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
section{
  background-color: #F9F8FD;
  height: 100%;
  .header{
    text-align: center;
    background-color: #fff;
    span{
      font-size: 18px;
      line-height: 50px;
    }
    .publish{
      font-size: 14px;
      color: #1771ED;
      position: absolute;
      right: 15px;
    }
  }
  .nav-tag{
     background-color: #fff;
     box-shadow: 0px 10px 14px -10px rgba(30, 49, 107, 0.1);
    .nav-li{
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #97A2AF;
      padding: 12px 0;
      justify-content: space-around;
      li.active{
        color: #1771ED;
        position: relative;
      }
      li.active:after{
        content: '';
        display: inline-block;
        width: 28px;
        height: 2px;
        background-color: #1771ED;
        position: absolute;
        bottom: -12px ;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .order-list{
    .box{
      background-color: #fff;
      box-shadow:0px 6px 10px 0px rgba(0,0,0,0.03);
      border-radius:4px;
      border:1px solid rgba(0,0,0,0.05);
      padding: 15px;
      .box-h{
        display: flex;
        padding: 10px 15px;
        justify-content: space-between;
        align-items: center;
        .coin{
          font-size: 13px;
          .icon{
            display: inline-block;
            width: 23px;
            height: 23px;
            border-radius: 23px;
            font-size: 13px;
            color: #fff;
            background-color: #FF615D;
            line-height: 23px;
            text-align: center;
            margin-right: 8px;
          }
        }
        .kill-order{
          font-size: 12px;
          color:  #1771ED;
          border-radius:2px;
          border:1px solid rgba(23,113,237,1);
          padding: 0 10px;
          height: 20px;
          line-height: 15px;
        }
        .h-tips{
          font-size: 13px;
        }
      }
      .box-c{
        display: flex;
        font-size: 12px;
        justify-content: space-around;
        margin-top: 15px;
        .c-item{
          text-align: center;
          .i-t{
            padding-bottom: 10px;
            color: #97A2AF;
          }
        }
        
      }
      .box-c-h{
        .c-row{
          margin-bottom: 8px;
          color: #97A2AF;
          font-size: 14px;
        }
        .order-money{
          font-size: 16px;
          color: #1771ED;
          margin-bottom: 10px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>