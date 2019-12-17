import React, { Component } from 'react'
import { PharmacistContentWrap } from './Pharmacist'
import { get } from 'utils/http'
export default class PharmacistContent extends Component {
  state = {
    doctorList: []
  }
  async componentDidMount() {
    let result = await get({
      url: '/api/mds/api/app/apiv3_0/consultDoctor.json',
      params: {
        coonType: '5',
        cityId: '027'
      }
    })
    this.setState({
      doctorList: result.data.datas[0].datas
    })
  }
  render() {
    return (
      <PharmacistContentWrap>
        <div className="askPharmacist-wrapper">
          <p className="tips">药师承诺：不推荐无关价格昂贵的药品</p>
          <ul className="pharmacist-list">
            {
              this.state.doctorList.map((val, index) => {
                return (
                  <li 
                    className="item"
                    key={val.code}
                  >
                    <div className="img"><img src={val.imgPath} alt="" /></div>
                    <div className="info">
                <div className="named">{val.doctorName}<span>{val.title}</span></div>
                <p className="aptitudesNo">资质编号 {val.code}</p>
                {/* <span>12年药师经验</span><span>丰富的临床和用药经验</span> */}
                      <div className="labels">
                        {
                          val.specialty.split(',').map((val,index)=>{
                            return(
                              <span
                                key={val}
                              >{val}</span>
                            )
                          })
                        }
                      </div>
                    </div>
                    <div className="opt"><span className="btn_askNow">立即咨询</span></div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </PharmacistContentWrap>
    )
  }
}
