import React from 'react'
import {SortWrap} from './common'
function Sort(){
  return(
    <>
     <SortWrap className="sort-wrapper">
       <li className="">综合排序</li>
       <li className="desc">价格<span className="order-by">
        </span></li><li className="on">筛选
        </li>
      <li className="">自营</li>
    </SortWrap>
    </>
  )
}
export default Sort