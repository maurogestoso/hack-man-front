import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import {Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import Signin from './components/Signin';
import Play from './components/Play';
import Waiting from './components/Waiting';
import Thanks from './components/Thanks';
import NotYourTurn from './components/NotYourTurn';
import Join from './components/Join';
import './index.css';

import reducer from './reducers/index';

const store = createStore(
  reducer,
  applyMiddleware(createLogger(), thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path='/' component={Signin} />
      <Route path='/play' component={Play} />
      <Route path='/waiting' component={Waiting} />
      <Route path='/thanks' component={Thanks} />
      <Route path='/notyourturn' component={NotYourTurn} />
      <Route path='/join' component={Join} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
