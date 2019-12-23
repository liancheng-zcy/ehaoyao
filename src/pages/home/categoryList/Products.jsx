import React,{ useState,useEffect,useRef }from 'react'
import Header from 'components/common/Header'
import SearchContent from './SearchContent'
import Sort from 'components/common/Sort'
import ProductList from './ProductList'
import {ProductWrap,ProBetterWrap} from './styledProducts'
import Filter from './Filter'
import {connect} from 'react-redux'
import {get} from 'utils/http'
import BScroll from 'better-scroll'
import { Toast } from 'antd-mobile';
import {
  withRouter
} from 'react-router-dom'

const mapStateToProps =  (state) => ({
  filter_show:state.product.filter_show,
  getInfo:state.product.getInfo,
  isPro:state.product.isPro
})

function Products(props){
  // console.log(props.getInfo)
  const [proList, setproList] = useState([])
  const [proFilter, setProFilter] = useState([])
  // const [getInfo] = useState(props.getInfo)
  let ScrollRef = useRef()
    useEffect( () =>{
    // let cid = props.match.params.id 
     let result = null
     let page = 1;
     async function  fetchData(){
      result = await get({
        url:'/api/mds/api/app/apiv3_0/GoodsListByKeywordPc.json',
        params:props.getInfo
      })
      setproList(result.data.data.goodsList)
      setProFilter(result.data.data.brandList)
    }
    fetchData()
    ScrollRef.current =  new BScroll('.product_content_wrap', {
      probeType: 2,
      pullUpLoad: true,
      click: true
    });
    ScrollRef.current.on("pullingUp",async () =>{
      Toast.loading('Loading...', 1);
      let totalPage = result.data.pagination.totalPage
      if(page <= totalPage) {
        let moreResult = await get({
          url:'/api/mds/api/app/apiv3_0/GoodsListByKeywordPc.json',
          params:props.getInfo
        })
        props.getInfo.page = page ++;
        console.log(props.getInfo.page)
        setproList(proList => [...proList,...moreResult.data.data.goodsList]);
        Toast.success('Load success', 1);
      }else{
        Toast.info('我也是有底线的', 1);
      }
      ScrollRef.current.finishPullUp();
    })
  },[props.getInfo])
  useEffect(() =>{
    ScrollRef.current.refresh()
  },[proList])
  return(
      <>
      <ProductWrap>
          <Header></Header>
          {
            props.isPro ? (
              <>
                <Sort></Sort>
                <ProBetterWrap className="product_content_wrap" >
                    <div className="product_content">
                      <ProductList  proList = {proList}></ProductList>
                    </div>
                </ProBetterWrap>
              </>
            )
            :(
              <SearchContent></SearchContent>
            )
          }
          {
            props.filter_show && <Filter proFilter={proFilter}></Filter>
          }
      </ProductWrap>
      </>
  )
}
export default withRouter(connect(mapStateToProps)(Products) ) 
