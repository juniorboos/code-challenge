/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>
 *
 * @description Container to Restricted
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */

import React from 'react';
import {connect} from 'react-redux'
import FooterContainer from "./Footer";
import HeaderContainer from "../Restricted/Header";
import HomeContainer from "../Restricted/Contents/Home";

//Selectors
import {
	getDarkTheme
} from "../../selectors/Settings";

/**
 * @context Container to Restricted
 *
 * @returns {*}
 * @constructor
 */
const Restricted = (props) => {

    const { darkTheme } = props;

    let theme = darkTheme ? 'dark-theme' : 'cyan'

    return (
        <main className={`app-main-content-wrapper ${theme}`}>
            <HeaderContainer/>
            <div className="app-main-content">
                <HomeContainer/>
            </div>
            <FooterContainer/>
        </main>
    );
};

const mapStateToProps = state => {
    return {
        darkTheme: getDarkTheme(state.settings),
    }
};


export default connect(mapStateToProps)(Restricted);
