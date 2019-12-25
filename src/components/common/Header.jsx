import React, { useState, useRef } from 'react'
import { HeaderWrap } from './common'
import { connect } from 'react-redux'
import searchHistory from 'utils/searchHistory'
import {
  TOGGLE_ROW,
  SEARCH_ONFOCUS,
  SEARCH_CONTENT,
  SEARCH_LIST,
  SEARCH_CLICK
} from 'pages/home/action_types'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import { get } from 'utils/http'
const mapDispatchToProps = (dispatch) => ({
  myToggleRow() {
    dispatch({
      type: TOGGLE_ROW
    })
  },
  mySearch(isPro) {
    dispatch({
      type: SEARCH_ONFOCUS,
      isPro
    })
  },
  mySearchContent(SearchContent, searchList) {
    dispatch({
      type: SEARCH_CONTENT,
      SearchContent,
      searchList
    })
  },
  mySearchList(searchList) {
    dispatch({
      type: SEARCH_LIST,
      searchList
    })
  },
  mySearchClick(keyVal) {
    dispatch({
      type: SEARCH_CLICK,
      keyVal
    })
  }
})
const mapStateToProps = (state) => ({
  isRow: state.product.isRow
})


function Header(props) {
  let inputRef = useRef()
  const [keyVal, setKeyVal] = useState('')
  function toggleRow() {
    props.myToggleRow()
  }
  function inputOnFocus() {
    props.history.push('/search')
    props.mySearch(false)
  }
  function inputOnBlur() {
    console.log(2)
  }
  async function inputOnchange() {
    let value = inputRef.current.value
    setKeyVal(inputRef.current.value)
    let result = await get({
      url: '/api/bigdata/search.json',
      params: {
        name: value,
        coonType: '5',
        cityId: '027',
      }
    })
    if (value === '') {
      props.mySearchContent(true)
    } else {
      props.mySearchContent(false)
      if (result.data.status === '0') {
        props.mySearchList(result.data.data)
      } else {
        props.mySearchList(["关键词没有命中结果"])
      }
    }
  }
  function handleSearch() {
    let val = keyVal
    if (inputRef.current.value === '') {
      val = inputRef.current.placeholder
    }
    props.mySearch(true)
    props.mySearchClick(val)
    props.history.push(`/products/${decodeURIComponent(val)}`)
    searchHistory(val)
  }
  function onGoBack(){
    props.history.goBack()
  }
  return (
    <HeaderWrap className="header productList">
      <div className="goback"
        onTouchEnd={onGoBack}
      ></div><div className="main">
        <div className="search-wrapper">
          <input
            ref={inputRef}
            type="text"
            placeholder="泰尔丝 补肺丸 鸿茅药酒"
            className="searchText"
            onFocus={inputOnFocus}
            onBlur={inputOnBlur}
            onChange={_.debounce(inputOnchange, 500)}
          />
        </div>
      </div><div className="right">
        {
          props.match.path === '/products/:id' ? (
            <span
              className={`icon-layout ${props.isRow ? '' : 'row'}`}
              onTouchEnd={toggleRow}
            ></span>
          ) :
            (
              <span
                onTouchEnd={handleSearch}
              >搜索</span>
            )
        }
      </div>
    </HeaderWrap>
  )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
