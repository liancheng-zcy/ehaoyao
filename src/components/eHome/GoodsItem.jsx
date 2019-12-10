import React, { Component } from 'react'
import {GoodsItemWrap} from './styledEhomeCom'
export default class GoodsItem extends Component {
  render() {
    let goodList = this.props.goodList
    return (
      <>
        {
          goodList.map((item,index) =>{
            return(
              <GoodsItemWrap 
                className="list-item"
                key={item.id}
                data-proid={item.linkId}
                >
                <a href="true" className="img">
                  <img src={`${item.imageUrl}`} alt="" />
                </a>
            <p className="p-name"><span>{item.name}</span></p>
            <p className="p-price">￥{item.price}</p>
              </GoodsItemWrap>
            )
          })
        }   
      </>
    )
  }
}
