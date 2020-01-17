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
import FooterContainer from "./Footer";
import HeaderContainer from "../Restricted/Header";
import HomeContainer from "../Restricted/Contents/Home";

/**
 * @context Container to Restricted
 *
 * @returns {*}
 * @constructor
 */
const Restricted = () => {

    return (
        <main className="app-main-content-wrapper">
            <HeaderContainer/>
            <div className="app-main-content">
                <HomeContainer/>
            </div>
            <FooterContainer/>
        </main>
    );
};

export default Restricted;
