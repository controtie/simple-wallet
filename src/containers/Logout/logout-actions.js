import { push } from 'react-router-redux';
import { isNotLoggedIn } from '../Login/login-actions';
import { isValidStatusCode } from '../../utils/api-helpers';

// Disconnect current User session from local node service
// Set client-side user logged in status to false
export const logout = () => (dispatch) => {

  fetch('api/v1/bitgo/logout')
    .then(isValidStatusCode)
    .then(() => {
      dispatch(isNotLoggedIn());
      dispatch(push('/'));
    })
    .catch((err) => {
      dispatch(isNotLoggedIn());
      dispatch(push('/'));
      console.log('Logout Failed', err);
    });
};

