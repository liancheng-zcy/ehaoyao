import React, { Component } from 'react'
import { RecommendListWrap } from './styledCart'
import { post } from 'utils/http'
import { connect } from 'react-redux'
import { GETCARTLIST } from 'pages/home/action_types'
import { Toast } from 'antd-mobile';
const mapDispatchToProps =  (dispatch) => ({
  getCartList(goodsVal){
    dispatch({
      type:GETCARTLIST,
      goodsVal
    })
  }
})
 @connect(null,mapDispatchToProps)
 class RecommendList extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      moreDec:'点击加载更多', 
      startNum:1
      
    }
  }
  async componentDidMount() {
    
    let result = await post({
      url: '/post_api/front_api/recommend/order-cart',
      data: {
        cityId: "027",
        coonType: "5",
        make_up: true,
        page_no: 1,
        page_size: 6,
        type: "default",
        user_id: "zyUnJwnuSyUZUTsviDM8vKzEGilYG76m",
      }
    })
    this.setState({
      list: result.data.data
    })
  }
   page = 1
   onListMore = async () =>{
    this.page ++
    this.setState({
      moreDec:'加载中...'
    })
    let result = await post({
      url: '/post_api/front_api/recommend/order-cart',
      data: {
        cityId: "027",
        coonType: "5",
        make_up: true,
        page_no: this.page,
        page_size: 6,
        type: "default",
        user_id: "zyUnJwnuSyUZUTsviDM8vKzEGilYG76m",
      }
    })
    this.setState((state) =>{
      state.list = [...state.list,...result.data.data]
        return{
          moreDec:'点击加载更多',
          list:state.list
        }
      })
  }
  onAddCart = (val) =>{
   return () =>{
    let goods = {
      score: val.score,
      goods_id: val.goods_id,
      name:val.name,
      brief: val.brief,
      pharmacy_id: val.pharmacy_id,
      three_months_sales: val.three_months_sales,
      activity_list: val.activity_list,
      big_pic: val.big_pic,
      bn: val.bn,
      spec: val.spec,
      identification: val.identification,
      is_prescribed: val.is_prescribed,
      internal_price: val.internal_price,
      market_price: val.market_price,
      price: val.price,
      store: val.store,
      group_id: val.group_id,
      cat_3_name: val.cat_3_name,
      cat_2_name: val.cat_2_name,
      cat_1_name: val.cat_1_name,
      allNum: 1,
    }
    this.props.getCartList(goods)
    Toast.info('商品添加成功', 3);
   }
  
  }
  render() {
    let list = this.state.list
    return (
      <RecommendListWrap>
        <div id="loadmore-wrapper" className="scroll-loadmore-wrapper content down">
          <div className="inner">
            <ul className="list clearfix">
              {
                list.map((val,index) =>{
                  return(
                    <li 
                      className="list-item"
                      key={val.group_id + val.name + index}
                      data-group_id = {val.group_id}
                    >
                    <div className="img">
                      <img
                        src={`http://image.qumaiyao.com/${val.big_pic}`}
                        alt="299元/盒)东阿阿胶 复方阿胶浆(无蔗糖) 20ml*48支 3盒装"
                      />
                    </div>
                  <p className="p-name">{val.name}</p>
                  <p className="p-desc">{val.brief}</p>
                  <p className="p-spec">规格: {val.spec}</p>
                    <ul className="promotions"></ul>
                    <div className="otherInfo">
                      <div className="price">
                        <span className="sell-price">
                          <i className="unit">￥</i>{val.price}
                    </span>
                  <span className="old-price">￥{val.market_price}</span>
                      </div>
                      <span 
                        className="btn-cart"
                        onTouchEnd={this.onAddCart(val)}
                        >+</span>
                    </div>
                  </li>
                  )
                })
              }
            </ul>
          <footer className="load-more" onTouchEnd={this.onListMore}><span>{this.state.moreDec}</span></footer>
          </div>
        </div>
      </RecommendListWrap>
    )
  }
}

export default RecommendList