/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>,
 *
 * @description Saga-redux Examples
 * @inheritDoc o nome das funcoes e const no saga tem de começar com o '_" por exemplo
 * 		const _handlerName /.. || function* _callABC() /..
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */

import {all, call, put, takeLatest} from 'redux-saga/effects';
//actions
import {requestGetExamplesFail, requestGetExamplesSuccess} from "../actions/Utils";
import {resetUtils} from "../actions/Utils";
//constants
import {
	RESET_ALL,
	REQUEST_GET_EXAMPLES
} from '../constants/Utils';
//api
import {
	getExamples
} from "../api/Utils";




function* _handlerResetAll() {
	try {
		yield put(resetUtils());
	} catch (error) {
		console.log("[SAGA] catch error _handlerResetAll ", error);
	}
}


/**
 * _callGetExamples  request an API
 *
 * @param payload
 * @returns {Promise<postcss.Result|any|void>}
 * @private
 */
const _callGetExamples = async(payload) => {
	return (
		await getExamples(payload)
			.then(response => (response))
			.catch(error => {
				console.log("[SAGA] catch error _callGetExamples ", error);
				return error;
			})
	)
};

/**
 *
 * @param payload
 * @returns {IterableIterator<<"PUT", PutEffectDescriptor<{payload: *, type: *}>>|<"CALL", CallEffectDescriptor>>}
 * @private
 */
function* _handlerGetExamples({payload}) {
	try {
		const fetchResult = yield call(_callGetExamples, payload);
		if (payload.status === 200) yield put(requestGetExamplesSuccess({data: fetchResult.payload.data}));
		else yield put(requestGetExamplesFail({error: fetchResult}));
	} catch (error) {
		console.log("[SAGA] catch error _handlerGetExamples ", error);
	}
}

export default function* rootSaga() {
	yield all([
		takeLatest(REQUEST_GET_EXAMPLES, _handlerGetExamples),
		takeLatest(RESET_ALL, _handlerResetAll),
	]);
}