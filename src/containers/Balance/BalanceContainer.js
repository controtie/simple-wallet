import { connect } from 'react-redux';
import Balance from './Balance';

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Balance);

