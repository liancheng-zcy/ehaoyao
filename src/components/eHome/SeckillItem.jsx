import React, { Component } from 'react'
import { SeckillItemWrap } from './styledEhomeCom'
export default class SeckillItem extends Component {

  render() {
    return (
      <>
        {
          this.props.seckillList.map((item, index) => {
          return (
          <SeckillItemWrap 
            className="item swiper-slide"
            data-skillproid={item.goodsId}
            key={item.goodsId}
          >
            <img
            src={`http://image.qumaiyao.com/${item.smallPic}`}
            alt="" className="img" />
            <p className="activity">秒杀</p>
          <p className="price">¥{item.buyingPrice}</p>
          <p className="old-price">￥{item.price}</p>
          </SeckillItemWrap>
          )
          })
        }
      </>
       
    )
  }
}
