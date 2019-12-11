import React, { Component } from 'react'
import Primary from './Primary'
import { CategoryWarper } from './styledCategory'
import Subject from './Subject'
export default class CategoryWrap extends Component {

  
  render() {
    return (
      <CategoryWarper>
        <div className="category-content">
         <Primary></Primary>
         <Subject></Subject>
        </div>
      </CategoryWarper>
    )
  }
}
