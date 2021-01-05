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

    const [userSelected, setUserSelected] = useState(null)

    //request get list user
    useEffect(() => {//willMountComponentWithUseEffect
        if (!users) props.requestGetUsers();

    }, []); //eslint-disable-line

    function select (user) {
        console.log("Click")
        props.selectUser(user)

        // setUserSelected(users.selected)
    }

    return (
        <div className="app-body">
            <div className="app-wrapper">
                {/* <IntlMessages id={'text.welcome'}/> */}
                <h2>User selected: {selected && selected.login}</h2>
                {/* <BasicTable items={users} onSelect={select} /> */}
                <ul>
                    {users.map((item) => (
                        <li onClick={() => select(item)} key={item.id}>{item.login}</li>
                    ))}
                </ul>
            </div>
        </div>


    );
};


const mapStateToProps = state => {
    console.log(state)
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