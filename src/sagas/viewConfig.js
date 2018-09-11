import { takeLatest } from 'redux-saga';
import { put, call, select, fork, take, takem } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { setDocumentTitle } from '../utils';
import { setWxShare, resignWx } from '../utils/wechat';

export function *handleUpdateViewConfig ({payload}) {
  const {documentTitle, shareData} = payload;
  if (documentTitle) {
    setDocumentTitle(documentTitle);
  }
  yield call(resignWx);
  if (shareData) {
    setWxShare(shareData);
  }
}

export default function * () {
  yield takeLatest(types.SET_VIEW_CONFIG, handleUpdateViewConfig);
}


