// 这里只是暴露一个函数，这个函数需要参入做真正派发的**类型和函数**，使用的地方里的函数的函数里put做真正的dispatch

import { takeEvery} from 'redux-saga/effects'
import { sagas as home } from 'pages/home/'

let { GETHOMELIST } = home.types


function* sagas() {
  yield takeEvery(GETHOMELIST, home.action);
}



export default sagas;