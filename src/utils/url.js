import qs from 'qs';

export function getUrlQuery () {
  const {search, hash} = window.location;
  let searchStr = search || hash;
  searchStr = searchStr.replace(/^(.*?\?)/, '');

  return qs.parse(searchStr);
}

export function concatUrlAndQuery (baseUrl, query) {
  let search = '';
  let _url = baseUrl.indexOf('?') > -1 ? baseUrl : baseUrl + '?';
  search = _url.split('?')[1];
  const urlQ = qs.parse(search);
  if (typeof query === 'object') {
    query = qs.stringify(query);
  } else if (typeof query !== 'string' || !query) {
    return baseUrl;
  }

  if (/\?/.test(baseUrl)) {
    baseUrl += '&';
  } else {
    baseUrl += '?';
  }

  return baseUrl + query;
}

export function getTargetQuery (url =  '') {
  let targetQuery = {};
  let search = '';
  let _url = url.indexOf('?') > -1 ? url : url + '?';
  search = _url.split('?')[1];
  const urlQ = qs.parse(search);
  const urlQuery = url ?  urlQ : getUrlQuery();

  return targetQuery;
}

export function linkTo(href) {
  let targetQuery = getTargetQuery();
  let targetUrl;
  if (href.indexOf('http') === 0) {
    targetUrl = concatUrlAndQuery(href, targetQuery);
  } else {
    targetUrl = concatUrlAndQuery(window.location.origin + href, targetQuery);
  }

  window.location.href = targetUrl;
}
