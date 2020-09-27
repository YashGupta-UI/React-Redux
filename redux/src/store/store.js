// import { createStore } from 'redux';
// import getHarbolaInfo from '../reducer/getHarbolaInfo';

// export const store = createStore(getHarbolaInfo);
// store can be changed by reducer

// MiddleWare ->   Redux-thunk  vs Redux-Saga

// thunk -> promise based,   saga -> generator function (es6)

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import getHarbolaInfo from '../reducer/getHarbolaInfo';
import getUserInfo from '../reducer/getUserInfo';

const rootReducer = combineReducers({
	getHarbolaInfo,
	getUserInfo,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
