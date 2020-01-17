// import React from 'react';
// import {Link} from 'react-router-dom'
// import {connect} from 'react-redux';
// import {NotificationContainer, NotificationManager} from 'react-notifications';
// import IntlMessages from 'util/IntlMessages';
// import LoginForm from '../../components/Forms/Login';
// import {
//   hideMessage,
//   showAuthLoader,
//   userLoginByS2C,
// } from '../../actions/Auth';
// import {BASENAME_URL} from "../../constants/Settings";
//
//
// class Login extends React.Component {
//
//   componentDidUpdate() {
//     if (this.props.showMessage) {
//       setTimeout(() => {
//         this.props.hideMessage();
//       }, 100);
//     }
//     if (this.props.authUser !== null) {
//       this.props.history.push(BASENAME_URL);
//     }
//   }
//
//   //dispacher redux+saga
//   handleSubmit = values => {
//     const {
//       username,
//       password,
//     } = values;
//     const body = {
//       username,
//       password,
//     };
//     return this.props.userLoginByS2C(body);
//   };
//
//   render() {
//
//
//     const {showMessage, alertMessage, allowResetPassword, themeColor} = this.props;
//     // console.log("[CONTAINERS] LOGIN - render");
//     return (
//         <div className="app-main-login">
//           <div
//               className={`${themeColor} app-login-container d-flex justify-content-center align-items-center animated fadeIn animation-duration-2`}>
//             <div className="app-login-main-content" >
//
//               <div className="app-logo-content d-flex align-items-center justify-content-center">
//                 <Link className="logo-lg" to={`${BASENAME_URL}`} title="S2C - Save To Compete">
//                   <img src={require("../../assets/images/s2c_logo_w.png")} alt="S2C" title="S2C - Save To Compete"/>
//                 </Link>
//               </div>
//
//               <div className="app-login-content" >
//                 <div className="app-login-header">
//                   <h1> <IntlMessages id="appModule.login"/></h1>
//                 </div>
//                 <div className="app-login-header mb-4">
//                   <h5><IntlMessages id="appModule.loginSubtitle"/></h5>
//                 </div>
//
//                 <LoginForm {...this.props.formLogin}
//                            allowResetPassword={allowResetPassword}
//                             onSubmit={this.handleSubmit}
//                 />
//               </div>
//             </div>
//         </div>
//
//
//         {showMessage && NotificationManager.error(alertMessage)}
//         <NotificationContainer/>
//       </div>
//     );
//   }
// }
//
//
//
// const mapStateToProps = ({auth, settings}) => {
//   const {alertMessage, showMessage, authUser, allowResetPassword, formLogin} = auth;
//   const {themeColor} = settings;
//   return {alertMessage, showMessage, authUser, allowResetPassword, formLogin, themeColor}
// };
//
//
// export default connect(mapStateToProps, {
//   userLoginByS2C,
//   hideMessage,
//   showAuthLoader
// })(Login);
