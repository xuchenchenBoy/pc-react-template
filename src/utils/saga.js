import { call, select } from 'redux-saga/effects';
import request from './request';

export function *apiCall (option) {
  if (Array.isArray(option)) {
    const [method, url, body] = option;
    option = {method, url, body};
  }
 
  option.cookie = document.cookie;
  option.link = window.location.href;
  return yield call(request, option);
}
