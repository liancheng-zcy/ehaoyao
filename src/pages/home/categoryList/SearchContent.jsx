import React, { useState, useEffect } from 'react'
import { SearchWrap,SearchListWrap} from './styledProducts'
import { get } from 'utils/http'
import { connect } from 'react-redux'
const mapStateToProps = (state) => ({
  SearchContent: state.product.isContent,
  searchList:state.product.searchList
})

function SearchContent(props) {
  const [hotList, setHotList] = useState([])
  let searchList = props.searchList
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
  let onSearchKey = (val) =>{
    return () =>{
      console.log(val)
    }
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
                    >{val.keysValue}</dd>
                  )
                })
              }
            </dl>
            <dl className="searchHistory">
              <dt className="title">历史搜索 <span>清除历史记录</span></dt>
              <dd className="item">利福布汀胶囊</dd>
              <dd className="item">板蓝根</dd>
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
                    onTouchEnd={onSearchKey(val)}
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

export default connect(mapStateToProps)(SearchContent)