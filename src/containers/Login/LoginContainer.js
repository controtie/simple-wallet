import { connect } from 'react-redux';
import Login from './Login';
import * as actions from './login-actions';

const mapStateToProps = (state) => {
  const {
    login: {
      username,
      password,
      otp,
      isLoggingIn,
    } = {},
  } = state;

  return {
    username,
    password,
    otp,
    isLoggingIn,
  }
};

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

