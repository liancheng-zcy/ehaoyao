import * as types from './action_types'
const initialState = {
  isRow: true
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_ROW:
      state.isRow = !state.isRow
      return { 
        ...state,
      };
    default:
      return state
  }
}

