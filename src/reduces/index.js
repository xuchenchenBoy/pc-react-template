/**
 * Created by Administrator on 2017/3/1.
 */
import { combineReducers } from 'redux';

const myContext = require.context('./', false, /\.js$/);

const realKeys = myContext.keys().filter(file => file !== './index.js');

const reducersKeys = realKeys.reduce((prev, next) => {
  prev[next.replace(/(.*\/)*([^.]+).*/ig, '$2')] = myContext(next).default;

  return prev;
}, {});

const reducers = combineReducers(reducersKeys);

export default reducers;

