import React from 'react'
import {SearchFailWrap} from './styledProducts'
const SearchFail = () => {

  return (
    <SearchFailWrap className="no-result">
      <p className="no-result-tips">抱歉，没有找到“ffffff”相关的商品，要不您换个关键字我帮您再找找看</p>
      <dl className="tips-list">
        <dt>建议您:</dt>
        <dd>1、查查输入的文字是否有误；</dd>
        <dd>2、调整关键字，如“同仁堂五子衍宗丸”改成“五子衍宗丸”或“五子衍宗”；</dd>
      </dl><a href="/" className="btn-contact-us">咨询药师</a>
    </SearchFailWrap>
  )
}

export default SearchFail