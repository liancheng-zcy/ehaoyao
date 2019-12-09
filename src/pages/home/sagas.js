// home 的sagas

import { put } from 'redux-saga/effects'
import { get } from 'utils/http'
// const type_getHomeList = 'GET_HOME_LIST'
import * as types from './action_types'
function* loadData(action) {
   try {
      const result = yield get({
        url:'/ajax/goods'
      });
      yield put({type:types.LOADDATA, data: result.data});
   } catch (e) {
      yield put({type: types.FETCH_FAILED, message: e.message});
   }
}

export {
  types,
  loadData as action
}