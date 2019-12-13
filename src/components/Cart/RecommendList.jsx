import React, { Component } from 'react'
import { RecommendListWrap } from './styledCart'
import { post } from 'utils/http'
export default class RecommendList extends Component {
  constructor(){
    super()
    this.state = {
      list:null
    }
  }
  async componentDidMount(){
    let result = await post({
      url:'/post_api/front_api/recommend/order-cart',
      data:{
        cityId: "027",
        coonType: "5",
        make_up: true,
        page_no: 3,
        page_size: 6,
        type: "default",
        user_id: "zyUnJwnuSyUZUTsviDM8vKzEGilYG76m",
      }
    })
   
    this.setState({
      list:result
    })
    console.log(result.data.data)
  }
  render() {
    return (
      <RecommendListWrap>
        <div id="loadmore-wrapper" className="scroll-loadmore-wrapper content down">
          <div className="inner">
            <ul className="list clearfix">
              <li className="list-item">
                <div className="img">
                  <img
                    src="http://image.qumaiyao.com/data/goodscenter/imges/set_meal_copy_444314/8a8094216c1eeba9016cccb5bea8542a_zfx_big1.jpg"
                    alt="299元/盒)东阿阿胶 复方阿胶浆(无蔗糖) 20ml*48支 3盒装"
                  />
                </div>
                <p className="p-name">299元/盒)东阿阿胶 复方阿胶浆(无蔗糖) 20ml*48支 3盒装</p>
                <p className="p-desc">用于肺热咳嗽，痰稠色黄，咯痰不爽，新老包装随机发货</p>
                <p className="p-spec">规格: 20ml*48支*3</p>
                <ul className="promotions"></ul>
                <div className="otherInfo">
                  <div className="price">
                    <span className="sell-price">
                      <i className="unit">￥</i>897.00
                    </span>
                    <span className="old-price">￥1098.00</span>
                  </div>
                  <span className="btn-cart">+</span>
                </div>
              </li>
              <li className="list-item"></li>
              <li className="list-item"></li>
              <li className="list-item"></li>
            </ul>
            <footer className="load-more"><span>点击加载更多</span></footer>
          </div>
        </div>
      </RecommendListWrap>
    )
  }
}
