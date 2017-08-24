/**
 * Created by Administrator on 2017/3/2.
 */
'use strict';

import { Request } from 'superagent';
import request from 'superagent';


Request.prototype.exec = function() {
    let req = this;

    return new Promise((resolve, reject) => {
        req.end((error, res) => {
            if (error) {
                return reject(error);
            }
            resolve(res);
        });
    });
};

export default request;
