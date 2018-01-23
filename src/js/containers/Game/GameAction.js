export function startGame() {
  return {
    type: 'START_GAME',
    payload: true
  };
}

export function newCount(x) {
  return {
    type: 'COUNT',
    payload: x - 1
  };
}

export function removeLetter(letters, index) {
  letters.splice(index, 1);
  return {
    type: 'REMOVE_LETTER',
    payload: letters
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
