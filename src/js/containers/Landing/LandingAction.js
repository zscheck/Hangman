import axios from 'axios';

export function beginner(x) {
  // console.log('Made it');
  return (dispatch) => {
    axios.get('/newword')
      .then((results) => {
        // console.log(results.data);
        dispatch({
          type: 'WORD',
          payload: {
            word: results.data.toUpperCase(),
            count: x
          }
        });
      });
  };
}

export function startGame() {
  return {
    type: 'START_GAME',
    payload: true
  };
}
