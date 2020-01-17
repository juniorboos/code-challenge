import React from 'react';
import {Link} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import { MdErrorOutline } from 'react-icons/md';
import PropTypes from "prop-types";

const Error403 = ({props}) => {
    return (
        <div className="app-wrapper page-error-container animated slideInUpTiny animation-duration-3">
            <div className="page-error-content">
                <div className="error-code-403 mb-4 animated zoomIn">
                    <MdErrorOutline size={100} />
                    <p>Error</p>
                </div>

                <h2 className="text-center fw-regular title zoomIn animation-delay-5 animated">
                    <IntlMessages id={props.message}/>
                </h2>
                <p className="text-center zoomIn animation-delay-5 animated">
                    <Link className="btn btn-primary" to={props.url}><IntlMessages id={props.buttonText}/></Link>
                </p>
            </div>
        </div>
    )
};


Error403.propTypes = {
    props: PropTypes.shape({
        url: PropTypes.string.isRequired,
        buttonText: PropTypes.string.isRequired,
        message: PropTypes.string,
    }).isRequired,
};

export default Error403;
