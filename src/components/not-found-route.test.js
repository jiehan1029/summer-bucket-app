import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../store';
import {BrowserRouter as Router} from 'react-router-dom';
import NotFoundRoute from './not-found-route';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <NotFoundRoute />
      </Router>
    </Provider>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
