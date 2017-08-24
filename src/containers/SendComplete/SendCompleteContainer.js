import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SendComplete from './SendComplete';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRedirectToWallet: () => {
      dispatch(push('/wallets'));
    },
  };
};

export default connect(null, mapDispatchToProps)(SendComplete);

