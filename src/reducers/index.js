/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>,
 *
 * @description redux Reducers - ALL
 * @see redux reducers docs: (basic) https://redux.js.org/basics/reducers  || (combinereducers) https://redux.js.org/api/combinereducers
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */

import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import Settings from './Settings';


export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings
});