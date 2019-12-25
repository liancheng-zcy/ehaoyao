import React, { useState, useEffect } from 'react'
import { SearchWrap,SearchListWrap} from './styledProducts'
import { get } from 'utils/http'
import { connect } from 'react-redux'
import store from '../../../../node_modules/store/dist/store.legacy'
import {withRouter} from 'react-router-dom'
import searchHistory from 'utils/searchHistory'
import {
  SEARCH_ONFOCUS,
  SEARCH_CLICK
} from 'pages/home/action_types'
const mapStateToProps = (state) => ({
  SearchContent: state.product.isContent,
  searchList:state.product.searchList
})
const mapDispatchToProps = (dispatch) => ({
  mySearch(isPro) {
    dispatch({
      type: SEARCH_ONFOCUS,
      isPro
    })
  },
  mySearchClick(keyVal) {
    dispatch({
      type: SEARCH_CLICK,
      keyVal
    })
  }
})
function SearchContent(props) {
  const [hotList, setHotList] = useState([])
  let searchList = props.searchList
  let historyList = store.get('historyKey')
  useEffect(() => {
    let result
    async function getHot() {
      result = await get({
        url: '/api/mobile/goodsKeys/listXSKeys.json',
        params: {
          coonType: '5',
          cityId: '027'
        }
      })
      setHotList(result.data.data)
    }
    getHot()
  }, [])
  // let onSearchKey = (val) =>{
  //   return () =>{
  //     console.log(val)
  //   }
  // }
  let handleSearch = (val) =>{
    return () =>{
      props.mySearch(true)
      props.mySearchClick(val)
      props.history.push(`/products/${decodeURIComponent(val)}`)
      searchHistory(val)
    }
  }
  function clearHistory(){
    store.set('historyKey', {data:[]})
    window.location.replace('/search')
  }
  return (
    <>
      {
        props.SearchContent ? (
          <SearchWrap className="search-wrapper">
            <dl className="hotSearch">
              <dt className="title">热门搜索</dt>
              {
                hotList.map((val) => {
                  return (
                    <dd
                      className="item"
                      key={val.keysId}
                      onTouchEnd={handleSearch(val.keysValue)}
                    >{val.keysValue}</dd>
                  )
                })
              }
            </dl>
            <dl className="searchHistory">
              <dt className="title">历史搜索 <span 
                onTouchEnd={clearHistory}
              >清除历史记录</span></dt>
              {
                historyList && historyList.data.map((value) =>{
                  return(
                    <dd 
                      key={value} className="item"
                      onTouchEnd={handleSearch(value)}
                    >{value}</dd>
                  )
                })
              }
            </dl>
          </SearchWrap>
        )
        :(
          <SearchListWrap className="search-result">
            {
            searchList.map((val,index) =>{
                return(
                  <li 
                    key={val+index}
                    className="item"
                    onTouchEnd={handleSearch(val)}
                  >{val}</li>
                )
              })
            }
        </SearchListWrap>
        )
     }
    </>
  )
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchContent))