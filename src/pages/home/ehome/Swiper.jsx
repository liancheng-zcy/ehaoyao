import React, { Component } from 'react'
import { SwiperWrap } from './styledEhome'
import { Carousel } from 'antd-mobile';
import { get } from 'utils/http'
import inject_unount from 'utils/inject_unount.js'
 @inject_unount 
 class Swiper extends Component {
  state = {
    data: ['1','2','3'],
    imgHeight: 150,
  }
  async componentDidMount() {
    let result = await get({
      url:"/ajax/goods",
    })
    this.setState({
      data: result.data[0].gallery,
    });
  }
  render() {
    return (
      <SwiperWrap>
          <Carousel
            autoplay={true}
            infinite
            dotActiveStyle={{
              background:'#ff344d'
            }}
            dotStyle={{
              background:'#f2e2e3'
            }}
            slideWidth={1}
          >
            {this.state.data.map(val => (
              <a
                key={val.name + val.id}
                href={val.linkUrl}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={val.imageUrl}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top',height:'150px' }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
      </SwiperWrap>
    )
  }
}

export default Swiper
