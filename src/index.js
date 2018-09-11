import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'
import VConsole from 'vconsole';
import createStore from './store/createStore'
import registerServiceWorker from './registerServiceWorker';
import sagas from './sagas'
import './components/AlertTip'
import './styles/init/rem'
import './styles/main.less'
import RouterWrapper from './components/Layouts/RouterWrapper'
import asyncComponent from './components/AsyncComponent'
import { getUrlQuery } from './utils/url'

const { store, history } = createStore(window.__INITIAL_STATE__ || {}, browserHistory);
store.runSaga(sagas);

// 调试模式，路径后加上logger参数
if (getUrlQuery() && getUrlQuery().logger) {
  new VConsole();
}

const Page404 = asyncComponent(() => import('./pages/Page404'))

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={RouterWrapper}>
        <Route path="*" component={Page404} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();


