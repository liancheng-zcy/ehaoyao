import React, { Component } from 'react'
import { LoginBarWrap } from './styledCart'
export default class LoginBar extends Component {
  render() {
    return (
      <LoginBarWrap className = "login-bar">
        <span>登录后可同步电脑与手机购物车中的商品</span>
        <span className="login_btn">登录</span>
      </LoginBarWrap>
    )
  }
}
