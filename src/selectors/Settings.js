/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>,
 *
 * @description Selector Settings
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */
import {createSelector} from 'reselect';

export const getThemeColor = createSelector(state => state.themeColor,  themeColor => themeColor);
export const getLocale = createSelector(state => state.locale,  locale => locale);
export const getDrawerType = createSelector(state => state.drawerType,  drawerType => drawerType);