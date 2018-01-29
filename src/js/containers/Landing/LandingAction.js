import axios from 'axios';

export function beginner(x) {
  // console.log('Made it');
  return (dispatch) => {
    axios.get('/newword')
      .then((results) => {
        // console.log(results.data);
        let y = 0;
        if (x == 6) y = 10;
        if (x == 5) y = 20;
        if (x == 3) y = 40;
        dispatch({
          type: 'WORD',
          payload: {
            word: results.data.toUpperCase(),
            count: x,
            points: y
          }
        });
      });
  };
}

export function signup() {
  return (dispatch) => {
    axios.post('/api/users/', { username: 'zzzzz', email: 'zachssss@gmail.com', password: 'asdfgh' })
    .then((result) => {
      if (result.data.message) {
        alert(result.data.message);
      } else {
        // console.log(11, result.data);
        dispatch({
          type: 'CURRENT_USER',
          payload: result.data
        });
      }
    })
    .catch(err => console.log(err));
  };
}

export function login() {
  return (dispatch) => {
    axios.post('/api/users/login', { email: 'zachssss@gmail.com', password: 'asdfgh' })
    .then((result) => {
      console.log(2, result.data);
      if (result.data.message) {
        alert(result.data.message);
      } else {
        dispatch({
          type: 'CURRENT_USER',
          payload: {
            id: result.data._id,
            username: result.data.username,
            totalPoints: result.data.totalPoints
          }
        });
      }
    })
    .catch(err => console.log(err));
  };
}

export function findUsers() {
  return (dispatch) => {
    axios.get('/api/users/')
    .then((result) => {
      // console.log(result.data);
      const users = result.data.slice();
      const allUsers = users.map(all => ({
        username: all.username,
        totalPoints: all.totalPoints
      }));
      allUsers.sort((a, b) => b.totalPoints - a.totalPoints);
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
