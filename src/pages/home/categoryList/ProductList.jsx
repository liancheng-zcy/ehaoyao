import React, { useState,useEffect,useRef } from 'react'
import {ListWrap} from './styledProducts'
import {connect} from 'react-redux'
import {get} from 'utils/http'
import BScroll from 'better-scroll'
import {
  withRouter
} from 'react-router-dom'
const mapStateToProps = (state) =>({
  isRow:state.product.isRow
})

function ProductList(props) {
  const [proList, setproList] = useState([])
  let ScrollRef = useRef()
    useEffect( () =>{
    // let cid = props.match.params.id
     async function  fetchData(){
      let result = await get({
        url:'/api/mds/api/app/apiv3_0/GoodsListByKeywordPc.json',
        params:{
          isSelf:'',
          isStore: 0,
          type: 1,
          descs:'',
          cid: 941,
          searchGoodsBrief: '',
          page: 1,
          rows: 10,
          brandId:'',
          plngLat: '114.19683,30.54626',
          memberId:'',
          wordType: 'cats_id',
          coonType: '5',
          cityId: '027',
        }
      })
      setproList(result.data.data.goodsList)
    }
    fetchData()
  },[])

  useEffect(() =>{
    ScrollRef.current =  new BScroll('.product_content_wrap', {
      probeType: 2,
      pullUpLoad: true,
      preventDefault: false,
      click: true
    });
    ScrollRef.current.on("pullingUp",() =>{
      console.log(1)
    })
  },[])
  
  return (
    <>
      <ListWrap className="ul-list">
        {
          proList.map((val) =>{
            return(
              <li 
                className={`${ props.isRow ? 'product-item-list' : 'product-item-row'}`}
                key={val.groupId}
              >
            <div className="img">
              <div className="icon-label-box"><i className="icon-label-rx"></i></div>
              <img
                src={`http://image.qumaiyao.com/${val.smallPic}`}
                alt={val.goodsName} />
            </div>
            <div className="content">
              <p className="product-name">
                {
                  val.isSelf === 1 && <span className="label">自营</span>
                }
                {val.goodsName}
            </p>
              <p className="p-desc"></p>
            <p className="specification">规格: {val.spec}</p>
              <ul className="promotions"></ul>
              <div className="otherInfo">
              <div className="price"><span className="sell-price">￥{val.price}</span><span className="old-price">￥{val.oldPrice}</span></div><span
                  className="btn-cart"></span>
              </div>
            </div>
          </li>
            )
          })
        }
      </ListWrap>
    </>
  )
}
export default withRouter(connect(mapStateToProps)(ProductList)) 