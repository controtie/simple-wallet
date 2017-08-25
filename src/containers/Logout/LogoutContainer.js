import { connect } from 'react-redux';
import Logout from './Logout';
import * as actions from './logout-actions';

// We only want to display the logout button if User is currently logged in
// pulling isLoggedIn state is therefore necessary
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

// To update the status of isLoggedIn on successful logout, we'll need access to
// the store's 'dispatch' method too
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(actions.logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

