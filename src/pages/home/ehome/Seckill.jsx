import React, { Component } from 'react'
import SeckillTitle from './SeckillTitle'
import { SeckillWrap } from './styledEhome'
import SeckillList from 'components/eHome/SeckillList'
export default class Seckill extends Component {
  render() {
    return (
      <SeckillWrap>
        <SeckillTitle></SeckillTitle>
        <SeckillList></SeckillList>
      </SeckillWrap>
      
    )
  }
}
