import * as types from '../action/actionTypes';

let initialState = {
	apiData: [],
	error: false,
};

export default function getUserInfo(state = initialState, action) {
	console.log('reducer', action);
	switch (action.type) {
		case types.GET_USER_DATA:
			return {
				apiData: [],
				error: false,
			};
		case types.GET_USER_DATA_SUCCESS:
			return {
				apiData: action.payload,
				error: false,
			};
		case types.GET_USER_DATA_FAILURE:
			return {
				apiData: [],
				error: true,
			};

		default:
			return state;
	}
}
