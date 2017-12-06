import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from './actionType';
import { LOADING, SUCCESS, FAILURE } from './status'; 

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_START:
			return {...state, status: LOADING}
		case FETCH_SUCCESS:
			return {...state, ...action.result, status: SUCCESS}
		case FETCH_FAILURE:
			return {...state, status: FAILURE}
		default:
			return state;
	}
}
