import React, { Component } from 'react'
import { SubjectWrap } from './styledCategory'
import { connect } from 'react-redux'
import imgBg from 'assets/images/img-bg.png'

const mapStateToProps = (state) => ({
  selectList: state.category.categoryData
})

@connect(mapStateToProps)
class Subject extends Component {
  constructor(){
    super()
    this.state = {
      isShow:false,
    }
  }
  componentDidMount(){
    this.refs.mySubject.addEventListener('scroll',this.handleScroll,false)
  }
  handleScroll = () =>{
    this.setState({
      subTop:this.refs.mySubject.scrollTop
    },() =>{
      if(this.state.subTop > 100){
        this.setState({
          isShow:true
        })
      }else{
        this.setState({
          isShow:false
        })
      }
    })
  }
  handleScrollTop = () =>{
    this.refs.mySubject.scrollTop = 0
  }
  render() {
    let labelList = this.props.selectList.list ? this.props.selectList.list : []
    return (
      <>
        <SubjectWrap>
         <div className="subject" ref="mySubject">
         {
            labelList.length && (
              <div className="label-list clearfix">
                {
                  labelList.map((val, index) => {
                    return (
                      <a
                        href={`#${val.cid}`}
                        className="item"
                        key={val.cid}
                      >{val.name}</a>
                    )
                  })
                }
              </div>
            )
          }
          {
            labelList.length && (
              <>
                  {
                  labelList.map((val,index) => {
                    return (
                      <dl 
                        id={val.cid} 
                        className="subject-item"
                        key={val.cid + val.name}
                      >
                      <dt className="item-title">{val.name}</dt>
                      {
                         val.list.map((value,index) =>{
                          return(
                            
                            <dd 
                              className="item-list"
                              key={value.cid + value.name}
                            >
                            <img 
                              // data-src={imgBg}
                              src={`${ value.imageUrl ? 'http://image.qumaiyao.com/' + value.imageUrl : imgBg}`} 
                              alt=""
                              className="img"
                            />
                            <span>{value.name}</span>
                            </dd>
                          )
                         })
                       }
                      </dl>
                    )
                  })
                }
              </>
            )
          }
          {
            this.state.isShow && <div 
            ref="myTop" 
            className="btn-return-top"
            onClick={this.handleScrollTop}
           ></div>
          }
         </div>
        </SubjectWrap>
      </>
    )
  }
}

export default Subject
