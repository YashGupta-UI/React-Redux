import * as types from './actionTypes';

export function getData(userData) {
	return {
		type: types.GET_HARBOLA_STATE,
		payload: userData,
	};
}

// action -> type and payload
