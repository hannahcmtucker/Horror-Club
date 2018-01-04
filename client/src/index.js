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

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
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