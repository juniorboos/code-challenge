/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>,
 *
 * @description Component Header
 *
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */

import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';
import IntlMessages from 'util/IntlMessages';
import LanguageSwitcher from '../../components/LanguageSwitcher/index';
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";
import {BASENAME_URL} from "../../constants/Settings";
import { Switch } from '@material-ui/core';


/**
 *
 * @context Component to Header
 *
 * @param langSwitcherCard
 * @param settings
 * @returns {*}
 * @constructor
 */
const Header = ({langSwitcherCard, settings})=> {

  return (
      <div   className={`app-header app-header-horizontal`}>
        <AppBar className={`app-main-header`}>
          <Toolbar className="app-toolbar" disableGutters={false} >
            <Link className={`app-logo-${settings.themeColor} mr-2 d-none d-sm-block`} to={`${BASENAME_URL}home`} >
              <img src={require("../../assets/images/logos/caixamagica.png")} alt="CMS" title="CMS Frontend - Technical Test"/>
            </Link>
            <ul className="header-notifications list-inline ml-auto">
              {/*lang*/}
              <Switch 
                checked={settings.darkTheme}
                onChange={langSwitcherCard.actions.handlerTheme}  
              />
              <li className="list-inline-item user-lang">
                <Dropdown
                    className="quick-menu"
                    isOpen={langSwitcherCard.isOpen}
                    toggle={langSwitcherCard.actions.handlerToggle}>
                  <DropdownToggle
                      className="d-inline-block lang"
                      tag="span"
                      data-toggle="dropdown">
                    <Tooltip id="tooltip-changeLanguage" title={<IntlMessages id="tooltip.changeLanguage"/>} placement="bottom" enterDelay={300}>
                      <IconButton className="icon-btn p-2" color={'primary'}>
                        <i className={`flag flag-24 flag-${langSwitcherCard.data.locale.icon}`} />
                      </IconButton>
                    </Tooltip>

                  </DropdownToggle>

                  <DropdownMenu right className="w-50">
                    <LanguageSwitcher switchLanguage={langSwitcherCard.actions.handlerSwitchLanguage}
                                      handleRequestClose={langSwitcherCard.actions.handlerToggle}/>
                  </DropdownMenu>
                </Dropdown>
              </li>
            </ul>

            <div className="ellipse-shape"/>
          </Toolbar>
        </AppBar>
      </div>
  );
};


Header.propTypes = {
  langSwitcherCard : PropTypes.object.isRequired,
};


export default Header;