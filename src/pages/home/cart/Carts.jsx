import React, { Component } from 'react'
import { CartsWrap } from './styledCart'
import { connect } from 'react-redux'
// import { GETCARTLIST } from 'pages/home/action_types'
const mapStateToProps = (state) => ({
  cartList: state.cart.CartData
})

@connect(mapStateToProps) class Carts extends Component {
  constructor() {
    super()
    this.state = {
      cartList: []
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.cartList) {
      return {
        cartList: props.cartList
      }
    } else {
      return null
    }
  }
  render() {
    console.log(this.state.cartList)
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
                        <span className="icon-check icon-check-box icon-check-on">
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
                              <div className="item" >
                                <div className="icon-check-box"><span className="icon-check icon-check-on"></span></div>
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
                                        <span className="btn-minus disabled"></span>
                                        <input type="number" pattern="\d*" min="1" className="p-num" defaultValue={val.allNum} />
                                        <span className="btn-plus">
                                        </span>
                                      </div>
                                    </div>
                                    <span className="btn-delete"></span>
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