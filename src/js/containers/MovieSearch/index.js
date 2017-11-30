import { connect } from 'react-redux';
import MovieSearch from './MovieSearch';

function MapStoreToProps(store) {
  return {
    searchTerm: store.movieSearch.searchTerm,
    pastSearch: store.movieSearch.pastSearch,
    movieList: store.movieSearch.movieList,
    movieCache: store.movieSearch.movieCache
  };
}

export default connect(MapStoreToProps)(MovieSearch);
