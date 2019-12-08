import React, { Component } from 'react'
import { HeaderWrap } from './styledEhome'
import logo from 'assets/images/logo.png'
export default class Header extends Component {
  render() {
    return (
      <HeaderWrap>
        <header className="header">
            <img src={logo} alt="logo" className="logo"/>
            <div className="search-box"><span className="input-text">泰尔丝 补肺丸 鸿茅药酒</span>
            </div>
            <a href="true" className="btn_login">登录</a>
        </header>
      </HeaderWrap>
        )
      }
    }
