import { connect } from 'react-redux';
import Listings from '../Components/Listings';
import { deleteListing } from '../Redux/Actions';

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteListing: (id) => dispatch(deleteListing(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
