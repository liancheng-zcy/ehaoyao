import { combineReducers } from 'redux'
import {
  reducers as homeList,
  reducersCate as categoryList
} from 'pages/home/index.js'
export  default combineReducers({
  home:homeList,
  category:categoryList
})
