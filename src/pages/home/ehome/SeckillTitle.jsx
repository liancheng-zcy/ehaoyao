import React, { Component } from 'react'
import { get } from 'utils/http.js'
import inject_unount from 'utils/inject_unount.js'


  @inject_unount
  class SeckillTitle extends Component {
  state = {
    oDay: '00',
    oHour: '00',
    oMinute: '00',
    oSecond:'00'
  }
  async componentDidMount() {
    let result = await get({
      url: "/api/mds/api/app/apiv3_0/getBuyingGoodsMSite.json?",
      params: {
        coonType: '5',
        cityId: '027'
      }
    })
    let countDown = new Date(result.data.data.purchaseEndTime) - new Date(result.data.data.nowdate)
    //获取天数
    let oDay = parseInt(countDown / 1000 / 60 / 60 / 24);
    //获取小时数
    let oHour = parseInt(countDown / 1000 / 60 / 60 % 24);
    //获取分钟数
    let oMinute = parseInt(countDown / 1000 / 60 % 60);
    //获取秒数
    let oSecond = parseInt(countDown/1000%60);
    setInterval(() => {
      oSecond--
      if(oSecond <= 0){
        oMinute = oMinute - 1
        oSecond = 59
      }
      if(oMinute <= 0){
        oHour = oHour - 1
        oMinute = 59
      }
      if(oHour <= 0){
        oDay = oDay - 1
        oHour = 23
      }
      this.setState({
        oDay: oDay,
        oHour: oHour,
        oMinute: oMinute,
        oSecond:oSecond
      })
    }, 1000);
  }
  render() {
    return (
      <div className="title"><img src="http://m.ehaoyao.com/_nuxt/img/bg_seckill_title.8980e05.png" alt="限时抢购" className="icon-title" />
        <div className="countdown-wrapper seckill-container time-box">
          <div className="countDown">
            <div className="timer-wrapper">
              <span className="timer-remain">剩余</span>
              <div className="timer-item"><span className="timerText">{this.state.oDay}</span><span className="unit">天</span></div>
              <div className="timer-item"><span className="timerText">{this.state.oHour}</span><span className="unit">时</span></div>
              <div className="timer-item"><span className="timerText">{this.state.oMinute}</span><span className="unit">分</span></div>
              <div className="timer-item"><span className="timerText">{this.state.oSecond}</span><span className="unit">秒</span></div>
            </div>
          </div>
        </div>
        <div className="title-activity">更多<span className="icon-entry-activity"></span></div>
      </div>
    )
  }
}

export default SeckillTitle
