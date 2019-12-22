import React,{ useState,useEffect,useRef }from 'react'
import Header from 'components/common/Header'
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
  isTotal:state.product.isTotal
})

function Products(props){
  const [proList, setproList] = useState([])
  const [proFilter, setProFilter] = useState([])
  let ScrollRef = useRef()
    useEffect( () =>{
    // let cid = props.match.params.id 
     let result = null
     async function  fetchData(){
      result = await get({
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
      // console.log(result.data.data.brandList)
      setProFilter(result.data.data.brandList)
    }
    fetchData()
    
    ScrollRef.current =  new BScroll('.product_content_wrap', {
      probeType: 2,
      pullUpLoad: true,
      click: true
    });
    let page = 1;
    ScrollRef.current.on("pullingUp",async () =>{
      Toast.loading('Loading...', 1);
      let totalPage = result.data.pagination.totalPage
      if(page <= totalPage) {
        let moreResult = await get({
          url:'/api/mds/api/app/apiv3_0/GoodsListByKeywordPc.json',
          params:{
            isSelf:'',
            isStore: 0,
            type: 1,
            descs:'',
            cid: 941,
            searchGoodsBrief: '',
            page:page,
            rows: 10,
            brandId:'',
            plngLat: '114.19683,30.54626',
            memberId:'',
            wordType: 'cats_id',
            coonType: '5',
            cityId: '027',
          } 
        })
        page ++;
        setproList(proList => [...proList,...moreResult.data.data.goodsList]);
        Toast.success('Load success', 1);
      }else{
        Toast.info('我也是有底线的', 1);
      }
      ScrollRef.current.finishPullUp();
    })
  },[])

  useEffect(() =>{
    ScrollRef.current.refresh()
  },[proList])
  return(
      <>
      <ProductWrap>
          <Header></Header>
          <Sort></Sort>
          <ProBetterWrap className="product_content_wrap" >
              <div className="product_content">
                <ProductList  proList = {proList}></ProductList>
              </div>
          </ProBetterWrap>
          {
            props.filter_show && <Filter proFilter={proFilter}></Filter>
          }
      </ProductWrap>
      </>
  )
}
export default withRouter(connect(mapStateToProps)(Products) ) 
