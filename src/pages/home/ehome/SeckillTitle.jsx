import React, { Component } from 'react'

export default class SeckillTitle extends Component {
  render() {
    return (
      <div className="title"><img src="http://m.ehaoyao.com/_nuxt/img/bg_seckill_title.8980e05.png" alt="限时抢购" className="icon-title"/>
          <div className="countdown-wrapper seckill-container time-box">
            <div className="countDown">
              <div className="timer-wrapper">
                <span className="timer-remain">剩余</span>
                <div className="timer-item"><span className="timerText">01</span><span className="unit">天</span></div>
                <div className="timer-item"><span className="timerText">09</span><span className="unit">时</span></div>
                <div className="timer-item"><span className="timerText">07</span><span className="unit">分</span></div>
              </div>
            </div>
          </div>
          <div className="title-activity">更多<span className="icon-entry-activity"></span></div>
      </div>
    )
  }
}
