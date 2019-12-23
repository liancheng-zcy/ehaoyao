import React,{useState} from 'react'
import {FilterWrap} from './styledProducts'
import {connect} from 'react-redux'
import {PRO_FILTER,PRO_FILTER_TOGGLE} from '../action_types'
// import {get} from 'utils/http'
const mapDispatchToProps = ((dispatch) =>({
  Filter(isStore,brandId){
    dispatch({
      type:PRO_FILTER,
      isStore,
      brandId
    })
  },
  toggleFilter(){
    dispatch({
      type:PRO_FILTER_TOGGLE,
      isShow:false
    })
  }
}))
function Filter(props) {
  const [brandId, setBrandId] = useState('')
  const [isStore, setIsStore] = useState(false)
 function handleBrand(id){
   return () =>{
    setBrandId(id)
   }
 }
 function handleStore() {
  setIsStore(isStore => isStore = !isStore)
 }
 function brandIdCommit() {
   if(isStore){
    props.Filter('1',brandId)
   }else{
    props.Filter('0',brandId)
   }
   props.toggleFilter()
 }
 function handleReset(){
  setBrandId('')
  setIsStore(false)
 }
  return (
    <FilterWrap className="filter-wrapper-shade">
      <div className="filter-wrapper">
        <div className="filter-content">
          <div className="item-title">商品状态</div>
          <ul className="pStatus-list clearfix">
            <li 
              className={`item ${isStore ? 'on' : ''}`}
              onTouchEnd={handleStore}
            >仅看有货</li>
          </ul>
          <div className="item-title">商品品牌</div>
          <ul className="brand-list clearfix">
            {
              props.proFilter.map((val) =>{
                return(
                  <li 
                    className={`item ${brandId === val.brandId ? 'on' : ''}`}
                    key={val.brandId}
                    onTouchEnd={handleBrand(val.brandId)}
                >{val.brandName}</li>
                )
              })
            }
           
          </ul>
        </div>
        <div className="filter-btn">
          <span 
            className="btn reset"
            onTouchEnd={handleReset}
            >重置</span>
          <span 
            className="btn comfirm" 
            onTouchEnd={brandIdCommit}
          >确定</span>
        </div>
      </div>
    </FilterWrap>
  )
}

export default connect(null,mapDispatchToProps)(Filter)