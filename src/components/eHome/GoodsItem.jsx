import React, { Component } from 'react'
import {GoodsItemWrap} from './styledEhomeCom'
import {withRouter} from 'react-router-dom'
@withRouter
class GoodsItem extends Component {
  // onTouchEnd={this.handleDetail.bind(this,item.linkId)} 
  // handleDetail(linkId){
  //    this.props.history.push(`/detail/${linkId}`)
  // }
  render() {
    let goodList = this.props.goodList
    return (
      <>
        {
          goodList.map((item) =>{
            return(
              <GoodsItemWrap 
                className="list-item"
                key={item.id}
                data-proid={item.linkId}
                >
                <a href={`/detail/${item.linkId}`}  className="img">
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
export default GoodsItem