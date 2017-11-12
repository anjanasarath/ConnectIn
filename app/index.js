import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import styles from './index.css';
import combReducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware({});
const store = createStore(
  combReducers,
  compose(
    applyMiddleware(
      sagaMiddleware,
      promiseMiddleware(),
       loadingBarMiddleware(),
    )
  )
);
sagaMiddleware.run(rootSaga)  //boilerplate code

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
