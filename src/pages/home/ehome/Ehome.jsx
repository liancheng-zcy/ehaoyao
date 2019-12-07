import React, { Component } from 'react'
import Header from './Header'
import Ad from 'components/eHome/Ad'
import Swiper from './Swiper'
import PromiseBox from './Promise'
import FuncitonList from './FuncitonList'
import Recommend from './Recommend'
import Seckill from './Seckill'
import Instrument from './Instrument'
import Brands from './Brands'
import Promotion from './Promotion'
import Goods from './Goods'
export default class Ehome extends Component {
  render() {
    return (
      <div>
        <div className="tipBox">
          <Ad></Ad>
          <Header></Header>
        </div>
        <Swiper></Swiper>
        <PromiseBox></PromiseBox>
        <FuncitonList></FuncitonList>
        <Recommend></Recommend>
        <Seckill></Seckill>
        <Instrument></Instrument>
        <Brands></Brands>
        <Promotion></Promotion>
        <Goods></Goods>
      </div>
    )
  }
}
