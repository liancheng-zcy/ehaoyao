import * as types from './action_types'
const defaultState = {
  categoryData: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
      case types.LOADCATGORY: 
        return{
          categoryData:action.data
        }
      case types.FETCH_FAILED:
        return {
          categoryData: action.message
        }
      default:
          return state
    }
}                 