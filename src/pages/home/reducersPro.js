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
    plngLat: '114.19683,30.54626',
    wordType: 'cats_id',
    coonType: '5',
    cityId: '027',
  }
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
      return{
        ...state
      }
    case types.PRO_DESC: 
      // for(let key in state.getInfo){
      //   if(key === 'descs'){
      //     console.log(key)
      //   }
      // }
      // console.log(action.isDesc)

      if(!("descs" in  state.getInfo)){
        if(action.isDesc){
          state.getInfo.descs = 'desc'
        }else{
          state.getInfo.descs = 'asc'
        }
      }else{
        if(action.isDesc){
          state.getInfo.descs = 'desc'
        }else{
          state.getInfo.descs = 'asc'
        }
      }
      return{
        ...state,
        getInfo:{...state.getInfo}
      }
    default:
      return state
  }
}

