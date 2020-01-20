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
	REQUEST_GET_USERS,
	REQUEST_GET_USERS_SUCCESS, REQUEST_GET_USERS_FAIL
} from '../constants/Users';


export function requestGetUsers(payload){
	return {
		type: REQUEST_GET_USERS,
		payload: payload
	}
}

export function requestGetUsersSuccess(payload){
	return {
		type: REQUEST_GET_USERS_SUCCESS,
		payload: payload
	}
}

export function requestGetUsersFail(payload){
	return {
		type: REQUEST_GET_USERS_FAIL,
		payload: payload
	}
}
