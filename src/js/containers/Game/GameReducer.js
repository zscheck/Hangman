const defaultState = {
  count: 6,
  gameStarting: false,
  word: '',
  gameboard: [],
  letters: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'M', 'P', 'Q', 'V', 'W', 'X', 'Y', 'Z'],
  synonyms: [],
  hintUsed: false,
  usedLetters: []
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
        letters: payload.remaining,
        usedLetters: [...state.usedLetters, payload.gone]
      };
    }
    case 'WORD': {
      return {
        ...state,
        word: payload.word,
        gameboard: payload.word.replace(/[A-Z]/g, '__ ').split(' '),
        gameStarting: true,
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
        letters: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'M', 'P', 'Q', 'V', 'W', 'X', 'Y', 'Z'],
        count: 6,
        gameStarting: false,
        word: '',
        gameboard: [],
        synonyms: [],
        usedLetters: [],
        hintUsed: false
      };
    }

    case 'SYNONYMS': {
      return {
        ...state,
        synonyms: payload,
        hintUsed: true
      };
    }

    default: {
      return state;
    }
  }
}
