import { connect } from 'react-redux';
import Landing from './Landing';

function MapStoreToProps(store) {
  return {
    word: store.Game.word
  };
}

export default connect(MapStoreToProps)(Landing);
