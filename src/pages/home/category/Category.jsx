import React, { Component } from 'react'
import Search from 'components/common/Search'
import CategoryWrap from './CategoryWrap'
export default class Category extends Component {
  render() {
    return (
      <>
       <Search></Search>
       <CategoryWrap></CategoryWrap>
      </>
    )
  }
}
