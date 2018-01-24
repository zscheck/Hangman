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

// export function moderate(x) {
//   return {
//     type: 'MOVIE_INFO',
//     payload: movie
//   };
// }

// export function hard(x) {
//   return {
//     type: 'UPDATE_SEARCH',
//     payload: { searchTerm }
//   };
// }

