import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
import { FuncitonListWrap } from './styledEhome'
import { connect } from 'react-redux'
import { GETHOMELIST } from '../action_types'
const mapStateToProps = (state) => ({
  ImgList: state.home.homeData
})

const mapDispatchToProps =  (dispatch) => ({
  getImgList(){
    dispatch({
      type:GETHOMELIST,
      url:'/ajax/goods'
    })
  }
})
class FuncitonList extends Component {
  constructor(props){
    super(props)
    this.state = {
      a:this.props.ImgList[0] ? this.props.ImgList[0].funcs:[]
    }
  }
  componentDidMount(){
    this.props.getImgList() 
  }
  render() {
    let imgData = this.props.ImgList[0] ? this.props.ImgList[0].funcs:[]
    return (
      <FuncitonListWrap>
        <Grid data={imgData}
          columnNum={4}
          hasLine={false}
          renderItem={dataItem => (
            <div>
              <img src={dataItem.imageUrl} style={{
                display: 'block',
                margin: '.106667rem auto .16rem',
                width: '1.2rem',
                height: '1.2rem',
              }} alt="" />
              <div style={{
                lineHeight: '.4rem',
                fontSize: '.333333rem',
                color: '#4e4e4e',
              }}>
                <span>{dataItem.name}</span>
              </div>
            </div>
          )}
        />
      </FuncitonListWrap>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FuncitonList)