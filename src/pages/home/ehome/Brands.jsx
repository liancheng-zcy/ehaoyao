import React, { Component } from 'react'
import { BrandsWrap } from './styledEhome'
import { get } from 'utils/http'
export default class Brands extends Component {
  state = {
    data: [],
  }
 async componentDidMount(){
    let result = await get({
      url:"/ajax/goods",
    })
    this.setState({
      data:result.data[0].brands
    })
  }
  render() {
    return (
      <BrandsWrap>
        <div className="brands-box">
          <div className="title">品牌旗舰店</div>
          <ul className="content">
           {
             this.state.data.map((val,index)=>{
               return(
                <li className="list-item" key={val.id}>
                <a href="true">
                  <img
                    src={val.imageUrl} 
                    alt={val.name} 
                  />
                  </a>
                </li>
               )
             })
           }
          </ul>
        </div>
      </BrandsWrap>
    )
  }
}
