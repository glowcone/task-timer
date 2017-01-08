import React from 'react';
import { render } from 'react-dom';

import Main from './components/Main';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const router = (
	<Provider store={store}>
		<Main />
	</Provider>
)

render(router, document.getElementById('root'));
