import React, { Component } from 'react'
import { PromotionWrap } from './styledEhome'
export default class Promotion extends Component {
  render() {
    return (
      <PromotionWrap>
        <div className="promotion-box">
          <div className="title">品牌活动专区</div>
          <div className="content">
            <a href="true" className="c-left"><img
            src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/8/1573204688884_85.jpg" className="l-img-01" alt="" /></a>
            <div className="c-right"><a href="true"><img
              src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/22/1574412441226_68.jpg" className="r-img-01" alt=""/></a>
              <a href="true"><img
                src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/12/6/1575623846326_91.jpg" className="r-img-02" alt="图片" /></a></div>
          </div>
        </div>
      </PromotionWrap>
    )
  }
}
