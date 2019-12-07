import React, { Component } from 'react'
import { PromiseWrap } from './styledEhome'
export default class PromiseBox extends Component {
  render() {
    return (
      <PromiseWrap className="promise-box">
        <li className="item">正品保证</li>
        <li className="item">满79包邮</li>
        <li className="item">隐私包装</li>
      </PromiseWrap>
    )
  }
}
