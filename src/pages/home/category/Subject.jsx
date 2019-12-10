import React, { Component } from 'react'
import { SubjectWrap } from './styledCategory'
export default class Subject extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <>
        <SubjectWrap>
          <div className="label-list clearfix">
            <a href="#66" className="item">补益用药</a>
            <a href="#67" className="item">儿科</a>
            <a href="#68" className="item">风湿骨科</a>
            <a href="#69" className="item">妇科</a>
            <a href="#70" className="item">肝胆科</a>
            <a href="#71" className="item">呼吸科</a>
            <a href="#72" className="item">抗菌消炎</a>
            <a href="#73" className="item">泌尿科</a>
            <a href="#74" className="item">男科</a>
            <a href="#75" className="item">内分泌科</a>
            <a href="#76" className="item">皮肤科</a>
            <a href="#78" className="item">神经精神科</a>
            <a href="#79" className="item">五官科</a>
            <a href="#80" className="item">消化科</a>
            <a href="#81" className="item">心脑血管科</a>
            <a href="#82" className="item">肿瘤科</a>
          </div>
          <dl id="66" className="subject-item">
            <dt className="item-title">补益用药</dt>
            <dd className="item-list">
              <img src="http://image.qumaiyao.com/mogfile/onimage/2017081415542181DE5E392BD1F2DA27DE62AED3A52DBC.jpg" alt=""
                className="img" />
              <span>补气养血</span>
            </dd>
            <dd className="item-list"><img
              src="http://image.qumaiyao.com/mogfile/onimage/2017082210333040C00B4A9ACAC8110BABADAAD68728FA.jpg" alt=""
              className="img" />
              <span>免疫调节</span>
            </dd>
            <dd className="item-list"><img
              src="http://image.qumaiyao.com/mogfile/onimage/2017081415514128596FDB24434E07C1A12298AE2C8CE1.jpg" alt=""
              className="img" />
              <span>维矿物质</span>
            </dd>
          </dl>
        </SubjectWrap>
      </>

    )
  }
}
