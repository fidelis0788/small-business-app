import { connect } from 'react-redux';
import Navigation from '../Components/navigation';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(Navigation);