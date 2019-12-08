import React, { Component } from 'react'
import { BottomWrap } from './styledEhome'
export default class Bottom extends Component {
  render() {
    return (
      <BottomWrap>
        <div className="bottom-box">
          <img src="http://m.ehaoyao.com/images/bg_about_us.png" className="img-aboutus" alt="" />
          <div className="btn-list">
            <span>注册</span>|<span>登录</span>|<span className="">健康资讯</span>|<span>回顶部</span>
          </div>
          <a
            href="tel:400-648-5566">
            <img src="http://m.ehaoyao.com/images/bg-tel-idx.jpg" className="img-consult-telephone" alt="" /></a>
          <a href="http://m.ehaoyao.com/product-18491.html">
            <img
              src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/6/20/1561020700906_27.jpg" alt="" />
          </a>
          <p className="copyright">© 2005-2019 好药师 版权所有，并保留所有权利</p>
        </div>
      </BottomWrap>
    )
  }
}
