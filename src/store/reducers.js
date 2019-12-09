import { combineReducers } from 'redux'
import {reducers as homeList} from 'pages/home/index.js'
export default combineReducers({
  home:homeList
})