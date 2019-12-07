import React, { Component } from 'react'
import { InstrumentWrap } from './styledEhome'
export default class Instrument extends Component {
  render() {
    return (
      <InstrumentWrap>
        <div className="instrument-box">
          <div className="title">精品专区</div>
          <div className="content">
            <div className="top">
              <a className="c-left">
                <img src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/12/6/1575624207012_34.jpg" className="l-img-01" /></a>
              <div className="c-right"><a>
                <img src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/12/6/1575624160020_67.jpg" className="r-img-01" /></a>
                <a><img
                  src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/12/6/1575624235353_89.jpg" className="r-img-02" /></a>
              </div>
            </div>
            <ul className="list">
              <li className="list-item">
                <a ><img
                  src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/12/6/1575624291908_20.jpg" /></a></li>
              <li className="list-item"><a >
                <img src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/12/6/1575624322278_84.jpg" /></a></li>
              <li className="list-item"><a>
                <img src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/12/6/1575624366830_41.jpg" /></a></li>
            </ul>
          </div>
        </div>

      </InstrumentWrap>
    )
  }
}
