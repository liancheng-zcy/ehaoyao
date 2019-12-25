import styled from 'styled-components'

export const ProductWrap =  styled.div`
  width:100%;
  height:100%;
  position:relative;
`
export const FilterWrap = styled.section`
  width:100%;
  height:calc(100% - 2.133333rem);
   /* height:100%; */
   margin-top: 2.13333rem;
  /* margin-bottom:2.133333rem; */
  background:yellow;
  position:absolute;
  left:0;
  top:0;
  z-index:10;
  background: rgba(0,0,0,.6);
  overflow: auto;
 .filter-wrapper {
    position:relative;
    width: 100%;
    background-color: #fff;
    .filter-content {
      min-height: 2.666667rem;
      max-height: 10.666667rem;
      padding-bottom: .666667rem;
      overflow-y: scroll;
     .item-title {
        padding-top: .373333rem;
        padding-left: .253333rem;
        font-size: .32rem;
        color: #979797;
    }
    .pStatus-list {
        padding-top: .226667rem;
        padding-left: .253333rem;
    }
    .item {
          float: left;
          margin-right: .266667rem;
          margin-bottom: .133333rem;
          padding: 0 .133333rem;
          width: 2.16rem;
          height: .813333rem;
          line-height: .813333rem;
          text-align: center;
          border-radius: .133333rem;
          font-size: .32rem;
          color: #979797;
          border: 1px solid #dcdcdc;
          white-space: nowrap;
          text-overflow: ellipsis;
          box-sizing: border-box;
          overflow: hidden;
      }
    .item.on {
        color: #ff344d;
        border-color: #ff344d;
    }
    .clearfix, .clearfix:after, .clearfix:before {
        content: "";
        clear: both;
        display: block;
    }
   .brand-list {
      padding-top: .226667rem;
      padding-left: .253333rem;
    }
  }
   .filter-btn {
      /* position: absolute;
      bottom: 0;
      left: 0;
      z-index:5; */
      display: flex;
      width: 100%;
      height: 1.173333rem;
      border-top: 1px solid #e5e5e5;
      background-color: #fff;
      .btn {
        display: inline-flex;
        width: 50%;
        height: 1.173333rem;
        line-height: 1.173333rem;
        justify-content: center;
        font-size: .4rem;
        color: #ff344d;
        cursor: pointer;
    }
     .btn.comfirm {
        color: #fff;
        background-color: #ff344d;
    }
  }
}
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
  overflow:hidden;
`

export const SearchWrap = styled.div`
  .hotSearch {
      padding: 0 .346667rem;
      width: 100%;
      height: auto;
      background-color: #fff;
      .title {
        height: 1.146667rem;
        line-height: 1.146667rem;
        font-size: .4rem;
        color: #181818;
    }
    .item {
        display: inline-block;
        margin: 0 .346667rem .266667rem 0;
        padding: 0 .373333rem;
        height: 1.013333rem;
        line-height: 1.013333rem;
        background-color: #f0f2f5;
        font-size: .4rem;
        color: #4e4e4e;
        border-radius: .106667rem;
    }
  }
  .searchHistory {
      padding-bottom: 1.2rem;
      width: 100%;
      height: auto;
      background-color: #fff;
      .title {
        padding: 0 .346667rem;
        height: 1.146667rem;
        line-height: 1.146667rem;
        font-size: .4rem;
        color: #181818;
        border-bottom: 1px solid #e5e5e5;
        span {
          float: right;
          font-size: .28rem;
          color: #898989;
          cursor: pointer;
      }
    }
    .item {
        display: block;
        margin-left: .346667rem;
        padding-right: .266667rem;
        height: 1.2rem;
        line-height: 1.2rem;
        border-bottom: 1px solid #e5e5e5;
        font-size: .4rem;
        color: #4e4e4e;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
  }

`
export const SearchListWrap = styled.ul`
    padding-left: .32rem;
    width: 100%;
    background-color: #fff;
    .item {
      height: 1.266667rem;
      line-height: 1.266667rem;
      font-size: .4rem;
      color: #4e4e4e;
      border-bottom: 1px solid #dadada;
  }
`

export const SearchFailWrap = styled.div`
    margin: .8rem auto 0;
    padding-top: 4.4rem;
    padding-bottom: 2.666667rem;
    width: 8.133333rem;
    background: url("http://m.ehaoyao.com/_nuxt/img/bg-nogoods.7b52968.png") no-repeat top/8.026667rem 4.186667rem;
    .no-result-tips {
      margin-bottom: .266667rem;
      line-height: .506667rem;
      font-size: .4rem;
      color: #898989;
      word-break: break-all;
  }
  .tips-list {
      font-size: .32rem;
      color: #a5a5a5;
  }
  .btn-contact-us {
      display: block;
      margin: .533333rem auto 0;
      width: 5.866667rem;
      height: .933333rem;
      line-height: .933333rem;
      text-align: center;
      border: 1px solid #ff344d;
      border-radius: .133333rem;
      color: #ff344d;
      font-size: .373333rem;
      background-color: #fff;
      text-decoration: none;
  }
`