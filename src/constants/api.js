import {getSetting} from '../config';

export const API_ROOT = getSetting('apiRoot');
export const API_MALL = getSetting('apiMall');
export const API_QF = getSetting('apiQf');
export const API_MAIDAO = getSetting('apiMaidao');

function api(url, type = 'ROOT') {
    let key;
    switch (type) {
        case 'ROOT':
            key = API_ROOT;
            break;
        case 'MALL':
            key = API_MALL;
            break;
        case 'QF':
            key = API_QF;
            break;
        case 'MAIDAO':
            key = API_MAIDAO;
            break;
        default:
            key = API_ROOT;
    }
    return `${key}${url}`;
}

export const TASKS = {
  USER_INFO: api('/agent/advertise/wangzhuan/user/detail'),
};

