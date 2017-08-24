import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import RedirectToLogin from './RedirectToLogin';

const mapDispatchToProps = (dispatch) => {
  return {
    onRedirectToLogin: () => {
      dispatch(push('/'));
    },
  };
};

export default connect(null, mapDispatchToProps)(RedirectToLogin);

