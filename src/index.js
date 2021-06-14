import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/jquery/dist/jquery'
import {appstate} from './redux/store'
import {sagaActions} from './redux/reducers/getCities/actionTypes'
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {RootSaga} from './redux/saga/rootSaga'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const mystore=createStore(appstate,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(RootSaga);

mystore.dispatch({type:sagaActions.getCities})



ReactDOM.render(
  
  <Provider store ={mystore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
