const defaultState = {
  count: 1,
  gameStarting: false,
  word: '',
  gameboard: [],
  letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};

export default function GameReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'COUNT': {
      return {
        ...state,
        count: payload
      };
    }

    case 'REMOVE_LETTER': {
      return {
        ...state,
        letters: payload
      };
    }
    case 'WORD': {
      return {
        ...state,
        word: payload.word,
        gameboard: payload.word.replace(/[A-Z]/g, '__ ').split(' '),
        count: payload.count
      };
    }

    case 'UPDATE_GAMEBOARD': {
      return {
        ...state,
        gameboard: payload
      };
    }

    case 'START_GAME': {
      return {
        ...state,
        gameStarting: payload
      };
    }

    case 'BACK_HOME': {
      return {
        letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        count: 1,
        gameStarting: false,
        word: '',
        gameboard: []
      };
    }

    default: {
      return state;
    }
  }
}
