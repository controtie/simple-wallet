import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import Send from './Send';
import * as actions from './send-actions';

const mapStateToProps = (state) => {
  const {
    send: {
      otp,
      password,
      amount,
      destinationAddress,
    } = {},
  } = state;
  return {
    otp,
    password,
    amount,
    destinationAddress,
  };
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
    onNavigateBack: () => {
      dispatch(goBack());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Send);

