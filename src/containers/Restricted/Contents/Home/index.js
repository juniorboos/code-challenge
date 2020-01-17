/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>, Paulo Pinho <paulo.pinho@caixamagica.pt>,
 *
 * @description Container to Home
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */

import React from 'react';
import IntlMessages from "../../../../util/IntlMessages";
import {Button} from "@material-ui/core";


/**
 * @context Container to Home
 * @returns {*}
 * @constructor
 */
const Home = () => {

    return (
        <div className="app-body">
            <div className="app-wrapper">
                <IntlMessages id={'text.welcome'}/>
                <Button id={'text.welcome'}/>
            </div>
        </div>


    );
};


export default Home;
