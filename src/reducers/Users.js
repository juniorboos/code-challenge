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
	REQUEST_SELECT_USER,
	REQUEST_SELECT_USER_SUCCESS,
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
			// console.log('New: ', action.payload.data.items)
			// console.log('Exists: ', state.users ? state.users.includes(action.payload.data.items[0]) : false)
			// const newUsers = state.users ? action.payload.data.items.filter((el) => !state.users.includes(el)) : action.payload.data.items 
			// const usersList = state.users ? [...state.users, ...newUsers] : newUsers
			const usersList = state.users ? [...state.users, ...action.payload.data.items] : action.payload.data.items
			// console.log('New2: ', newUsers)
			console.log(usersList)

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
		case REQUEST_SELECT_USER:
			console.log(action.payload)
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