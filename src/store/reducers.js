import { combineReducers } from 'redux'
import {
  reducers as homeList,
  reducersCate as categoryList,
  reducersCart as cartList,
  reducersPro as product
} from 'pages/home/index.js'
export  default combineReducers({
  home:homeList,
  category:categoryList,
  cart:cartList,
  product
})
