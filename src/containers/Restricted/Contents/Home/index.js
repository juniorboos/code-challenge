/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>, Paulo Pinho <paulo.pinho@caixamagica.pt>,
 *
 * @description Container to Home
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */

import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

//Component
import BasicTable from '../../../../components/Tables/basic/BasicTable'

//actions
import {
    requestGetUsers,
    selectUser,
    deleteUser
} from "../../../../actions/Users";

//Selectors
import {
    getUsers,
    getLoading,
    getSelectedUser,
} from "../../../../selectors/Users";
import Loading from 'components/Loading';

/**
 * @context Container to Home
 * @returns {*}
 * @constructor
 */
const Home = (props) => {

    const {users, loading, selected} = props;

    // Pagination counter
    const [pageCount, setPageCount] = useState(1)

    // Parameters for request
    const parameters = {
        page: pageCount,
        numItems: 20
    }

    //request get list user
    useEffect(() => {//willMountComponentWithUseEffect
        if (!users) props.requestGetUsers(parameters);
        setPageCount(pageCount + 1)
        
    }, []); //eslint-disable-line


    function getMoreUsers() {
        props.requestGetUsers(parameters);
        setPageCount(pageCount + 1)
    }

    return (
        <div className="app-body">
            <div className="app-wrapper">
                {loading && <Loading />}
                {users && <BasicTable items={users} selected={selected} onSelect={props.selectUser} />}   
                <button className="btn btn-secondary" onClick={() => getMoreUsers()}>Get More</button>                
                <button className="floating-right btn btn-danger" onClick={() => props.deleteUser()}>Delete</button>
            </div>
        </div>
    );
};


const mapStateToProps = ({users}) => {
    return {
        users: getUsers(users),
        loading: getLoading(users),
        selected: getSelectedUser(users)
    }
};


export default connect(mapStateToProps, {
    requestGetUsers,
    selectUser,
    deleteUser
})(Home);