import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
      <Route path="/posts/new" component={PostsNew} />
      <Route path="/" component={PostsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
