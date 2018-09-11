import { fromJS } from 'immutable';
import createSagaMiddleware, { END } from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';

export default (initialState = {}, history) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  if (history) {
    middleware.push(routerMiddleware(history));
  }

  const enhancers = [];
  // if (__DEV__) {
  //   // const devToolsExtension = window.devToolsExtension;
  //   // if (false && typeof devToolsExtension === 'function') {
  //   //   enhancers.push(devToolsExtension());
  //   // }
  //   const DevTools = require('../components/DevTools').default;
  //   enhancers.push(DevTools.instrument());

  //   //const createLogger = require('redux-logger');
  //   //middleware.push(createLogger({
  //   //  stateTransformer: (state) => state.toJS()
  //   //}));
  // }

  const store = createStore(
    rootReducer,
    fromJS(initialState),
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => {
    store.dispatch(END);
  };

  const historyRes = history ? syncHistoryWithStore(history, store, {
    selectLocationState (state) {
      return state.get('router').toObject();
    }
  }) : void 0;

  // if (__DEV__ && module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     const reducers = require('../reducers').default;
  //     store.replaceReducer(reducers(store.asyncReducers));
  //   });
  // }

  return {store, history: historyRes};
}
