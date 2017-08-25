import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SendComplete from './SendComplete';

const mapStateToProps = (state) => {
  const {
    login: {
      isLoggedIn,
    } = {},
    send: {
      amount,
      destinationAddress,
      sendCoins: {
        success,
      } = {},
    } = {},
  } = state;

  return {
    isLoggedIn,
    amount,
    destinationAddress,
    success,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRedirectToWallet: () => {
      dispatch(push('/wallets'));
    },
    onRedirectToSend: () => {
      dispatch(push('./send'));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SendComplete);

