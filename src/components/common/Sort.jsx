import React ,{useState} from 'react'
import {SortWrap} from './common'
import {connect} from 'react-redux'
import { 
  PRO_FILTER_TOGGLE,
  PRO_TOTAL,
  PRO_DESC,
  PRO_SELF
} from 'pages/home/action_types'
const mapDispatchToProps = ((dispatch) =>({
  toggleFilter(isShow){
    dispatch({
      type:PRO_FILTER_TOGGLE,
      isShow
    })
  },
  my_Total(isTotal){
    dispatch({
      type:PRO_TOTAL,
      isTotal
    })
  },
  my_desc(isDesc){
    dispatch({
      type:PRO_DESC,
      isDesc
    })
  },
  my_self(isSelf){
    dispatch({
      type:PRO_SELF,
      isSelf
    })
  }
}))

function Sort(props){
  let [isTotal,setIsTotal] = useState(true)
  let [isPrice,setIsPrice] = useState(false)
  let [isFilter,setIsFilter] = useState(false)
  let [isSelf,setIsSelf] = useState(false)
  let [desc,setDesc] = useState(false)
  function toggleTotal(){
    setIsTotal(isTotal =>{
      isTotal = !isTotal
      props.my_Total(isTotal)
      return isTotal
    })
    setIsPrice(isPrice =>false)
    setIsFilter(isFilter =>false)
    setIsSelf(isSelf =>false)
  }
  function togglePrice(){
    setIsPrice(isPrice =>{
      isPrice = true
      return isPrice
    })
    setIsFilter(isFilter =>false)
    setIsSelf(isSelf =>false)
    setIsTotal(isTotal =>false)
    setDesc(desc => {
      desc = !desc
      props.my_desc(desc)
      return desc
    })
  }
  function toggleFilter(){
    setIsPrice(isPrice =>false)
    setIsFilter(isFilter =>{
      isFilter = !isFilter
      props.toggleFilter(isFilter)
      return isFilter
    })
    setIsSelf(isSelf =>false)
    setIsTotal(isTotal =>false)
  }
  function toggleSelf(){
    setIsPrice(isPrice =>false)
    setIsFilter(isFilter =>false)
    setIsTotal(isTotal =>false)
    setIsSelf(isSelf => {
      isSelf = !isSelf
      props.my_self(isSelf)
      return isSelf
    })
  }
  return(
    <>
     <SortWrap className="sort-wrapper">
       <li onTouchEnd={toggleTotal} className={isTotal ? 'on' : ''}>综合排序</li>
       <li 
        onClick={togglePrice} 
        className={`${desc ? 'desc' : ''} ${isPrice ? 'on' : ''}`}
       >
        价格
          <span className="order-by"></span>
      </li>
      <li className={isFilter ? 'on' : ''} onTouchEnd={toggleFilter}>筛选</li>
      <li className={isSelf ? 'on' : ''} onTouchEnd={toggleSelf} >自营</li>
    </SortWrap>
    </>
  )
}
export default connect(null,mapDispatchToProps)(Sort)