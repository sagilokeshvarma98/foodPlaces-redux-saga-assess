import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/jquery/dist/jquery'
import {appstate} from './redux/store'

import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {RootSaga} from './redux/saga/rootSaga'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const mystore=createStore(appstate,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(RootSaga);

mystore.dispatch({type:"GET_CITIES"})



ReactDOM.render(
  
  <Provider store ={mystore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
