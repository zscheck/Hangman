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

export function signup() {
  return (dispatch) => {
    axios.post('/api/users/', { username: 'bibyz3467', email: 'bijzry@bob.com', password: 'asdfgh', totalPoints: 30 })
    .then((result) => {
      if (result.data.message) {
        alert(result.data.message);
      } else {
        console.log(11, result.data);
      }
    })
    .catch(err => console.log(err));
  };
}

export function findUsers() {
  return (dispatch) => {
    axios.get('/api/users/')
    .then((result) => {
      const users = result.data.slice();
      const allUsers = users.map(all => ({
        username: all.username,
        totalPoints: all.totalPoints
      }));
      allUsers.sort((a, b) => {
        return b.totalPoints - a.totalPoints;
      });
      if (allUsers.length > 5) {
        allUsers.splice(5);
      }
      dispatch({
        type: 'LEADERBOARD',
        payload: allUsers
      });
      // console.log(333, allUsers);
    })
    .catch(err => console.log(err));
  };
}

export function startGame() {
  return {
    type: 'START_GAME',
    payload: true
  };
}
