/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>,
 *
 * @description Users - request API external (users github)
 *
 * @version 20200120
 * @since 20200120 Initial release
 *
 */


import axios from 'axios';
import {
	CONFIG_HEADERS,
} from '../constants/Endpoints'

const CancelToken = axios.CancelToken;
let cancel;


/**
 * getExamples
 *
 * @param payload
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getUsers = (payload) => {
	cancel && cancel();
	const { page, numItems } = payload

	const parameters = {
		page: page ? `&page=${page}` : '',
		numItems: numItems ? `&per_page=${numItems}` : ''
	}
	console.log("Parameters: ", parameters.page + parameters.numItems)
	return axios.get(`https://api.github.com/search/users?q=c${parameters.page + parameters.numItems}`, {
		cancelToken: new CancelToken(function executor(c) {
			cancel = c;
		}),
		// headers: CONFIG_HEADERS(),
	}).then(response => (response)).catch(error => {
		return (error);
	});
};

export const getMoreUsers = (payload) => {
	cancel && cancel();
	const { page, numItems } = payload

	const parameters = {
		page: page ? `&page=${page}` : '',
		numItems: numItems ? `&per_page=${numItems}` : ''
	}

	return axios.get(`https://api.github.com/search/users?q=c${parameters.page + parameters.numItems}`, {
		cancelToken: new CancelToken(function executor(c) {
			cancel = c;
		}),
		// headers: CONFIG_HEADERS(),
	}).then(response => (response)).catch(error => {
		return (error);
	});
}


