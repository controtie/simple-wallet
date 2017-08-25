import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import RedirectToLogin from './RedirectToLogin';

// Since we're using 'react-router-redux' to handle browser history transitions
// We'll need access to the store's dispatch method to redirect the User
// to Login page
const mapDispatchToProps = (dispatch) => {
  return {
    onRedirectToLogin: () => {
      dispatch(push('/'));
    },
  };
};

export default connect(null, mapDispatchToProps)(RedirectToLogin);

