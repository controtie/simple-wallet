import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Send from './Send';
import sendSelector from '../../selectors/send-selector';
import * as actions from './send-actions';

const mapStateToProps = (state) => {
  return sendSelector(state);
};

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

