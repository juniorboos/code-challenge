/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>,
 *
 * @see redux-sagas docs: https://redux-saga.js.org/ || https://redux-saga.js.org/docs/basics/DeclarativeEffects.html
 *
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */


import {all} from 'redux-saga/effects';
import users from './Users';

export default function* rootSaga(getState) {
    yield all([
        users()
    ]);
}
