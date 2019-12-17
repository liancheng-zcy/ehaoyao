import React, { Component } from 'react'
import { CartsWrap } from './styledCart'
import { connect } from 'react-redux'
// import { GETCARTLIST } from 'pages/home/action_types'
import { 
  ADD_SHOP,
  SUB_SHOP,
  NUM_SHOP,
  TOGGLE_SHOP,
  REMOVE_SHOP,
  SELECT_ALL_SHOP
} from 'pages/home/action_types'
const mapStateToProps = (state) => ({
  cartList: state.cart.CartData,
  selectStatus:state.cart.selectStatus
})
const mapDisPatchToProps = (dispatch) =>({
  addShop(goods_id){
    dispatch({
      type:ADD_SHOP,
      goods_id
    })
  },
  subShop(goods_id){
    dispatch({
      type:SUB_SHOP,
      goods_id
    })
  },
  NumShop(num,goods_id){
    dispatch({
      type:NUM_SHOP,
      num,
      goods_id,
    })
  },
  toggleShop(goods_id){
    dispatch({
      type:TOGGLE_SHOP,
      goods_id,
    })
  },
  removeShop(goods_id){
    dispatch({
      type:REMOVE_SHOP,
      goods_id
    })
  },
  selectAll(){
    dispatch({
      type:SELECT_ALL_SHOP,
    })
  }
})
@connect(mapStateToProps,mapDisPatchToProps) class Carts extends Component {
  constructor() {
    super()
    this.state = {
      cartList: []
    }
  }
  addShop = (id) =>{//商品加入
    return () =>{
      // console.log(id)
      this.props.addShop(id)
    }
  }
  subShop = (id) =>{
    return () =>{
      this.props.subShop(id)
    }
  }
  changeNum (e,id) {
      this.props.NumShop(e.target.value,id)
  }
  toggleShop = (id) =>{
    return () =>{
      this.props.toggleShop(id)
    }
  }
  shopDel = (id) =>{
    return () =>{
     this.props.removeShop(id)
    }
  }
  selectSta = () =>{
    return () =>{
     this.props.selectAll()
    }
  }
  static getDerivedStateFromProps(props, state) {
  if (props.cartList && JSON.stringify(props.cartList) !== JSON.stringify(state.cartList)) {
      return {
        cartList: props.cartList
      }
    } else {
      return null
    }
  }
  render() {
    console.log(this.state.cartList)
    console.log(this.props)
    return (
      <>
        <CartsWrap>
          {
            this.state.cartList.length <= 0
              ? (
                <>
                  <div className="cover"></div>
                  <div className="no-result" >
                    <p className="no-result-tips">购物车没有商品, 你还可以</p><a href="/" className="btn-contact-us nuxt-link-active">去逛逛</a>
                  </div>
                </>
              )
              : (
                <div className="cart-list">
                  <div className="hd">
                    <div className="title">
                      <div className="left">
                        <span 
                        className={`icon-check icon-check-box ${this.props.selectStatus ? "icon-check-on" : ""}`}
                        onTouchEnd={this.selectSta()}
                        >
                        </span>
                        <span className="pharmacyName">
                          好药师商城
                        </span>
                      </div>
                      <span className="freeship">已包邮</span>
                    </div>
                    <div className="getCoupon">领券</div>
                  </div>
                  <div className="content">
                    <div className="cartList-item">
                      {
                        this.state.cartList.map((val) => {
                          return (
                            <div className="mainInfo" key={val.goods_id}>
                              <div className="item">
                                <div 
                                  className="icon-check-box"
                                  onTouchEnd={this.toggleShop(val.goods_id)}
                                ><span className={`icon-check ${val.isChecked ? "icon-check-on":""}`}></span></div>
                                <div className="img">
                                  <img
                                    src={`http://image.qumaiyao.com/${val.big_pic}`}
                                    alt="同仁堂 阿胶(铁盒) 250g"
                                  />
                                </div>
                                <div className="right">
                                  <p className="p-name">{val.name}</p>
                                  <div className="p-specification">规格: {val.spec}</div>
                                  <div className="otherInfo">
                                    <div className="priceBox">
                                      <span className="symbol">￥</span><span className="price">{val.price}</span>
                                    </div>
                                    <div className="numBox">
                                      <div className="operate-num">
                                        <span 
                                          className="btn-minus"
                                          onTouchEnd = {this.subShop(val.goods_id)}
                                        ></span>
                                        <input 
                                          type="number" 
                                          pattern="\d*" 
                                          min="1" className="p-num" 
                                          onChange = {(e) =>{
                                           return this.changeNum(e,val.goods_id)
                                          }}
                                          value={val.allNum} 
                                        />
                                        <span 
                                          className="btn-plus" 
                                          onTouchEnd = {this.addShop(val.goods_id)}>
                                        </span>
                                      </div>
                                    </div>
                                    <span 
                                      className="btn-delete"
                                      onTouchEnd={
                                        this.shopDel(val.goods_id)
                                      }
                                    ></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              )
          }
        </CartsWrap>
      </>
    )
  }
}

export default Carts