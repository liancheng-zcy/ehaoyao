import React from 'react'
import {HeaderWrap} from './common'
import {connect} from 'react-redux'
import { TOGGLE_ROW,SEARCH_ONFOCUS,SEARCH_CONTENT,SEARCH_LIST} from 'pages/home/action_types'
import {withRouter} from 'react-router-dom'
import _ from 'lodash'
import { get } from 'utils/http'
const mapDispatchToProps =  (dispatch) => ({
  myToggleRow(){
    dispatch({
      type:TOGGLE_ROW
    })
  },
  mySearch(){
    dispatch({
      type:SEARCH_ONFOCUS
    })
  },
  mySearchContent(SearchContent,searchList){
    dispatch({
      type:SEARCH_CONTENT,
      SearchContent,
      searchList
    })
  },
  mySearchList(searchList){
    dispatch({
      type:SEARCH_LIST,
      searchList
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
  function inputOnFocus(){
    props.history.push('/search')
    props.mySearch()
  }
  function inputOnBlur(){
    console.log(2)
  }
 async function inputOnchange(e){
    let value = e.target.value
    let result = await get({
      url:'/api/bigdata/search.json',
      params:{
        name:value,
        coonType:'5',
        cityId:'027',
      }
    })
    if(value === ''){
      props.mySearchContent(true)
    }else{
      props.mySearchContent(false)
      if(result.data.status === '0'){
        props.mySearchList(result.data.data)
      }else{
        props.mySearchList(["关键词没有命中结果"])
      }
    }
  }
  _.debounce(inputOnchange,500)
  return (
      <HeaderWrap className="header productList">
        <div className="goback"></div><div className="main">
          <div className="search-wrapper">
            <input 
              type="text" 
              placeholder="泰尔丝 补肺丸 鸿茅药酒" 
              className="searchText"    
              onFocus={inputOnFocus }
              onBlur={inputOnBlur}
              onChange={(e) =>inputOnchange(e)}
            />
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
    
export default withRouter(connect(mapStateToProps ,mapDispatchToProps)(Header))
