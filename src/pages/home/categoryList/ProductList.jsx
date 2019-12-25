import React from 'react'
import {ListWrap} from './styledProducts'
import {connect} from 'react-redux'
import SearchFail from './Search404'

const mapStateToProps = (state) =>({
  isRow:state.product.isRow,
})

function ProductList(props) {
  return (
    <>
      <ListWrap className="ul-list">
        {
        props.proList.length > 0 ?( props.proList.map((val,index) =>{
            return(
              <li 
                className={`${ props.isRow ? 'product-item-list' : 'product-item-row'}`}
                key={val.groupId + index + val.goodsName}
                
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
          ):
          (
            <SearchFail></SearchFail>
          )
        }
      </ListWrap>
    </>
  )
}
export default connect(mapStateToProps)(ProductList)