import { connect } from 'react-redux';
import Login from './Login';
import * as actions from './login-actions';

// Pull data from store and pass to <Login /> to be displayod on login form
const mapStateToProps = (state) => {
  const {
    login: {
      username,
      password,
      otp,
      isLoggingIn,
      isLoggedIn
    } = {},
  } = state;

  return {
    username,
    password,
    otp,
    isLoggingIn,
    isLoggedIn,
  }
};

// Supply actions defined in login-actions.js with 'dispatch'
// to allow them to update the store.
// Pass these supplemented actions to <Login />
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: () => {
      dispatch(actions.login());
    },
    onUpdateUsernameField: (event) => {
      dispatch(actions.updateUsernameField(event.target.value));
    },
    onUpdatePasswordField: (event) => {
      dispatch(actions.updatePasswordField(event.target.value));
    },
    onUpdateOTPField: (event) => {
      dispatch(actions.updateOTPField(event.target.value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

