import styled from 'styled-components'

export const CartWrap= styled.div`
  width:100%;
  height:100%;
  .header {
    display: flex;
    width: 10rem;
    height: 1.173333rem;
    background-color: #ff344d;
    align-items: center;
    font-family: \\5FAE\8F6F\96C5\9ED1;
    .goback {
        margin-left: .133333rem;
        width: 1.066667rem;
        height: 100%;
        background: url("http://m.ehaoyao.com/_nuxt/img/icon_header_goback.052eff7.png") no-repeat 50%;
        background-size: .533333rem .533333rem;
        cursor: pointer;
    }
    .main {
      display: flex;
      margin: 0 auto;
      flex: 1;
      width: 5.6rem;
      height: 1.173333rem;
      line-height: 1.173333rem;
      align-items: center;
      .main-title {
        display: inline-flex;
        position: relative;
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: .426667rem;
        .menu-tab {
          display: inline-flex;
          width: 100%;
          padding: 0 1.6rem;
          justify-content: space-between;
          .tab-item {
            position: relative;
            height: 1.173333rem;
            font-size: .373333rem;
            i {
              position: absolute;
              top: .16rem;
              right: -.24rem;
              width: .4rem;
              height: .4rem;
              line-height: .4rem;
              border-radius: 50%;
              background: #fff;
              color: #ff344d;
              font-size: .32rem;
              font-style: normal;
          }
        }
        .tab-item.on {
            font-size: .426667rem;
            border-bottom: 2px solid #fff;
        }
      }
    }
  }
.right {
      width: 1.2rem;
      text-align: left;
      position: relative;
      height: 100%;
      line-height: 1.173333rem;
      font-size: .373333rem;
      color: #fff;
  }
}
.cart-footer {
    position: fixed;
    bottom: 1.2rem;
    width: 10rem;
    height: 1.36rem;
    background-color: #fff;
    z-index: 2;
   .footer-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: .373333rem;
    width: 100%;
    height: 1.306667rem;
     .totalAmount {
        flex: 1;
        font-size: .32rem;
        color: #333;
    }
   .btn-balance{
      display: inline-flex;
      width: 2.973333rem;
      height: 100%;
      align-items: center;
      justify-content: center;
      background-color: #ff344d;
      font-size: .373333rem;
      color: #fff;
    }

    .icon-check-all {
        width: 2rem;
        font-size: .32rem;
        color: #333;
        .icon-check {
            display: inline-block;
            width: .453333rem;
            height: .453333rem;
            background: url("http://m.ehaoyao.com/_nuxt/img/icon-check.19e2229.png") no-repeat 50%/.426667rem;
            vertical-align: middle;
            margin-right: .133333rem;
        }
        .icon-check-on{
          background: url("http://m.ehaoyao.com/_nuxt/img/icon-check-on.7d3b964.png") no-repeat 50%/.426667rem;
      }
    }
    .btn-delete-all {
      display: inline-flex;
      width: 2.973333rem;
      height: 100%;
      align-items: center;
      justify-content: center;
      background-color: #ff344d;
      font-size: .373333rem;
      color: #fff;
  }
  }

}
`

export const CartContentWrap = styled.div`
  padding-bottom: 1.333333rem;
`

export const LoginBarWrap = styled.div`
    display: flex;
    padding: 0 .373333rem;
    width: 100%;
    height: 1.173333rem;
    justify-content: space-between;
    align-items: center;
    font-size: .32rem;
    color: #999;
    background-color: #fffbec;
    .login_btn {
      display: inline-flex;
      width: 1.32rem;
      height: .693333rem;
      line-height: .693333rem;
      justify-content: center;
      color: #fff;
      background-color: #ff344d;
      border-radius: .106667rem;
  }
`

// 购物车切换

export const CartsWrap = styled.section`
.cover {
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 10rem;
    height: 100%;
    background: hsla(0,0%,100%,.1);
    text-align: center;
    padding-top: 2.666667rem;
    font-size: .4rem;
    font-family: sans-serif;
    display:none;
}
 .no-result {
    margin: 2.666667rem auto 0;
    padding-top: 2.4rem;
    padding-bottom: .533333rem;
    width: 8.133333rem;
    background: url("http://m.ehaoyao.com/_nuxt/img/bg-nogoods.348c149.png") no-repeat top/8.026667rem 2rem;
    .no-result-tips {
      margin-bottom: .266667rem;
      line-height: .506667rem;
      font-size: .373333rem;
      font-weight: 300;
      text-align: center;
      color: #999;
  }
  .btn-contact-us {
      display: block;
      margin: .4rem auto 0;
      width: 4.053333rem;
      height: .96rem;
      line-height: .96rem;
      text-align: center;
      border: 1px solid #ff344d;
      border-radius: .133333rem;
      color: #fff;
      font-size: .373333rem;
      background-color: #ff344d;
      text-decoration: none;
  }
}
  .cart-list {
      margin-bottom: .266667rem;
      background-color: #f3f5f7;
      .hd {
        display: flex;
        padding: 0 .373333rem;
        height: 1rem;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        border-bottom: 1px solid #e5e5e5;
        .title {
          display: inline-flex;
          margin-right: .133333rem;
          flex: 1;
          height: 100%;
          align-items: center;
          font-size: .373333rem;
          color: #333;
          overflow: hidden;
           .left {
            display: flex;
            overflow: hidden;
            .icon-check {
              display: inline-block;
              width: .453333rem;
              height: .453333rem;
              background: url("http://m.ehaoyao.com/_nuxt/img/icon-check.19e2229.png") no-repeat 50%/.426667rem;
              vertical-align: middle;
          }
          .icon-check-box {
            margin-right: .6rem;
          }
          .icon-check-on {
              background: url("http://m.ehaoyao.com/_nuxt/img/icon-check-on.7d3b964.png") no-repeat 50%/.426667rem;
          }
          .pharmacyName {
              display: inline-block;
              width: 2.933333rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
          }
        }
        .freeship {
            flex: 1;
            padding-left: .4rem;
            font-size: .32rem;
            color: #ff344d;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
      }
      .getCoupon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.333333rem;
          height: 100%;
          font-size: .32rem;
          color: #ff344d;
          text-align: center;
          &:after {
            display: inline-block;
            margin-left: .266667rem;
            width: .186667rem;
            height: .32rem;
            content: "";
            background: url("http://m.ehaoyao.com/_nuxt/img/icon_arrow_right_red.5cd3caa.png") no-repeat 50%/.186667rem .32rem;
        }
      }
    }
    .content{
      .cartList-item {
        margin-bottom: .133333rem;
        padding: .266667rem 0 .066667rem;
        background-color: #fff;
        .mainInfo {
          padding-bottom: .133333rem;
          border-bottom: 1px solid #e5e5e5;
          margin: 0 .373333rem 0;
        }
        .mainInfo:last-child {
            border-bottom: 0;
        }
        .item {
            display: flex;
            padding-top: .333333rem;
            width: 100%;
            .icon-check-box {
                padding-top: .826667rem;
                width: .746667rem;
                flex-shrink: 0;
                overflow: hidden;
                .icon-check {
                  display: inline-block;
                  width: .453333rem;
                  height: .453333rem;
                  background: url("http://m.ehaoyao.com/_nuxt/img/icon-check.19e2229.png") no-repeat 50%/.426667rem;
                  vertical-align: middle;
                }
              .icon-check-on {
                background: url("http://m.ehaoyao.com/_nuxt/img/icon-check-on.7d3b964.png") no-repeat 50%/.426667rem;
              }
            }
            .img {
                position: relative;
                margin-right: .4rem;
                width: 2rem;
                height: 2rem;
                flex-shrink: 0;
                align-items: center;
                overflow: hidden;
                >img {
                  width: 100%;
                  height: 2rem;
              }
            }
            /* right */
            .right {
              flex: 1;
              display: inline-flex;
              flex-flow: column;
              justify-content: space-between;
              padding-bottom: .266667rem;
              overflow: hidden;
              .p-name {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
                max-height: .933333rem;
                line-height: .506667rem;
                font-size: .373333rem;
                color: #333;
                overflow: hidden;
              }
              .p-specification {
                display: flex;
                margin-top: .066667rem;
                height: .533333rem;
                align-items: center;
                justify-content: space-between;
                font-size: .32rem;
                color: #999;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
               .otherInfo {
                  display: flex;
                  margin-top: .4rem;
                  height: .586667rem;
                  align-items: flex-end;
                  .priceBox {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    height: .586667rem;
                    color: #ed4443;
                    font-family: arial;
                    overflow: hidden;
                    .symbol {
                      font-size: .32rem;
                  }
                  .price {
                      font-size: .426667rem;
                  }
                }
                .numBox {
                    display: inline-flex;
                    .operate-num {
                      display: inline-flex;
                      width: 2.133333rem;
                      height: .586667rem;
                      align-items: center;
                      background-color: #fff;
                      border-radius: .106667rem;
                      border: 1px solid #e5e5e5;
                      .btn-minus,.btn-plus {
                        display: inline-flex;
                        flex: 1;
                        justify-content: center;
                        align-items: center;
                        width: .64rem;
                        height: .586667rem;
                        font-size: .4rem;
                        font-weight: 700;
                        color: #333;
                        text-indent: -13.32rem;
                        cursor: pointer;
                    }
                   .btn-minus {
                        background: url("http://m.ehaoyao.com/_nuxt/img/icon_minus.3ff1800.png") no-repeat 50%/.226667rem .226667rem;
                    }
                    .btn-plus{
                     background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMzNUU5NUM5QTE2ODExRTk4RkMyRkY2RERGRDEyMDk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMzNUU5NUNBQTE2ODExRTk4RkMyRkY2RERGRDEyMDk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzM1RTk1QzdBMTY4MTFFOThGQzJGRjZEREZEMTIwOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzM1RTk1QzhBMTY4MTFFOThGQzJGRjZEREZEMTIwOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7JJ7S6AAAAMElEQVR42mJMS0tjIAD+AzEjPgVMDFQAo4YMZkNYoOmAmLSC1xDG0cQ2aggBABBgAPS4BVeJQ34hAAAAAElFTkSuQmCC) no-repeat 50%/.226667rem .226667rem;
                    }
                     .p-num {
                        display: inline-block;
                        width: .853333rem;
                        height: 100%;
                        font-size: .32rem;
                        color: #333;
                        text-align: center;
                        background-color: #f3f5f7;
                        vertical-align: middle;
                        border: 0;
                        border-left: 1px solid #e5e5e5;
                        border-right: 1px solid #e5e5e5;
                    }
                  }
                }
                .btn-delete {
                    display: inline-block;
                    width: .72rem;
                    height: .586667rem;
                    background: url("http://m.ehaoyao.com/_nuxt/img/icon-btn-delete.3e5a41d.png") no-repeat 100%/.426667rem;
                }
              }
            }
          }
      }
      .cartList-item:last-child {
          border-bottom: 0;
      }
    }
  }
`

export const NeedWrap = styled(CartsWrap)`
 

  /* .cover {
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 10rem;
    height: 100%;
    background: hsla(0,0%,100%,.1);
    text-align: center;
    padding-top: 2.666667rem;
    font-size: .4rem;
    font-family: sans-serif;
    display:none;
}
 .no-result {
    margin: 2.666667rem auto 0;
    padding-top: 2.4rem;
    padding-bottom: .533333rem;
    width: 8.133333rem;
    background: url("http://m.ehaoyao.com/_nuxt/img/bg-nogoods.348c149.png") no-repeat top/8.026667rem 2rem;
    .no-result-tips {
      margin-bottom: .266667rem;
      line-height: .506667rem;
      font-size: .373333rem;
      font-weight: 300;
      text-align: center;
      color: #999;
  }
  .btn-contact-us {
      display: block;
      margin: .4rem auto 0;
      width: 4.053333rem;
      height: .96rem;
      line-height: .96rem;
      text-align: center;
      border: 1px solid #ff344d;
      border-radius: .133333rem;
      color: #fff;
      font-size: .373333rem;
      background-color: #ff344d;
      text-decoration: none;
  }
} */

`