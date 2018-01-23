import { connect } from 'react-redux';
import Win from './Win';

function MapStoreToProps(store) {
  return {
    word: store.Game.word
  };
}

export default connect(MapStoreToProps)(Win);
