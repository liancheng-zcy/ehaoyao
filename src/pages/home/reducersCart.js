import * as types from './action_types'
import store from '../../../node_modules/store/dist/store.legacy'
let startList = store.get('cartList')
const defaultState = {
  CartData: startList ? startList.data : [],
  AllPrice: 0,
  subSelect: 0,
  AllGoods: 0,
  selectStatus: false,
}
export default (state = defaultState, action) => {
  let Price = 0
  let select = 0
  switch (action.type) {
    case types.LOADCART:
      let pid = action.data.goods_id
      let item = state.CartData.find((value) => {
        return value.goods_id === pid
      })
      if (item) {
        item.allNum += action.data.allNum
        store.set('cartList', {
          data: state.CartData
        })
        return {
          ...state,
          CartData: [...state.CartData]
        }
      } else {
        state.CartData.push(
          action.data
        )
        store.set('cartList', {
          data: state.CartData
        })
        return {
          ...state,
          CartData: [...state.CartData]
        }
      }
      case types.ADD_SHOP:
        state.CartData.forEach(item => {
          if (item.goods_id === action.goods_id) {
            item.allNum++;
            if (item.allNum >= item.store) {
              item.allNum = item.store
            }
          }
        });
        summary(state.CartData)
        return {
          ...state,
          AllPrice: Price,
            subSelect: select,
            CartData: [...state.CartData]
        }
        case types.SUB_SHOP:
          state.CartData.forEach(item => {
            if (item.goods_id === action.goods_id) {
              item.allNum--;
              if (item.allNum <= 1) {
                item.allNum = 1
              }
            }
          });
          summary(state.CartData)
          return {
            ...state,
            AllPrice: Price,
            subSelect: select,
            CartData: [...state.CartData]
          }
          case types.NUM_SHOP:
            state.CartData.forEach(item => {
              if (item.goods_id === action.goods_id) {
                item.allNum = action.num;
                if (action.num >= item.store) {
                  item.allNum = item.store
                }
                if (action.num <= 0) {
                  item.allNum = ''
                }
              }
            });
            summary(state.CartData)
            return {
              ...state,
              AllPrice: Price,
              subSelect: select,
              CartData: [...state.CartData]
            }
            case types.REMOVE_SHOP:
              state.CartData.forEach((item, index) => {
                if (item.goods_id === action.goods_id) {
                  state.CartData.splice(index, 1)
                }
              });
              summary(state.CartData)
              return {
                ...state,
                AllPrice: Price,
                subSelect: select,
                CartData: [...state.CartData]
              }
              case types.TOGGLE_SHOP:
                state.CartData.forEach(item => {
                  if (item.goods_id === action.goods_id) {
                    item.isChecked = !item.isChecked;
                  }
                });
                let res = state.CartData.every((item) => {
                  return item.isChecked === true
                })
                if (res) {
                  state.selectStatus = true
                } else {
                  state.selectStatus = false
                }
                summary(state.CartData)
                return {
                  ...state,
                  AllPrice: Price,
                  subSelect: select,
                  CartData: [...state.CartData]
                }
                case types.SELECT_ALL_SHOP:
                  state.selectStatus = !state.selectStatus
                  state.CartData.forEach(item => {
                    if (state.selectStatus === true) {
                      item.isChecked = true
                    } else {
                      item.isChecked = false
                    }
                  });
                  summary(state.CartData)
                  return {
                    ...state,
                    AllPrice: Price,
                    subSelect: select,
                  }
              case types.FETCH_FAILED:
                return {
                  CartData: action.message
                }
              case types.CANCEL_ALL_SHOP: 
                if(!action.opt){
                  state.selectStatus = false
                }
                if(state.selectStatus === false){
                  state.CartData.forEach(item => {
                    item.isChecked = false
                  })   
                } 
                return {
                  ...state,
                  AllPrice:0,
                  subSelect:0,
                  CartData: [...state.CartData]
                }
              case types.REMOVE_SELECT_SHOP: 
                if(action.isCart === 'cart'){
                  state.CartData.forEach((item,index) => {
                    if(item.isChecked === true){
                      state.CartData.splice(index,1)
                    }
                  });
                  summary(state.CartData)
                  return {
                    ...state,
                    AllPrice: Price,
                    subSelect: select,
                    CartData: [...state.CartData]
                  }
                }
              break;
            default:
              return state
    }
    
  function summary(cartData) { //总的计算
    cartData.forEach(currentItem => {
      if (currentItem.isChecked === true) {
        Price += currentItem.price * currentItem.allNum
        select += currentItem.allNum
      }
    });
  }
}

