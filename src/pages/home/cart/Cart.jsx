import React, { Component } from 'react'
import { CartWrap, CartContentWrap } from './styledCart'
import LoginBar from './Login_bar'
import Needs from './Needs'
import Carts from './Carts'
import Recommend from 'components/Cart/Recommend'
import BScroll from 'better-scroll'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  SELECT_ALL_SHOP,
  CANCEL_ALL_SHOP,
  REMOVE_SELECT_SHOP,
} from 'pages/home/action_types'
const mapStateToProps = (state) => ({
  cartList: state.cart.CartData,
  AllPrice: state.cart.AllPrice,
  subSelect: state.cart.subSelect,
  selectStatus:state.cart.selectStatus,
})
const mapDisPatchToProps = (dispatch) => ({
  selectAll() {
    dispatch({
      type: SELECT_ALL_SHOP,
    })
  },
  cancelAll(opt) {
    dispatch({
      type: CANCEL_ALL_SHOP,
      opt
    })
  },
  selectDel(isCart) {//删除选中
    dispatch({
      type: REMOVE_SELECT_SHOP,
      isCart
    })
  }
})

@withRouter
@connect(mapStateToProps, mapDisPatchToProps)
class Cart extends Component {
  constructor() {
    super()
    this.state = {
      isCart: 'cart',
      optStatus: true
    }
  }
  onIsCart = (opt) => {
    return () => {
      this.setState({
        isCart: opt
      })
    }
  }
  onGoBack = () => {
    this.props.history.goBack()
  }
  optionBtn = () => {
    // this.state.optStatus = !this.state.optStatus
    this.setState((state) =>{
      state.optStatus = !state.optStatus
    }, () => {
      this.props.cancelAll(this.state.optStatus)
    })
  }
  selectSta = () =>{
    return () =>{
     this.props.selectAll()
    }
  }
  selectDele = () =>{
    let isCart = this.state.isCart
    return () =>{
      this.props.selectDel(isCart)
    }
  }
  componentDidMount() {
    // bScroll.refresh();
    new BScroll('.CartScroll', {
      probeType: 2,
      preventDefault: false,
      click: true
    });
  }
  render() {

    return (
      <CartWrap>
        <header className="header">
          <div className="goback" onTouchEnd={this.onGoBack}></div>
          <div className="main">
            <div className="main-title">
              <ul className="menu-tab">
                <li className={`tab-item ${this.state.isCart === 'cart' ? 'on' : ''}`}
                  onTouchEnd={this.onIsCart('cart')}
                >购物车<i>{this.props.subSelect}</i></li>
                <li className={`tab-item ${this.state.isCart === 'need' ? 'on' : ''}`}
                  onTouchEnd={this.onIsCart('need')}
                >需求清单<i style={{ display: 'none' }}>0</i></li>
              </ul>
            </div>
          </div>
          <div className="right">
            <span
              className="operateBtn"
              onTouchEnd={this.optionBtn}
            >{this.state.optStatus ? '编辑' : '完成'}</span>
          </div>
        </header>
        <div className="CartScroll" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
          <div className="CartScrollContent">
            <CartContentWrap className="cart-wrapper">
              <LoginBar></LoginBar>
              {
                this.state.isCart === 'cart' ? <Carts></Carts> : <Needs></Needs>
              }
            </CartContentWrap>
            <Recommend></Recommend>

          </div>
        </div>
        {
          this.props.cartList.length > 0 && (<div className="cart-footer">
            <div className="footer-wrapper">
              {
                this.state.optStatus ? (
                  <>
                    <div className="totalAmount">
                      <div>合计:<span className="amount">￥{this.props.AllPrice.toFixed(2)}</span></div>
                    </div>
                    <div className="btn-balance">结算({this.props.subSelect})</div>
                  </>
                )
                  : (
                    <>
                      <div className="icon-check-all">
                        <span 
                          className={`icon-check ${this.props.selectStatus ? "icon-check-on" : ""}`}
                          onTouchEnd={this.selectSta()}
                        ></span>全选
                    </div>
                      <div 
                        className="btn-delete-all"
                        onTouchEnd={this.selectDele()}
                      >删除</div>
                    </>
                  )
              }
            </div>
          </div>)
        }
      </CartWrap>
    )
  }
}

export default Cart