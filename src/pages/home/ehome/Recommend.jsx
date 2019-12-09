import React, { Component } from 'react'
import {Carousel} from 'antd-mobile'
import {RecommendWrap} from './styledEhome'
export default class Recommend extends Component {
  render() {
    return (
    <RecommendWrap id="recommend-container" className="recommend-box swiper-container swiper-container-vertical swiper-container-ios">
      <ul className="recommend-list swiper-wrapper">
        <Carousel className="my-carousel"
        vertical
        dots={false}
        dragging={false}
        swiping={false}
        autoplay
        infinite
      >
        <div className="v-item">参茸补肾片对那些症状有效呢？</div>
        <div className="v-item">吃非布司他片注意事项有哪些?</div>
        <div className="v-item">参茸补肾片对那些症状有效呢？</div>
        <div className="v-item">吃非布司他片注意事项有哪些?</div>
      </Carousel>
      </ul>
      <span className="icon-more"></span>
      <span className="swiper-notification"></span>
    </RecommendWrap>
    )
  }
}
