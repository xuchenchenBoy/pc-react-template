import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import todoApp from '../reduces';
import Login from '../pages/login';
import promiseMiddleware from '../util/promiseMiddleware';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { debug } from '../util/constants';

const loggerMiddleware = createLogger();

const onEnterApp = (nextState, replaceState, callback) => {
  const isLogin = true;
  if (!isLogin && nextState.location.pathname !== '/login') {
    replaceState('/login');
  }

  callback();
};

const middleWares = [
  promiseMiddleware,
  debug && loggerMiddleware,
].filter(Boolean);

const store = createStore(
  todoApp,
  applyMiddleware(...middleWares),
);

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" onEnter={onEnterApp}>
        <IndexRoute component={Login} />
        <Route path="login" component={Login} />

        {/* <Route path="users" component={Users}>
                     <Route path="/user/:userId" component={User}/>
                     </Route> */}
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(App(), document.getElementById('root'));
registerServiceWorker();
