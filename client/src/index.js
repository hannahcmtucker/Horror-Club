import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';

import reducers from './reducers';
import Auth from './containers/auth/auth_index';
import MoviesIndex from './containers/movies/movies_index';
import MovieDetail from './containers/movies/movie_detail';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/movie/:id" component={MovieDetail} />
          <Route path="/movies" component={MoviesIndex} />
          <Route path="/" component={Auth} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.mount'));