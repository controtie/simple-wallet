import { isNotLoggedIn } from '../Login/login-actions';
import { isValidStatusCode } from '../../utils/api-helpers';

export const logout = () => (dispatch) => {

  fetch('api/v1/bitgo/logout')
    .then(isValidStatusCode)
    .then(() => {
      dispatch(isNotLoggedIn());
    })
    .catch((err) => {
      console.log('Logout Failed', err);
    });
};

