import React, { Component } from 'react'
import { CartWrap,CartContentWrap } from './styledCart'
import LoginBar from './Login_bar'
import Needs from './Needs'
import Carts from './Carts'
import Recommend from 'components/Cart/Recommend'
export default class Cart extends Component {
  constructor(){
    super()
    this.state = {
      isCart:'cart'
    }
  }
  onIsCart = (opt) =>{
    return () =>{
      this.setState({
        isCart:opt
      })
    }
  }
  render() {
    return (
      <CartWrap>
        <header className="header">
          <div className="goback"></div>
          <div className="main">
            <div className="main-title">
              <ul className="menu-tab">
                <li className={`tab-item ${this.state.isCart === 'cart'? 'on' : ''}`} 
                  onTouchEnd = {this.onIsCart('cart')}
                >购物车<i>1</i></li>
                <li className={`tab-item ${this.state.isCart === 'need'? 'on' : ''}`} 
                  onTouchEnd = {this.onIsCart('need')}
                >需求清单<i style={{ display: 'none' }}>0</i></li>
              </ul>
            </div>
          </div>
          <div className="right"><span className="operateBtn">编辑</span></div>
        </header>
        <CartContentWrap className="cart-wrapper">
          <LoginBar></LoginBar>
          {
           this.state.isCart === 'cart' ? <Carts></Carts> : <Needs></Needs>
          }
        </CartContentWrap>
        <Recommend></Recommend>
      </CartWrap>
    )
  }
}
