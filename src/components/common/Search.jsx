import React, { Component } from 'react'
import { SearchWrap } from './common'
export default class Search extends Component {
  render() {
    return (
      <>
        <SearchWrap className="header searchCategory">
          <div className="goback"></div>
          <div className="main">
            <div className="search-wrapper"><div className="search-alink">
              <span
                className="searchTip">请输入药品名称或症状</span>
            </div>
            </div>
          </div>
          <div className="right"><span></span></div>
        </SearchWrap>
      </>
    )
  }
}
