import React, { Component } from 'react'
import { SearchWrap } from './common'
import {withRouter} from 'react-router-dom'
 @withRouter 
 class Search extends Component {
  onGoBack = () => {
    this.props.history.goBack()
  }
  ToSearch = () =>{
    this.props.history.push('/search')
  }
  render() {
    return (
      <>
        <SearchWrap className="header searchCategory">
          <div className="goback" 
            onTouchEnd={this.onGoBack}
          ></div>
          <div 
            className="main"
            onTouchEnd={this.ToSearch}
            >
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
export default Search