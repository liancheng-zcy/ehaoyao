import * as types from './action_types'
import store from '../../../node_modules/store/dist/store.legacy'
let startList = store.get('cartList')
const defaultState = {
  CartData: startList ? startList.data : []
}
export default (state = defaultState, action) => {
    switch (action.type) {
      case types.LOADCART: 
        let pid = action.data.goods_id
        let item = state.CartData.find((value) =>{
          return value.goods_id === pid
        })
        if(item){
          item.allNum += action.data.allNum
          store.set('cartList',{data:state.CartData})
          return {
            CartData:[...state.CartData]
          }
        }else{
          state.CartData.push(
            action.data
          )
          store.set('cartList',{data:state.CartData})
          return {
            CartData:[...state.CartData]
          }
        }
      case types.FETCH_FAILED:
        return {
          CartData: action.message
        }
      default:
          return state
    }
}                 