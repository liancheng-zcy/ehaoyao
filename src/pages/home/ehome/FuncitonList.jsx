import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
import { FuncitonListWrap } from './styledEhome'
import { connect } from 'react-redux'
import { GETHOMELIST } from '../action_types'
// const imgData = [
//   {
//     icon: 'https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/14/1573723038508_83.png',
//     title: '咨询问诊'
//   },
//   {
//     icon: 'https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/14/1573723048594_86.png',
//     title: '领劵中心'
//   },
//   {
//     icon: 'https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/14/1573723118326_90.png',
//     title: '医疗器械'
//   },
//   {
//     icon: 'https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/14/1573723128014_0.png',
//     title: '海外精选'
//   },
//   {
//     icon: 'https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/14/1573723136479_57.png',
//     title: '中药滋补'
//   },
//   {
//     icon: 'https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/14/1573723068674_91.png',
//     title: '男性健康'
//   },
//   {
//     icon: 'https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/14/1573723080006_14.png',
//     title: '女性健康'
//   },
//   {
//     icon: 'https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/14/1573723088792_28.png',
//     title: '营养保健'
//   }

// ]
const mapStateToProps = (state) => ({
  ImgList: state.home.homeData
})

const mapDispatchToProps =  (dispatch) => ({
  getImgList(){
    dispatch({
      type:GETHOMELIST
    })
  }
})
class FuncitonList extends Component {
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