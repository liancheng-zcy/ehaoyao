import React from 'react'
import {HeaderWrap} from './common'
import {connect} from 'react-redux'
import { TOGGLE_ROW } from 'pages/home/action_types'
const mapDispatchToProps =  (dispatch) => ({
  myToggleRow(){
    dispatch({
      type:TOGGLE_ROW
    })
  }
})
const mapStateToProps = (state) =>({
  isRow:state.product.isRow
})


function Header(props) {

  function toggleRow(){
    props.myToggleRow()
  }
  return (
      <HeaderWrap className="header productList">
        <div className="goback"></div><div className="main">
          <div className="search-wrapper">
            <input type="text" placeholder="泰尔丝 补肺丸 鸿茅药酒" className="searchText"/>
          </div>
          </div><div className="right">
            <span 
            className={`icon-layout ${props.isRow ? '' : 'row'}`}
            onTouchEnd={toggleRow}
            ></span>
          </div>
      </HeaderWrap>
      )
    }
    
export default connect(mapStateToProps ,mapDispatchToProps)(Header)
