import React, { Component } from 'react'
import { get } from 'utils/http'
import { connect } from 'react-redux'
import { GETCATEGORYLIST } from '../action_types'



const mapDispatchToProps =  (dispatch) => ({
  getSelectList(selId,list){
    dispatch({
      type:GETCATEGORYLIST,
      selId:selId,
      cateList:list,
      url:'http://m.ehaoyao.com/api/mds/api/app/apiv2_4/thirdLevelCategorynew.json'
    })
  }
})

@connect(null,mapDispatchToProps)
class Primary extends Component {
  constructor(){
    super()
    this.state = {
      selectBar:[],
      selId:367
    }
  }
  async componentDidMount(){
    let result = await get({
      url:'http://m.ehaoyao.com/api/mds/api/app/apiv2_4/thirdLevelCategorynew.json',
      params:{
        coonType:'5',
        cityId:'027'
      }
     
    })
    this.setState({
      selectBar:result.data.data
    })
    this.props.getSelectList(this.state.selId,this.state.selectBar)
    
  }
  onSelect = (cid) =>{
    return () =>{
      this.setState({
        selId:cid
      },() =>{
        this.props.getSelectList(this.state.selId,this.state.selectBar)
      })
    }
  }
  render() {
    return (
      <div className="primary">
      <ul>
       {
         this.state.selectBar.map((val) =>{
           return(
            <li 
            id={val.cid} 
            key={val.cid}
            className={`primary-item ${this.state.selId === val.cid? 'on' : ''}`}
            onTouchEnd={this.onSelect(val.cid)}
           >{val.name}</li>
           )
         })
       }
      </ul>
    </div>
    )
  }
}

export default Primary
