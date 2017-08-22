import { connect } from 'react-redux';
import Login from './Login';
import * as actions from './login-actions';

const mapStateToProps = (state) => {
  return state.login;
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

