import styled from 'styled-components'
export const RecommendWrap = styled.div`
  .title {
    height: .666667rem;
    line-height: .666667rem;
    text-align: center;
    font-weight: bolder;
    font-size: .373333rem;
    color: #333;
}
`
export const RecommendListWrap = styled.div`
  /* .content {
      position: relative;
      padding: .24rem .373333rem;
  }
  .scroll-loadmore-wrapper {
      top: 0;
      bottom: 0;
      width: 100%;
      overflow: auto;
      .inner {
        position: static;
        top: -.96rem;
        width: 100%;
        transition-duration: .3s;
        .clearfix, .clearfix:after, .clearfix:before {
          content: "";
          clear: both;
          display: block;
      }
      .list{
         .list-item {
          float: left;
          margin-right: .24rem;
          margin-bottom: .2rem;
          padding-top: .053333rem;
          width: 4.506667rem;
          height: 8.266667rem;
          background-color: #fff;
          border-radius: .133333rem;
          overflow: hidden;
         .img {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 4.506667rem;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .p-name {
              margin-top: .106667rem;
              padding: 0 .186667rem;
              height: .64rem;
              line-height: .64rem;
              font-size: .373333rem;
              color: #333;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
          }
          .p-spec {
              padding: 0 .186667rem;
              height: .56rem;
              line-height: .56rem;
              font-size: .32rem;
              color: #999;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
          }
           .p-spec {
              height: .613333rem;
              line-height: .613333rem;
              padding: 0 .186667rem;
              font-size: .32rem;
              color: #999;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
          }
          .promotions {
              padding: 0 .186667rem;
              display: flex;
              height: .613333rem;
              align-items: center;
              overflow: hidden;
          }
          .otherInfo {
              padding: 0 .186667rem;
              height: .933333rem;
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              overflow: hidden;
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
                  .unit {
                    font-size: .32rem;
                    font-style: normal;
                }
              }
              .old-price {
                  font-size: .32rem;
                  text-decoration: line-through;
                  color: #999;
              }
            }
            .btn-cart {
                display: inline-flex;
                width: .48rem;
                height: .48rem;
                text-indent: -133.32rem;
                background: url("http://m.ehaoyao.com/_nuxt/img/btn-cart.87685f5.png") no-repeat 50%/.48rem;
            }
          }
        }
      }
    }
  } */
  width:100%;
  overflow:auto;
  .content{
    padding: .24rem .373333rem;
    overflow:auto;
    .inner{
      width:100%;
      .list{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        .list-item{
          width: 48.5%;
          height: 8.266667rem;
          margin-bottom: .22rem;
          padding-top: .053333rem;
          background-color: #fff;
          border-radius: .133333rem;
          overflow: hidden;
          &:nth-child(2n+1){
            margin-right: .25rem;
          }
          .img {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 4.506667rem;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .p-name {
            margin-top: .106667rem;
            padding: 0 .186667rem;
            height: .64rem;
            line-height: .64rem;
            font-size: .373333rem;
            color: #333;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .p-desc {
            padding: 0 .186667rem;
            height: .56rem;
            line-height: .56rem;
            font-size: .32rem;
            color: #999;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .p-spec {
            height: .613333rem;
            line-height: .613333rem;
            padding: 0 .186667rem;
            font-size: .32rem;
            color: #999;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .promotions {
            padding: 0 .186667rem;
            display: flex;
            height: .613333rem;
            align-items: center;
            overflow: hidden;
          }
          .otherInfo {
              padding: 0 .186667rem;
              height: .933333rem;
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              overflow: hidden;
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
                  .unit {
                    font-size: .32rem;
                    font-style: normal;
                }
              }
              .old-price {
                  font-size: .32rem;
                  text-decoration: line-through;
                  color: #999;
              }
            }
            .btn-cart {
                display: inline-flex;
                width: .48rem;
                height: .48rem;
                text-indent: -133.32rem;
                background: url("http://m.ehaoyao.com/_nuxt/img/btn-cart.87685f5.png") no-repeat 50%/.48rem;
            }
          }
        }
      }
    }
  }
`