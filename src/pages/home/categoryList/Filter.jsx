import React from 'react'
import {FilterWrap} from './styledProducts'
// import {get} from 'utils/http'
function Filter(props) {
  console.log(props)
  return (
    <FilterWrap className="filter-wrapper-shade">
      <div className="filter-wrapper">
        <div className="filter-content">
          <div className="item-title">商品状态</div>
          <ul className="pStatus-list clearfix">
            <li className="item">仅看有货</li>
          </ul>
          <div className="item-title">商品品牌</div>
          <ul className="brand-list clearfix">
            {
              props.proFilter.map((val) =>{
                return(
                  <li 
                    className="item"
                    key={val.brandId}
                >{val.brandName}</li>
                )
              })
            }
           
          </ul>
        </div>
        <div className="filter-btn">
          <span className="btn reset">重置</span>
          <span className="btn comfirm">确定</span>
        </div>
      </div>
    </FilterWrap>
  )
}

export default Filter