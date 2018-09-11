import { getWebOAuthUrl } from '../services/uc';
import { call, select } from 'redux-saga/effects';
import qs from 'qs';

async function request ({cookie, method, url, body}) {
  method = method.toLowerCase();

  let options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'channel': 'sqlxhhr'
    },
    credentials: 'include'
  };

  if (~url.indexOf('rap.taobao.org')) {
    delete options.credentials;
  }
  const link = window.location.href;

  if (window.localStorage.getItem('t')) {
    options.headers.WXEXTSession = window.localStorage.getItem('t');
  }

  if (['get', 'jsonp'].indexOf(method) >= 0 && body) {
    url = url.replace(/\?$/, '');
    if (/\?/.test(url)) {
      url += '&';
    } else {
      url += '?';
    }
    url += qs.stringify(body);
  } else {
    options.body = body && JSON.stringify(body);
  }

  let res;
  res = await fetch(url, options);
  //对服务端内部错误上
  if (res.status !== 200) {
    const serverError = {
      url,
      body: JSON.stringify(body),
      res: `httpcode: ${res.status}, res: ${res.statusText}`
    };
  }
  res = await res.json();

  const hasNoRedirectParam = body && body.noForceRedirect; // 是否有未授权不跳转字段
  const shouldRedirect = res.status === 401 && !hasNoRedirectParam; //是否需要跳转

  if (shouldRedirect) {
    const {appId, domain, qunId, callbackUrl, oauthPlatform} = res.data || {};
    const oAuthParams = {
      appId,
      domain,
      qunId,
      callbackUrl,
      oauthPlatform,
      link,
    };
    window.location.href = getWebOAuthUrl(oAuthParams);
    
  } else if (res.status !== 1 && res.status !== 401) {
    window.alertTip(res.msg);
  }
  return res;
}

export default request;
