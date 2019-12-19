import styled from 'styled-components'

export const ProductWrap =  styled.div`
  width:100%;
  height:100%;
`

export const ListWrap = styled.ul`
  .img{
    width: 2.666667rem;
    height: 2.666667rem;
  }
  .product-item-list {
    display: flex;
    margin-bottom: .266667rem;
    padding: 0 .506667rem .266667rem;
    justify-content: space-between;
    background-color: #fff;
    overflow: hidden;
    .img {
      position: relative;
      margin-top: .28rem;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
          width: 2.666667rem;
          height: 2.666667rem;
      }
      .icon-label-box {
        position: absolute;
        width: .666667rem;
        height: .426667rem;
        top: .12rem;
        right: .12rem;
        z-index: 2;
        .icon-label-rx {
          display: block;
          width: .666667rem;
          height: .426667rem;
          background: url("http://m.ehaoyao.com/_nuxt/img/icon-label-rx.8695798.png") no-repeat 50%/.666667rem .426667rem;
      }
    }
  }
  .content {
      margin-top: .24rem;
      width: 6.12rem;
      .product-name {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        height: 1.066667rem;
        line-height: .533333rem;
        font-size: .373333rem;
        color: #181818;
        overflow: hidden;
        .label {
          margin-right: .133333rem;
          display: inline-block;
          width: .8rem;
          height: .4rem;
          line-height: .4rem;
          text-align: center;
          font-size: .293333rem;
          border-radius: .066667rem;
          color: #0075c1;
          border: 1px solid #0075c1;
      }
    }
    .p-desc {
        height: .48rem;
        font-size: .32rem;
        color: #898989;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .specification {
        height: .48rem;
        font-size: .32rem;
        color: #898989;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .promotions {
        margin-top: .2rem;
        display: flex;
        height: .6rem;
        align-items: center;
        overflow: hidden;
    }
    .otherInfo {
        margin-top: .133333rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: .746667rem;
        .price {
          display: inline-flex;
          padding: 0 .16rem 0 .266667rem;
          justify-content: space-between;
          align-items: center;
          width: 4.96rem;
          background-color: #f2f2f2;
          border-radius: .2rem;
          height: .746667rem;
          .sell-price {
            margin-left: -.04rem;
            font-size: .426667rem;
            color: #ff344d;
            font-family: arial;
            vertical-align: middle;
        }
        .old-price {
            font-size: .373333rem;
            text-decoration: line-through;
            color: #9a9a9a;
        }
      }
      .btn-cart {
            display: inline-flex;
            width: .746667rem;
            height: .746667rem;
            background: url("http://m.ehaoyao.com/_nuxt/img/btn-cart.87685f5.png") no-repeat 50%/.746667rem;
        }
    }
  }
}
.product-item-row {
    display: inline-block;
    margin-top: .253333rem;
    margin-left: .373333rem;
    width: 4.48rem;
    background-color: #fff;
    border: 1px solid #d0d0d0;
    overflow: hidden;
    .img {
      position: relative;
      display: flex;
      margin: 0 auto;
      padding: .133333rem 0;
      width: 3.2rem;
      height: 3.2rem;
      align-items: center;
      justify-content: center;
      .icon-label-box{
        .icon-label-rx {
          position: absolute;
          width: .666667rem;
          height: .426667rem;
          top: .4rem;
          right: .066667rem;
          background: url("http://m.ehaoyao.com/_nuxt/img/icon-label-rx.8695798.png") no-repeat 50%/.666667rem .426667rem;
        }
      }
      img {
        display: block;
        width: 2.933333rem;
        height: 2.933333rem;
    }
  }
  .content {
      padding: .266667rem;
      background-color: #f7f7f7;
      .product-name {
        height: .533333rem;
        line-height: .533333rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .346667rem;
        color: #181818;
        overflow: hidden;
        .label {
          margin-right: .133333rem;
          display: inline-block;
          width: .8rem;
          height: .4rem;
          line-height: .4rem;
          text-align: center;
          font-size: .293333rem;
          border-radius: .066667rem;
          color: #0075c1;
          border: 1px solid #0075c1;
      }
    }
    .p-desc{
        height: .48rem;
        font-size: .32rem;
        color: #898989;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .specification {
        height: .48rem;
        font-size: .32rem;
        color: #898989;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .promotions {
        margin-top: .2rem;
        height: 1.333333rem;
        overflow: hidden;
    }
    .otherInfo {
        margin-top: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 1.066667rem;
        .price {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: space-between;
          height: .933333rem;
          overflow: hidden;
          .sell-price {
            line-height: .48rem;
            font-size: .426667rem;
            font-family: arial;
            color: #ff344d;
            vertical-align: middle;
        }
       .old-price {
            font-size: .373333rem;
            text-decoration: line-through;
            color: #9a9a9a;
        }
      }
      .btn-cart {
          display: inline-flex;
          width: .746667rem;
          height: .746667rem;
          background: url("http://m.ehaoyao.com/_nuxt/img/btn-cart.87685f5.png") no-repeat 50%/.746667rem;
      }
    }
  }
}
`

export const ProBetterWrap = styled.div`
  width:100%;
  height:100%;
  height:calc(100%-2.13333rem);
  margin-top:2.13333rem;
  overflow:hidden;
`