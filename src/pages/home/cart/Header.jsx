import React, { Component } from 'react'
import { HeaderWrap } from './styledCart'
export default class Header extends Component {
  render() {
    return (
      <HeaderWrap>
        {/* <header className="header">
          <div className="goback"></div>
          <div className="main">
            <div className="main-title">
              <ul className="menu-tab">
                <li className="tab-item on">购物车<i>1</i></li>
                <li className="tab-item">需求清单<i style="display: none;">0</i></li>
              </ul>
            </div>
          </div>
          <div className="right"><span className="operateBtn">编辑</span></div>
        </header> */}
      </HeaderWrap>
    )
  }
}