const settings = {
  'production': {
    apiRoot: `${window.location.protocol}//restapi.xuanwonainiu.com`,
    wechatConfig: `${window.location.protocol}//restapi.xuanwonainiu.com`, // 获取微信sdk配置参数
    redirectServerUri: 'http://restapi.xuanwonainiu.com/uc/dispatch', // 微信授权回调地址
    oauthStateMaidao: `${window.location.protocol}//${window.location.host}|prod`,
  },
  'development': {
    apiRoot: 'http://restapi.xuanwonainiutest.com',
    wechatConfig: 'http://restapi.xuanwonainiutest.com',
    redirectServerUri: 'http://restapi.xuanwonainiu.com/uc/dispatch',
    oauthStateMaidao: `${window.location.protocol}//${window.location.host}|test`,
  },
  'default': {
    apiRoot: 'http://restapi.xuanwonainiutest.com',
    wechatConfig: 'http://restapi.xuanwonainiutest.com',
    redirectServerUri: 'http://restapi.xuanwonainiu.com/uc/dispatch',
    oauthStateMaidao: `${window.location.protocol}//${window.location.host}|test`,
  }
};

const INTERFACE_ENV = process.env.REACT_APP_CUSTOM_ENV || process.env.NODE_ENV; // 接口环境
console.log('env=', [INTERFACE_ENV]);

function getSetting (name) {
  const setting = settings[INTERFACE_ENV] || settings['default'];
  return setting[name] || settings['default'][name];
}

module.exports = {
  getSetting,
};
