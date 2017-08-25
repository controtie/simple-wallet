import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SendComplete from './SendComplete';

// Pull relevant pieces from store and pass them as props to <SendComplete />
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

// Since we're using 'react-router-redux' to handle browser history transitions
// We'll need access to the store's dispatch method to redirect the User
// to the '/wallet' or '/send' pages
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

