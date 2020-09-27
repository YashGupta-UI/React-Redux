import * as types from '../action/actionTypes';

let initialState = {
	data: '',
};

export default function getHarbolaInfo(state = initialState, action) {
	switch (action.type) {
		case types.GET_HARBOLA_STATE:
			return {
				data: action.payload,
			};

		default:
			return state;
	}
}

// reducer -> 2 argument  state, action

// pure function
