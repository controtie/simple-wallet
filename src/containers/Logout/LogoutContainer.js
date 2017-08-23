import { connect } from 'react-redux';
import Logout from './Logout';

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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

