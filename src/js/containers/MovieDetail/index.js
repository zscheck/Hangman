import { connect } from 'react-redux';
import MovieDetail from './MovieDetail';

function MapStoreToProps(store) {
  return {
    movieInfo: store.movieSearch.movieInfo
  };
}

export default connect(MapStoreToProps)(MovieDetail);
