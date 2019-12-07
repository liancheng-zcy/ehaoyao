import styled from 'styled-components'

export const AdWrap = styled.div`
    display: flex;
    padding-right: .266667rem;
    width: 10rem;
    height: .933333rem;
    line-height: .933333rem;
    background-color: #000;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    .icon-close {
    display: inline-flex;
    width: 1.066667rem;
    height: .933333rem;
    background: url("http://m.ehaoyao.com/_nuxt/img/icon_top_close.61c3d68.png") no-repeat 50%/.52rem;
    cursor: pointer;
    }
    .content {
    display: inline-flex;
    flex: 1;
    width: 6.2rem;
    height: .933333rem;
    font-size: .493333rem;
    font-weight: 700;
    .money {
    padding-left: .266667rem;
    font-size: .4rem;
    }
  }
  .btn-download {
    padding-bottom:40%;
    height:0;
    font-size:0;

}

`
export const SeckillListWrap = styled.ul`
  height: 3.266667rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow-y: auto;
  z-index: 1;
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }
`
export const SeckillItemWrap = styled.li`
        margin-right: .133333rem;
        width: 2.2rem;
        text-align: center;
        line-height: 0;
        flex-shrink: 0;
        height: 100%;
        position: relative;
      .img {
          display: block;
          margin: 0 auto .106667rem;
          max-width: 1.6rem;
          max-height: 1.6rem;
          text-align: center;
          line-height: 1.6rem;
      }
      .activity {
        display: inline-flex;
        padding: 0 .2rem;
        height: .4rem;
        background-color: #ff3c54;
        font-size: .266667rem;
        font-weight: 200;
        color: #fff;
        align-items: center;
    }
     .price {
        margin-top: .106667rem;
        line-height: .466667rem;
        font-size: .396rem;
        color: #ff4040;
        font-weight: 700;
    }
    .old-price {
          line-height: .4rem;
          font-size: .244rem;
          color: #bebebe;
          text-decoration: line-through;
      }
`
// goods
export const GoodsListWrap = styled.ul`
    padding-left: .346667rem;
    line-height: 0;
`
export const GoodsItemWrap = styled.li`
    display: inline-block;
    margin-right: .333333rem;
    margin-bottom: .293333rem;
    width: 4.493333rem;
    height: 5rem;
    border: 1px solid #dedede;
    background-color: #f7f7f7;
    overflow: hidden;
    .img {
      display: flex;
      width: 4.466667rem;
      height: 3.2rem;
      justify-content: center;
      align-items: center;
      background-color: #fff;
     img {
        display: block;
        width: 3.2rem;
        height: 2.666667rem;
    }
  }
 .p-name {
        display: flex;
        align-items: center;
        margin-top: .16rem;
        padding: 0 .373333rem;
        height: .906667rem;
        line-height: .426667rem;
        color: #4e4e4e;
        font-size: .333333rem;
        overflow: hidden;
      span {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        vertical-align: text-bottom;
        overflow: hidden;
    }
  }
  .p-price {
        padding-left: .293333rem;
        height: .533333rem;
        line-height: .533333rem;
        font-size: .434667rem;
        font-weight: 700;
        color: #ff3c54;
        overflow: hidden;
    }
`