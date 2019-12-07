import React, { Component } from 'react'
import { GoodsWrap } from './styledEhome'
import GoodsList from 'components/eHome/GoodsList'
export default class Goods extends Component {
  render() {
    return (
      <GoodsWrap>
        <div className="goods-box">
          <div className="title">好货推荐</div>
          <GoodsList></GoodsList>
        </div>
      </GoodsWrap>
    )
  }
}
