import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import history from './actions/history';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import RequireAuth from './containers/auth/require_auth_hoc';
import reducers from './reducers';
import Auth from './containers/auth/auth_index';
import MoviesIndex from './containers/movies/movies_index';
import MovieDetail from './containers/movies/movie_detail';
import { AUTH_USER } from './actions/auth';

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
if(token){
  store.dispatch( { type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/movie/:id" component={RequireAuth(MovieDetail)} />
          <Route path="/movies" component={RequireAuth(MoviesIndex)} />
          <Route path="/" component={Auth} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.mount'));