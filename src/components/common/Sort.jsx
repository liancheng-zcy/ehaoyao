import React ,{useState,useEffect} from 'react'
import {SortWrap} from './common'
import {connect} from 'react-redux'
import { 
  PRO_FILTER_TOGGLE,
  PRO_TOTAL,
  PRO_DESC
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
  }
}))

function Sort(props){
  let [isTotal,setIsTotal] = useState(true)
  let [isPrice,setIsPrice] = useState(false)
  let [isFilter,setIsFilter] = useState(false)
  let [isSelf,setIsSelf] = useState(false)
  let [desc,setDesc] = useState(false)
  let toggleOn = (param) =>{
    return () =>{
      switch (param) {
        case 'total':
          setIsPrice(isPrice =>false)
          setIsFilter(isFilter =>false)
          setIsSelf(isSelf =>false)
          setIsTotal(isTotal =>true)
          break;
        case 'price':
          setIsPrice(isPrice =>true)
          setIsFilter(isFilter =>false)
          setIsSelf(isSelf =>false)
          setIsTotal(isTotal =>false)
          setDesc(desc => desc = !desc)
          break;
        case 'filter':
          setIsPrice(isPrice =>false)
          setIsFilter(isFilter => true)
          setIsSelf(isSelf =>false)
          setIsTotal(isTotal =>false)
          
          break;
        case 'self':
          setIsPrice(isPrice =>false)
          setIsFilter(isFilter =>false)
          setIsTotal(isTotal =>false)
          setIsSelf(isSelf => true)
          break;
        default:
          break;
      }
    }     
  }
  useEffect(() =>{
    props.toggleFilter(isFilter)
    props.my_Total(isTotal)
    props.my_desc(desc)
  })

  return(
    <>
     <SortWrap className="sort-wrapper">
       <li onTouchEnd={toggleOn('total')} className={isTotal ? 'on' : ''}>综合排序</li>
       <li 
        onTouchEnd={toggleOn('price')} 
        className={`${desc ? 'desc' : ''} ${isPrice ? 'on' : ''}`}
       >
        价格
          <span className="order-by"></span>
      </li>
      <li className={isFilter ? 'on' : ''} onTouchEnd={toggleOn('filter')}>筛选</li>
      <li className={isSelf ? 'on' : ''} onTouchEnd={toggleOn('self')} >自营</li>
    </SortWrap>
    </>
  )
}
export default connect(null,mapDispatchToProps)(Sort)