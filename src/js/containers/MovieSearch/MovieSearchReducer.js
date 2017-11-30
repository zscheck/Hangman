import _ from 'lodash';

const defaultState = {
  movieList: [],
  pastSearch: [],
  movieInfo: {},
  movieCache: [],
  searchTerm: ''
};

export default function MovieSearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_MOVIE': {
      return {
        ...state,
        movieList: payload
      };
    }

    case 'MOVIE_INFO': {
      return {
        ...state,
        movieInfo: payload
      };
    }

    case 'SAVE_SEARCH': {
      return {
        ...state,
        searchTerm: '',
        pastSearch:
        _.uniqBy([payload, ...state.pastSearch], 'search')
      };
    }

    case 'SAVE_MOVIE': {
      return {
        ...state,
        movieCache:
        _.uniqBy([...state.movieCache, payload], 'imdbID')
      };
    }

    case 'UPDATE_SEARCH': {
      return {
        ...state,
        searchTerm: payload.searchTerm
      };
    }

    default: {
      return state;
    }
  }
}

