import React, { Component } from 'react'
import { SeckillListWrap } from './styledEhomeCom'
import SeckillItem from './SeckillItem'
import { get } from 'utils/http.js'
import inject_unount from 'utils/inject_unount.js'


 @inject_unount
 class SeckillList extends Component {
  constructor(){
    super()
    this.state ={
      SeckillList:[]
    }
  }
  async componentDidMount(){
    let result = await get({
      url:"/api/mds/api/app/apiv3_0/getBuyingGoodsMSite.json?",
      params:{
        coonType:'5',
        cityId:'027'
      }
    })
    this.setState({
      SeckillList:result.data.data.homepageActivityList,
    })
  }

  render() {
    return (
    <SeckillListWrap id="seckill-container" className="content swiper-container swiper-container-horizontal swiper-container-ios">
      <ul className="list swiper-wrapper">
        <SeckillItem seckillList={this.state.SeckillList}></SeckillItem>
      </ul>
      <span className="swiper-notification"></span>
    </SeckillListWrap>
    )
  }
}

export default SeckillList
