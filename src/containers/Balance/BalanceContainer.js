import { connect } from 'react-redux';
import Balance from './Balance';
import * as actions from './balance-actions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBalance: () => {
      dispatch(actions.fetchBalance());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Balance);

