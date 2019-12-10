import * as types from './action_types'
const defaultState = {
  homeData:[],
  categoryData:[]
}

export default (state=defaultState,action) =>{
  switch (action.type) {
    case types.LOADDATA:
      return{
        homeData:action.data
      }
    case types.LOADCATGORY: 
      return{
        categoryData:action.data
      }
    case types.FETCH_FAILED: 
      return{
        homeData:action.message
      }
    default:
      return state
  }
}