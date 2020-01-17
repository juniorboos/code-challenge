/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>,
 *
 * @description redux Actions - Utils
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */

import {
	RESET_UTILS,
	REQUEST_GET_EXAMPLES, REQUEST_GET_EXAMPLES_SUCCESS, REQUEST_GET_EXAMPLES_FAIL
} from '../constants/Utils';

export function requestGetExamples(payload){
	return {
		type: REQUEST_GET_EXAMPLES,
		payload: payload
	}
}

export function requestGetExamplesSuccess(payload){
	return {
		type: REQUEST_GET_EXAMPLES_SUCCESS,
		payload: payload
	}
}

export function requestGetExamplesFail(payload){
	return {
		type: REQUEST_GET_EXAMPLES_FAIL,
		payload: payload
	}
}

export function resetUtils() {
	return {
		type: RESET_UTILS,
	};
}
