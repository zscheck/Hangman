const defaultState = {
  leaderBoard: []
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

    default: {
      return state;
    }
  }
}
