import React from 'react';
import {Link} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import {BASENAME_URL} from "../../constants/Settings";

const Error404 = () => (
    <div className="app-wrapper page-error-container animated slideInUpTiny animation-duration-3">
        <div className="page-error-content">
            <div className="error-code mb-4 animated zoomIn">404</div>
            <h2 className="text-center fw-regular title zoomIn animation-delay-5 animated">
                <IntlMessages id="extraPages.404Msg"/>
            </h2>
            <p className="text-center zoomIn animation-delay-5 animated">
                <Link className="btn btn-primary" to={`${BASENAME_URL}`}><IntlMessages id="extraPages.goHome"/></Link>
            </p>
        </div>
    </div>
);

export default Error404;
