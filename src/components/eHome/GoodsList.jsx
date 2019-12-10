import React, { Component } from 'react'
import { get } from 'utils/http'
import {GoodsListWrap} from './styledEhomeCom'
import GoodsItem from './GoodsItem'
export default class GoodsList extends Component {
  constructor(){
    super()
    this.state = {
      goodList:[]
    }
  }
  async componentDidMount(){
    let result = await get({
      url:"/ajax/goods",
    })
    let data = result.data[0].goods.map((val,index)=>{
      return {
          id:val.id,
          imageUrl:val.imageUrl,
          linkId:val.linkUrl.match(/\d+/g)[0],
          name:val.name,
          price:val.price,
          type:val.type,
          displayOrder:val.displayOrder,
          mode:val.mode
        }
    })
    this.setState({
      goodList:data
    })
   
  }
  render() {
    return (
      <>
         <GoodsListWrap className="content">
            <GoodsItem goodList={this.state.goodList}></GoodsItem>
          </GoodsListWrap>
      </>
    )
  }
}
