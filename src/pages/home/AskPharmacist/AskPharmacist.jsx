import React, { Component } from 'react'
import ComHeader from 'components/common/ComHeader'
import PharmacistContent from './PharmacistContent'
export default class AskPharmacist extends Component {
  render() {
    return (
      <div>
        <ComHeader flag="ask"></ComHeader>
        <PharmacistContent></PharmacistContent>
      </div>
    )
  }
}
