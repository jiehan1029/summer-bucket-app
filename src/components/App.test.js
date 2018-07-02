import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

/*
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../store';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
  div);
  ReactDOM.unmountComponentAtNode(div);
});
*/