import React, { Component } from 'react'
import { RecommendWrap } from './styledCart'
import RecommendList from './RecommendList'
export default class Recommend extends Component {
  render() {
    return (
      <>
        <RecommendWrap className="recommendWrapper">
          <div className="title">您可能还需要</div>
          <RecommendList></RecommendList>
        </RecommendWrap>
      </>
    )
  }
}