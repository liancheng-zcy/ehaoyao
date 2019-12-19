import React from 'react'
import Header from 'components/common/Header'
import Sort from 'components/common/Sort'
import ProductList from './ProductList'
import {ProductWrap,ProBetterWrap} from './styledProducts'
function Products(){
  
  return(
      <>
      <ProductWrap>
        <Header></Header>
        <Sort></Sort>
        <ProBetterWrap className="product_content_wrap" >
          <div className="product_content" style={{
            width:'100%',
          }}>
            <ProductList></ProductList>
          </div>
      </ProBetterWrap>
      </ProductWrap>
      </>
  )
}
export default  Products
