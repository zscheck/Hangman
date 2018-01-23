import { connect } from 'react-redux';
import Lose from './Lose';

function MapStoreToProps(store) {
  return {
    word: store.Game.word
  };
}

export default connect(MapStoreToProps)(Lose);
