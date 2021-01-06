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
import IntlMessages from "../../../../util/IntlMessages";
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
    getSelectedUser,
} from "../../../../selectors/Users";

/**
 * @context Container to Home
 * @returns {*}
 * @constructor
 */
const Home = (props) => {

    const {users, selected} = props;
    const [pageCount, setPageCount] = useState(1)

    const parameters = {
        page: pageCount,
        numItems: 20
    }

    //request get list user
    useEffect(() => {//willMountComponentWithUseEffect
        if (!users) props.requestGetUsers(parameters);
        setPageCount(pageCount + 1)
        
    }, []); //eslint-disable-line

    function select (user) {
        console.log("Click")
        props.selectUser(user)
    }

    function deleteUser () {
        console.log("Deleting")
        props.deleteUser()
    }

    function getMoreUsers() {
        props.requestGetUsers(parameters);
        setPageCount(pageCount + 1)
    }

    return (
        <div className="app-body">
            <div className="app-wrapper">
                {/* <IntlMessages id={'text.welcome'}/> */}
                <h2>User selected: {selected && selected.login}</h2>
                <button onClick={() => deleteUser()}>Delete</button>
                {users&&<BasicTable items={users} onSelect={select} />}

                <button onClick={() => getMoreUsers()}>Get More</button>                
            </div>
        </div>


    );
};


const mapStateToProps = state => {
    return {
        users: getUsers(state.users),
        selected: getSelectedUser(state.users)
    }
};


export default connect(mapStateToProps, {
    requestGetUsers,
    selectUser,
    deleteUser
})(Home);