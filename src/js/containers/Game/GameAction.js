import axios from 'axios';

export function newCount(x) {
  return {
    type: 'COUNT',
    payload: x - 1
  };
}

export function removeLetter(letters, index) {
  const used = letters.splice(index, 1);
  return {
    type: 'REMOVE_LETTER',
    payload: {
      remaining: letters,
      gone: used
    }
  };
}

export function updateGameboard(gameboard, word, letter) {
  const length = gameboard.length;
  const board = gameboard.slice();
//   board.splice(-1);
  for (let i = 0; i < length; i++) {
    if (word[i] === letter) {
      board[i] = letter;
    }
  }
  return {
    type: 'UPDATE_GAMEBOARD',
    payload: board
  };
}

export function getSynonyms(word, points) {
  // console.log('Made it');
  return (dispatch) => {
    axios.get(`/synonyms/${word}`)
      .then((results) => {
        // console.log(results.data);
        let synonyms = results.data.slice();
        if (synonyms.length > 2) {
          synonyms.splice(2);
        }
        dispatch({
          type: 'SYNONYMS',
          payload: {
            hints: synonyms,
            points: points / 2
          }
        });
      });
  };
}
