import styled from 'styled-components'

export const TabBarWrap = styled.div `
  .am-tabs-pane-wrap {
      width: 100%;
      flex-shrink: 0;
      overflow-y: hidden;
  }
  .am-tab-bar-tab-icon {
    position: relative;
  }
`

export const HeaderWrap = styled.div `
  height: 1.266667rem;
  background:#fa334b;
  font-size:12px;
    .header {
      display: flex;
      padding: 0 .266667rem;
      width: 100%;
      height: 1.266667rem;
      justify-content: space-between;
      align-items: center;
      background-color: #ff344d;
      .logo {
        width: .96rem;
        height: 1.146667rem;
    }
    .search-box {
      display: inline-flex;
      padding-right: 1.146667rem;
      padding-left: .266667rem;
      width: 6.733333rem;
      height: .906667rem;
      border-radius: .133333rem;
      align-items: center;
      background: #fff url("http://m.ehaoyao.com/_nuxt/img/icon-search-index.a6a9235.png") no-repeat 5.866667rem;
      background-size: .6rem .6rem;
      .input-text {
        display: inline-block;
        width: 5.333333rem;
        height: .586667rem;
        line-height: .586667rem;
        font-size: .4rem;
        color: #898989;
        border: 0;
        border-right: 1px solid #d0d0d0;
    }
  }
    .btn_login{
      display: inline-block;
      width: 1.146667rem;
      height: .906667rem;
      line-height: .906667rem;
      font-size: .4rem;
      color: #fff;
      text-align: center;
  }
  }
`

export const SwiperWrap = styled.div `
  position: relative;
  width: 100%;
  height: 4rem;
  z-index: 1;
  overflow: hidden;
  font-size: .32rem;
`
export const PromiseWrap = styled.ul `
    display: flex;
    padding: 0 .4rem;
    height: .933333rem;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    overflow: hidden;
    .item {
    padding-left: .533333rem;
    padding-right: .133333rem;
    line-height: .933333rem;
    font-size: .333333rem;
    color: #4e4e4e;
    background: url("http://m.ehaoyao.com/_nuxt/img/icon-li-yes.218706b.png") no-repeat 0/.426667rem;
  }
`

export const FuncitonListWrap = styled.div `
  margin-bottom: .2rem;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  .am-flexbox{
    height: 2.106667rem;
  }
  .am-grid-item-content{
    padding:0 !important;
  }
`
export const RecommendWrap = styled.div `
    display: flex;
    margin: 0 auto .2rem;
    padding-left: 2.666667rem;
    width: 9.333333rem;
    height: .96rem;
    line-height: .96rem;
    background: #fff url("http://m.ehaoyao.com/_nuxt/img/bg_recommend_title.08a8d49.png") no-repeat .2rem;
    background-size: 2.2rem .453333rem;
    border-radius: .133333rem;
    overflow: hidden;
    .recommend-list {
        width: 6rem;
        height: .96rem;
      }
    .icon-more{
      display: inline-flex;
      width: .666667rem;
      height: .96rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAiCAYAAABWQVnHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYRJREFUeNrslcsrhFEYh2dcS0RJyUKmlJJSFjaycZ0MInIrycZCFlbf36DvH2DBggUpTU1TQk1DspqykJSyVUqykGvxeU695TbDeWc2lFPPvJv5Pd+Z77znHb/neb5MVpYvw/Uv+A2CHPPhum6QMg3DjuPcp7ODWeiBKLKCdAQDEIdW2EJSqBKw7VtKN2xDs0iKVS8RyR2lDzahCXaQlKhOAckDpR8i0AgxJKWqY0TyRBmCDWgQSZmqD0QyAmtQD7tIylWNhOSZMg4rUCuSClUnimQSFqEG9pBUqloZyQtlCuahWnZSpboLSMzcm4FjCMCySsATzfcWoA7O5N28XaYfwtmUJZiAU9Pu7OjcSiBhcwpjcCLhiy/XOUU4l7IKg3AEbYQvk86DJOE8yrrcjUPoIHyVcqB8CudTwtAFCegkfG3VyjJMIhI+gPbvwh92IOEotMA+hAjfWF1nwkVmiEg4BkGb8PufEJZJZCZSrwwX+6nMmgPzxFHCj5qh6v/7f++vAgwAHayCkFrkBMwAAAAASUVORK5CYII=) no-repeat .133333rem;
      background-size: .213333rem .453333rem;
    }
    .v-item{
      height: .96rem;
      line-height: .96rem;
      font-size: .36rem;
      overflow: hidden;
      color: #181818;
    }
`
// 限时秒杀
export const SeckillWrap = styled.div `
    margin-bottom: .2rem;
    height: 4.533333rem;
    background-color: #fff;
    overflow: hidden;
    .title {
    display: flex;
    margin-bottom: .133333rem;
    padding-left: .333333rem;
    padding-right: .213333rem;
    height: 1.133333rem;
    align-items: center;
   .icon-title {
        display: inline-flex;
        margin-right: .4rem;
        flex-grow: 1.533333rem;
        width: 1.533333rem;
        height: .4rem;
        overflow: hidden;
    }
  }
  .time-box {
      width: 5.6rem;
      overflow: hidden;
      .countDown {
        display: flex;
        justify-content: space-between;
        height: .96rem;
        line-height: .96rem;
        background-color: #fff;
      .timer-wrapper {
          display: inline-flex;
          height: 100%;
          align-items: center;
          .timer-remain {
            margin-right: .24rem;
        }
        .timer-item {
          margin-right: .066667rem;
          display: inline-flex;
          .timerText {
              text-align: center;
              font-size: .36rem;
              color: #4f4f4f;
          }
          .unit {
              font-size: .293333rem;
              padding: 0 .066667rem;
              color: #aaa;
          }
        }
      }
    }
  }
  .title-activity {
    flex: 1;
    padding-right: .533333rem;
    background: url("http://m.ehaoyao.com/_nuxt/img/bg_seckill_more.c7881e8.png") no-repeat 100%;
    background-size: .32rem .32rem;
    text-align: right;
    font-size: .338667rem;
    color: #ff3c54;
}
`

export const InstrumentWrap = styled.div `
    .instrument-box {
      margin-bottom: .2rem;
      width: 100%;
      background-color: #fff;
      overflow: hidden;
      .title {
        background: url("http://m.ehaoyao.com/_nuxt/img/bg_instrument_title.592fd5a.png") no-repeat 50%/100%;
        text-indent: 0;
        text-align: center;
        font-size: .373333rem;
        height: 1.04rem;
        line-height: 1.04rem;
    }
    .content {
        padding: 0 .186667rem .106667rem;
         .top {
          margin-bottom: .106667rem;
          display: flex;
          justify-content: space-between;
           .c-left {
            display: block;
            width: 4.773333rem;
            height: 5.466667rem;
            overflow: hidden;
             img {
              width: 100%;
              height: 100%;
          }
        }
         .c-right {
            display: inline-flex;
            flex-direction: column;
            justify-content: space-between;
            width: 4.773333rem;
            height: 5.466667rem;
            overflow: hidden;
        }
         .c-right>a {
              display: block;
              .r-img-01,.r-img-02{
                display: block;
                width: 4.773333rem;
                height: 2.666667rem;
                overflow: hidden;
            }
          }
      }
      .list {
          display: flex;
          justify-content: space-between;
          .list-item {
            display: inline-block;
            width: 3.146667rem;
            height: 4.613333rem;
            overflow: hidden;
             img {
              width: 100%;
              height: 100%;
          }
        }
      }
    }
  }
`
export const BrandsWrap = styled.div `
  .brands-box {
    margin-bottom: .2rem;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    .title {
      height: 1.04rem;
      line-height: 1.04rem;
      text-align: center;
      font-size: .373333rem;
  }
  .content {
      padding: 0 0 .106667rem;
      line-height: 0;
      .list-item {
        display: inline-flex;
        width: 25%;
        height: 2.506667rem;
        overflow: hidden;
    }
     .list-item>a {
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        height: 2.506667rem;
        img {
          width: 100%;
          height: 100%;
      }
    }
  }
}
`
export const PromotionWrap = styled.div `
  .promotion-box {
    margin-bottom: .2rem;
    width: 100%;
    height: 5.8rem;
    background-color: #fff;
    overflow: hidden;
   .title {
      height: 1.04rem;
      line-height: 1.04rem;
      text-align: center;
      font-size: .373333rem;
  }
   .content {
      display: flex;
      justify-content: space-between;
      padding: 0 .133333rem;
      height: 4.493333rem;
     .c-left {
        width: 4.8rem;
        height: 4.493333rem;
        overflow: hidden;
         img {
          width: 100%;
          height: 100%;
      }
    }
    c-right {
      width: 4.8rem;
        height: 4.493333rem;
        overflow: hidden;
    }
    .c-right>a {
        display: block;
       .r-img-01 {
            margin-bottom: .066667rem;
        }
         .r-img-01, .r-img-02 {
          display: block;
          width: 4.8rem;
          height: 2.213333rem;
          border-radius: .133333rem;
          overflow: hidden;
      }
    }
  }
}
`
// goods
export const GoodsWrap = styled.div `
  .goods-box {
    margin-bottom: .2rem;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    .title {
      height: 1.04rem;
      line-height: 1.04rem;
      background: url("http://m.ehaoyao.com/_nuxt/img/bg_goods_title.876e4a9.png") no-repeat 50%/100% 1.04rem;
      text-indent: -13.32rem;
  }
}

`
export const BottomWrap = styled.div `
 .bottom-box {
    margin: 0 auto;
    width: 9.333333rem;
  .img-aboutus {
      display: block;
      width: 100%;
  }
  .btn-list {
      display: flex;
      height: .96rem;
      line-height: .96rem;
      justify-content: center;
      font-size: .296267rem;
      color: #898989;
      overflow: hidden;
      span {
        padding: 0 .266667rem;
    }
  }
   .img-consult-telephone {
      display: block;
      width: 100%;
  }
   img {
      width: 100%;
      height: 100%;
  }
  .copyright {
      margin-bottom: .266667rem;
      line-height: .933333rem;
      text-align: center;
      font-size: .277733rem;
      color: #898989;
  }
}
`