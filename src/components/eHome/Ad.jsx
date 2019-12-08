import React, { Component } from 'react'
import { AdWrap } from './styledEhomeCom'
export default class Ad extends Component {
  render() {
    return (
      <AdWrap className="top-download-app">
        <span className="icon-close"></span>
        <div className="content">下载好药师APP
          <span className="money">注册即领150元</span>
        </div>
        <a href="true" target="_self" className="btn-download">立即下载</a>
      </AdWrap>
    )
  }
}
