/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>,
 *
 * @description Examples - request API external (Examples)
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */


import axios from 'axios';
import {
	CONFIG_HEADERS,
	URL_EXAMPLES,
} from '../constants/Endpoints'

const CancelToken = axios.CancelToken;
let cancel;


/**
 * getExamples
 *
 * @param payload
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getExamples = (payload) => {
	cancel && cancel();
	return axios.get(URL_EXAMPLES +payload.ID, {
		cancelToken: new CancelToken(function executor(c) {
			cancel = c;
		}),
		headers: CONFIG_HEADERS(),
	}).then(response => (response)).catch(error => {
		return (error);
	});
};


