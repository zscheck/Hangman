import { connect } from 'react-redux';
import Game from './Game';

function MapStoreToProps(store) {
  return {
    word: store.Game.word,
    gameboard: store.Game.gameboard,
    count: store.Game.count,
    letters: store.Game.letters,
    gameStarting: store.Game.gameStarting
  };
}

export default connect(MapStoreToProps)(Game);
