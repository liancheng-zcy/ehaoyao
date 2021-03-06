import React, { Component } from 'react'
import {NeedWrap} from './styledCart'
export default class Needs extends Component {
  render() {
    return (
      <NeedWrap>
        <div className="cover"></div>
        <div className="no-result" style={{display:"none"}}>
          <p className="no-result-tips">需求清单没有商品, 你还可以</p><a href="/" className="btn-contact-us nuxt-link-active">去逛逛</a>
        </div>
        <div className="cart-list"  >
            <div className="hd">
              <div className="title">
                <div className="left">
                  <span className="icon-check icon-check-box icon-check-on">
                  </span>
                  <span className="pharmacyName">
                    好药师商城
                </span>
                </div>
                <span className="freeship">还差¥14.00包邮</span>
              </div>
              <div className="getCoupon" style={{display:'none'}}>领券</div>
            </div>
            <div className="content">
              <div className="cartList-item">
                <div className="mainInfo">
                <div className="item">
                  <div className="icon-check-box"><span className="icon-check icon-check-on"></span></div>
                  <div className="img">
                    <img
                    src="http://image.qumaiyao.com/data/goodscenter/imges/set_meal_copy_56426/000000005f48950d015f5b7bad480f77_zfx_small0.jpg"
                    alt="同仁堂 阿胶(铁盒) 250g" 
                    />
                  </div>
                  <div className="right">
                    <p className="p-name">同仁堂 阿胶(铁盒) 250g</p>
                    <div className="p-specification">规格: 同仁堂 阿胶250g</div>
                    <div className="otherInfo">
                      <div className="priceBox">
                        <span className="symbol">￥</span><span className="price">699</span>
                      </div>
                      <div className="numBox">
                        <div className="operate-num">
                          <span className="btn-minus disabled"></span>
                          <input type="number" pattern="\d*" min="1" className="p-num" />
                          <span className="btn-plus">
                          </span>
                        </div>
                      </div>
                      <span className="btn-delete"></span>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
      </NeedWrap>
    )
  }
}
