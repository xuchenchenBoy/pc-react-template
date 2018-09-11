import request from './request';
import config from '../config';

let wxReady = false;
let wxTimer = null;

function getSign (_url) {
  return request({ method: 'get', url: `${config.getSetting('wechatConfig')}/uc/weixin/signInfo?url=${_url}`});
}

function setWxConfig () {
  getSign(encodeURIComponent(location.href)).then(res => {
    let data = res.data;
    window.wxData.config = {
      debug: false,
      appId: data.appId + '',
      timestamp: data.timestamp + '',
      nonceStr: data.noncestr + '',
      signature: data.sign + '',
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'showOptionMenu',
        'showMenuItems',
        'chooseImage',
        'previewImage',
        'uploadImage'
      ]
    };
    window.wx.config(window.wxData.config);
    window.wx.ready(() => {
      // window.alert('ready');
      wxReady = true;
    });
    wxTimer = setTimeout(() => {
      if (wxReady) {
        clearInterval(wxTimer);
        return;
      }
      window.wx.config(window.wxData.config);
    }, 1000);
  });
}

export function resignWx () {
  wxReady = false;
  setWxConfig();
}

function wxCall (fn) {
  let timer = null;
  if (wxReady) {
    fn();
    return;
  }
  timer = setInterval(() => {
    if (wxReady) {
      clearInterval(timer);
      fn();
    }
  }, 500);
}
export function setWxShare ({
                              title = '',
                              link = window.location.href,
                              desc = ' ',
                              imgUrl = '',
                              shareAppFn = function () {},
                              shareTimeLineFn = function () {}
                            }) {
  const shareData = { title, link, desc, imgUrl, shareAppFn, shareTimeLineFn };
  wxCall(() => {
    if (shareData.title && shareData.link) {
      window.wx.onMenuShareAppMessage({
        title,
        desc,
        link,
        imgUrl,
        success: shareAppFn
      });
      window.wx.onMenuShareTimeline({
        title,
        link,
        imgUrl,
        success: shareTimeLineFn
      });
    }
  });
}

// export function registWx (wechatSign) {
//   var config = {
//     debug: false,
//     appId: wechatSign.appId + '',
//     timestamp: wechatSign.timestamp + '',
//     nonceStr: wechatSign.noncestr + '',
//     signature: wechatSign.sign + '',
//     jsApiList: [
//       'onMenuShareTimeline',
//       'onMenuShareAppMessage',
//       'onMenuShareQQ',
//       'showOptionMenu',
//       'showMenuItems',
//       'chooseImage',
//       'previewImage',
//       'uploadImage'
//     ]
//   };
//   setTimeout(function () {
//     window.wx.config(config);
//   }, 500);
// }
