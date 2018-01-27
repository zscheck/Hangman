import { connect } from 'react-redux';
import Game from './Game';

function MapStoreToProps(store) {
  return {
    word: store.Game.word,
    gameboard: store.Game.gameboard,
    count: store.Game.count,
    letters: store.Game.letters,
    hintUsed: store.Game.hintUsed,
    synonyms: store.Game.synonyms,
    gamePoints: store.Game.gamePoints,
    usedLetters: store.Game.usedLetters,
    gameStarting: store.Game.gameStarting
  };
}

export default connect(MapStoreToProps)(Game);
