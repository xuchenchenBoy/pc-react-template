import { getSetting } from '../config';

export function getWebOAuthUrl ({
  appId,
  domain,
  qunId,
  oauthPlatform = 'cloud',
  callbackUrl,
  redirectUri = window.location.href,
  isWechat = true,
  isHybrid = false,
  hostHref = '',
  link = '',
}) {
  // if (isHybrid) {
  //   return `${hostHref}/hybridLogin?referer=${link}`;
  // }
  // if (!isWechat) {
  //   return `${hostHref}/login`;
  // }
  
  const redirectServerUri = getSetting('redirectServerUri');
  const state = getSetting('oauthStateMaidao');

  redirectUri = link.replace(/&/g, '--');
  redirectUri += `&domain=${domain}&qunId=${qunId}&oauthPlatform=${oauthPlatform}`;

  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}` +
    `&redirect_uri=${encodeURIComponent(redirectServerUri + '?referer=' + redirectUri)}` +
    `&response_type=code&scope=snsapi_userinfo&state=${encodeURIComponent(state)}#wechat_redirect`;
}
