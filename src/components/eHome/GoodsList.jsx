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
    this.setState({
      goodList:result.data[0].goods
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
