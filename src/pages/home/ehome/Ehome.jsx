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
import Bottom from './Bottom'
import BScroll from 'better-scroll'
// import CountDown from './CountDown'
export default class Ehome extends Component {
  componentDidMount(){
    new BScroll('.eHome', {
      probeType: 2,
      preventDefault:false,
      click: true
    });
  }
  render() {
    return (
      <>
        <div className="tipBox">
          <Ad></Ad>
          <Header></Header>
        </div>
        <div className ="eHome" style={{
          overflow:'hidden',
          width:'100%',
          height:'100%'
        }}>
          <div className ="eHomeContent">
            <Swiper></Swiper>
            <PromiseBox></PromiseBox>
            <FuncitonList></FuncitonList>
            <Recommend></Recommend>
            <Seckill></Seckill>
            <Instrument></Instrument>
            <Brands></Brands>
            <Promotion></Promotion>
            <Goods></Goods>
            <Bottom></Bottom>
          </div>
        </div>
      </>
    )
  }
}
