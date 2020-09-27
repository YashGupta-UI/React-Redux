import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

/* Redux -> Redux State Management Library

1. Action -> Function

2. Reducer -> Pure Function

3. Store -> Single Source of truth



Component A  -> action dispatch -> reducer -> (store changed only by reducer) 


*/
