

(function() {
  /**
  * 获取url中参数
  * @optional key {string} 需要获取的单个参数
  * @return {object} 参数对象
  */
  function getUrlParams(key){
    var str = location.search.slice(1),
        arr = str.split('&'),
        i = 0, l = 0,
        reg = /(^.+)=(.+)$/,
        result = {},
        params = null;

    if (!params) {
        for (i = 0, l = arr.length; i < l; i++) {
            if (!reg.test(arr[i])){
                continue;
            } else {
                result[arr[i].match(reg)[1]] = arr[i].match(reg)[2];
            }
        }
        params = result;
    }

    return (typeof key === 'string' ? params[key] : params);
  }

  // 解析带token路径，进行跳转
  function parseUrl() {
    var searchObj = getUrlParams();
    var token = searchObj['t'];
    if (token) {
      window.localStorage.setItem('t', token);
      delete searchObj['t'];
      var concatSearchs = concatSearch(searchObj);
      var newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${concatSearchs}`
      window.location.href = newUrl;
    }
  }

  /**
   * 拼接请求参数
   * @param  {Object} searchObj  路径的查询条件对象
   * @return {String}            拼接好的查询条件
   */
  function concatSearch(searchObj) {
    if (typeof searchObj !== 'object') return '';
    var concatSearchs = '?';
    for (i in searchObj) {
      if (searchObj.hasOwnProperty(i)) {
        concatSearchs += i + '=' + searchObj[i] + '&'
      }
    }

    return concatSearchs;
  }

  parseUrl();
}())