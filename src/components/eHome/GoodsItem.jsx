import React, { Component } from 'react'
import {GoodsItemWrap} from './styledEhomeCom'
import {withRouter} from 'react-router-dom'
@withRouter
class GoodsItem extends Component {
  // componentDidMount(){

  // }
  handleDetail = () =>{
    return () =>{
      console.log(this.props,1)
    }
  }
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
                onClick={this.handleDetail}
                >
                <a href="#" className="img">
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