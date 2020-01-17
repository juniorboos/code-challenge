/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>, Paulo Pinho <paulo.pinho@caixamagica.pt>,
 *
 * @description App
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */

import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {
    COLLAPSED_DRAWER,
    FIXED_DRAWER,
} from '../constants/Settings';
import {isIOS, isMobile} from 'react-device-detect';
import Restricted from "../containers/Restricted";

const App = props => {

    const {match, drawerType, themeColor} = props;
    const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'fixed-drawer' : drawerType.includes(COLLAPSED_DRAWER) ? 'collapsible-drawer' : 'mini-drawer';

    //set default height and overflow for iOS mobile Safari 10+ support.
    if (isIOS && isMobile) {
        document.body.classList.add('ios-mobile-view-height')
    } else if (document.body.classList.contains('ios-mobile-view-height')) {
        document.body.classList.remove('ios-mobile-view-height')
    }

    return (
        <div className={`app-container ${drawerStyle}`}>
            <div className="app-main-container">
                <Restricted props={{match:match}}/>
                {themeColor && document.body.classList.add(themeColor)}
            </div>
        </div>
    );
};


const mapStateToProps = ({settings}) => {
    const {drawerType, navigationStyle, themeColor} = settings;
    return {drawerType, navigationStyle, themeColor}
};
export default withRouter(connect(mapStateToProps)(App));