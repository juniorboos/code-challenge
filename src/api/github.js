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
	return axios.get('https://api.github.com/search/users?q=c', {
		cancelToken: new CancelToken(function executor(c) {
			cancel = c;
		}),
		headers: CONFIG_HEADERS(),
	}).then(response => (response)).catch(error => {
		return (error);
	});
};


