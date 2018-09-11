import dateFormat from 'date-format';

// 设置网页的标题
export function setDocumentTitle (title) {
  document.title = title;
  let ua = navigator.userAgent.toLowerCase();
  // IPHONE版无法监听TITLE 需要IFRAME触发
  if ((ua.indexOf('iphone') > -1) && !window.__wxjs_is_wkwebview) {
    let iframe = document.createElement('iframe');
    iframe.src = '/ok.txt';
    iframe.width = 0;
    iframe.height = 0;
    iframe.frameBorder = 0;
    iframe.onload = function () {
      setTimeout(function () {
        document.body.removeChild(iframe);
      }, 0);
    };
    document.body.appendChild(iframe);
  }
}

// 金额转换（分转成元）
export function getShowPrice (price) {
  const _price = ((price / 100) + '').indexOf('.') > -1 ? (price / 100).toFixed(2) : (price / 100);
  return _price || 0;
}

/**
 * 影藏真实内容
 * @param  {String} txt        原始文本
 * @param  {String} secretChar 加密字符
 * @return {[type]}            拼接好的加密文本
 */
export function encryptTxt(txt, secretChar = '****') {
  if (!txt || typeof txt !== 'string') return '';
  const len = txt.length;
  if (len > 2) {
    const firstChar = txt.charAt(0);
    const lastChar = txt.charAt(len - 1);
    const splitStr = firstChar + secretChar + lastChar;
    return splitStr;
  }
  return txt;
}

// 格式化时间至秒
export function formatToTime(timeStramp) {
  if (!timeStramp && typeof timeStramp !== 'number') return '';
  return dateFormat('yyyy-MM-dd hh:mm:ss', new Date(timeStramp));
}