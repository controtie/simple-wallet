import { connect } from 'react-redux';
import Logout from './Logout';
import * as actions from './logout-actions';

const mapStateToProps = (state) => {
  const {
    login: {
      isLoggedIn,
    } = {},
  } = state;

  return {
    isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(actions.logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

