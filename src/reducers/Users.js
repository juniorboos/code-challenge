/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>,
 *
 * @description redux Reducers - Utils
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */


import {
	INITIAL_USERS,
	REQUEST_GET_USERS,
	REQUEST_GET_USERS_SUCCESS,
	REQUEST_GET_USERS_FAIL,
	SELECT_USER,
	DELETE_USER
} from "../constants/Users";


const Users = (state = INITIAL_USERS, action) => {

	switch (action.type) {

		case REQUEST_GET_USERS:
			return {
				...state,
				loading: true,
			};
		case REQUEST_GET_USERS_SUCCESS:
			const usersList = state.users ? [...state.users, ...action.payload.data.items] : action.payload.data.items

			return {
				...state,
				users : usersList,
				loading: false,
			};
		case REQUEST_GET_USERS_FAIL:
			return {
				...state,
				loading: false,
			};
		case SELECT_USER:
			return {
				...state,
				selected: action.payload,
			};
		case DELETE_USER:
			const users = state.users.filter(function( user ) {
				return user.id !== state.selected.id;
		  });
			return {
				...state,
				selected: null,
				users: users
			}
		default:
			return state;
	}
};

export default Users;