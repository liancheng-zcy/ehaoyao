import * as types from './action_types'
const initialState = {
  isRow: true,
  filter_show:false,
  isTotal:true
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_ROW:
      state.isRow = !state.isRow
      return { 
        ...state,
      };
    case types.PRO_FILTER_TOGGLE: 
      state.filter_show = action.isShow
      return{
        ...state
      }
    case types.PRO_TOTAL: 
      state.isTotal = action.isTotal
      return{
        ...state
      }
    default:
      return state
  }
}

