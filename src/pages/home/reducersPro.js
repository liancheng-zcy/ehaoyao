import * as types from './action_types'
const initialState = {
  isRow: true,
  filter_show:false,
  getInfo:{
    isStore: 0,
    type: 1,
    cid: 845,
    page: 1,
    rows: 10,
    descs: 'asc',
    plngLat: '114.19683,30.54626',
    wordType: 'cats_id',
    coonType: '5',
    cityId: '027',
  },
  isPro:true,
  isContent:true,
  searchList:[]
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
        ...state,
      }
    case types.PRO_TOTAL: 
      if(action.isTotal){
        state.getInfo.type = '1'
        state.getInfo.descs = 'asc'
        state.getInfo.isSelf = ''
        state.getInfo.isStore = '0'
        state.getInfo.brandId = ''
      }
      return{
        ...state,
        getInfo:{...state.getInfo}
      }
    case types.PRO_DESC: 
        state.getInfo.type = '2'
        state.getInfo.isSelf = ''
        if(action.isDesc){
          state.getInfo.descs = 'desc'
        }else{
          state.getInfo.descs = 'asc'
        }
      return{
        ...state,
        getInfo:{...state.getInfo}
      }
    case types.PRO_FILTER: 
      state.getInfo.isStore = action.isStore
      state.getInfo.brandId = action.brandId
      state.getInfo.isSelf = ''
      return{
        ...state,
        getInfo:{...state.getInfo}
      }
    case types.PRO_SELF: 
      if(action.isSelf){
        state.getInfo.isSelf = '1'
      }else{
        state.getInfo.isSelf = ''
      }
      return{
        ...state,
        getInfo:{...state.getInfo}
      }
    // search
    case types.SEARCH_ONFOCUS: 
      state.isPro = false
      return{
        ...state
      }
    case types.SEARCH_CONTENT: 
      state.isContent = action.SearchContent
      return{
        ...state
      }
    case types.SEARCH_LIST: 
      state.searchList = action.searchList
      return{
        ...state,
        searchList:[...state.searchList]
      }
    default:
      return state
  }
}

