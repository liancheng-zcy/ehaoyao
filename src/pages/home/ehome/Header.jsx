import React, { Component } from 'react'
import { HeaderWrap } from './styledEhome'
import logo from 'assets/images/logo.png'
import {withRouter} from 'react-router-dom'
// import Search from '../../../components/common/Search'
@withRouter 
class Header extends Component {
  ToSearch = () =>{
    this.props.history.push('/search')
  }
  render() {
    return (
      <HeaderWrap>
        <header className="header">
            <img src={logo} alt="logo" className="logo"/>
            <div 
              className="search-box"
              onTouchEnd={this.ToSearch}
            >
              <span className="input-text">泰尔丝 补肺丸 鸿茅药酒</span>
            </div>
            <a href="true" className="btn_login">登录</a>
        </header>
      </HeaderWrap>
        )
      }
    }
    export default Header