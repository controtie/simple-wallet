import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Send from './Send';
import sendSelector from '../../selectors/send-selector';
import * as actions from './send-actions';

const mapStateToProps = (state) => {
  // since some of the values we're pulling are computed
  // (filtering through state.balance.wallets on wallet.id to find
  // the currently selected wallet)
  // it makes sense to move the mapping to a 'reselect' selector to memoize it
  return sendSelector(state);
};

// Supply actions defined in send-actions.js with 'dispatch'
// to allow them to update the store.
// Pass these supplemented actions to <Send />
const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateAmountField: (event) => {
      dispatch(actions.updateAmountField(event.target.value));
    },
    onUpdatePasswordField: (event) => {
      dispatch(actions.updatePasswordField(event.target.value));
    },
    onUpdateOTPField: (event) => {
      dispatch(actions.updateOTPField(event.target.value));
    },
    onUpdateDestinationAddressField: (event) => {
      dispatch(actions.updateDestinationAddressField(event.target.value));
    },
    onSendCoins: () => {
      dispatch(actions.sendCoins());
    },
    onRedirectToWallet: () => {
      dispatch(push('/wallets'));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Send);

