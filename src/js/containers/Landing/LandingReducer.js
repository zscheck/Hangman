const defaultState = {
  leaderBoard: [],
  userId: '',
  username: '',
  userPoints: 0
};

export default function LandingReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'LEADERBOARD': {
      return {
        ...state, 
        leaderBoard: payload
      };
    }

    case 'CURRENT_USER': {
      return {
        ...state,
        userId: payload.id,
        username: payload.username,
        userPoints: payload.totalPoints
      };
    }

    default: {
      return state;
    }
  }
}
