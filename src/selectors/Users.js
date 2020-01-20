/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>,
 *
 * @description Selector users
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */
import {createSelector} from 'reselect';

export const getUsers = createSelector(state => state.users,  users => users);
