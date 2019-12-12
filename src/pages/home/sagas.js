// home的sagas

import { put } from 'redux-saga/effects'
import { get } from 'utils/http'

import * as types from './action_types'
function* loadData(action) {
   try {
      const result = yield get({
        url:action.url
      });
      yield put({type:types.LOADDATA, data: result.data});
   } catch (e) {
      yield put({type: types.FETCH_FAILED, message: e.message});
   }
}

function * loadCategoryData(action) {
     
      try {
         let resData = action.cateList
         let data_category = null
         resData.forEach((val,index) => {
            if(action.selId === val.cid){
               data_category = resData[index]
            }
         })
         yield put({type:types.LOADCATGORY, data:data_category});
      } catch (e) {
         yield put({type: types.FETCH_FAILED, message: e.message});
      }
   }

export {
  types,
  loadData as action,
  loadCategoryData as action_category
}