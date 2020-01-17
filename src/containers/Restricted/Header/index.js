/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>,
 *
 * @description Container Header
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */

import React, { useState } from 'react';
import HeaderComponent from "../../../components/Header";
import {connect} from 'react-redux'
import {withRouter} from "react-router";
//Selectors
import {
	getDrawerType,
	getLocale,
	getThemeColor
} from "../../../selectors/Settings";
//Actions
import {
	setDarkTheme,
	switchLanguage
} from "../../../actions/Setting";
import PropTypes from "prop-types";
//constants

/**
 * @context Container to Header
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Header = (props) => {

	const [isOpenLangSwitcher, setIsOpenLangSwitcher] = useState(false);
	//--END--\\

	return (
		<HeaderComponent
			langSwitcherCard = {{
				data : {
					locale: props.locale
				},
				actions: {
					handlerToggle: (()=>setIsOpenLangSwitcher(!isOpenLangSwitcher)),
					handlerSwitchLanguage: props.switchLanguage,
				},
				isOpen: isOpenLangSwitcher
			}}
			settings = {{
				themeColor : props.themeColor
			}}
		/>
	);

};


Header.propTypes = {
	drawerType: PropTypes.string.isRequired,
	locale: PropTypes.shape({
		icon : PropTypes.string.isRequired,
		languageId : PropTypes.string.isRequired,
		locale : PropTypes.string.isRequired,
		name : PropTypes.string.isRequired,
	}).isRequired,
	themeColor : PropTypes.string.isRequired,

};


const mapStateToProps = ({settings}) => {
	return {
		drawerType: getDrawerType(settings),
		locale: getLocale(settings),
		themeColor: getThemeColor(settings),

	}
};

export default withRouter(connect(mapStateToProps,
	{
		switchLanguage,
		setDarkTheme,
	})(Header));
