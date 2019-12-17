import React, { Component } from 'react'
import {GoodsItemWrap} from './styledEhomeCom'
import {withRouter} from 'react-router-dom'
@withRouter
class GoodsItem extends Component {
  handleDetail(item){
    //  this.props.history.push('/detail')
    console.log(item)

  }
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
                <a  onClick={this.handleDetail.bind(this,item)} href={`javascript:void(0)`} className="img">
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