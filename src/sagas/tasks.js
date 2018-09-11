import * as types from '../constants/actionTypes';
import * as service from '../services/tasks';
import { call, put } from 'redux-saga/effects';
import { takeLatest, } from 'redux-saga';
import { apiCall } from '../utils/saga';

// 获取用户信息
function* getUser () {
  const res = yield call(apiCall, service.getUser());
  if (res.status === 1) {
    const { data } = res;
    yield put({ type: types.TASKS_WANGZHUAN_USER_INFO_SUCCESS, payload: data });
  } else {
    yield put({ type: types.TASKS_WANGZHUAN_USER_INFO_FAILURE });
  }
}


export default function *() {
  yield takeLatest(types.TASKS_WANGZHUAN_USER_INFO_REQUEST, getUser);
}
