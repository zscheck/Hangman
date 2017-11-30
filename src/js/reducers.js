import { combineReducers } from 'redux';
import MovieSearchReducer from './containers/MovieSearch/MovieSearchReducer';

const reducers = combineReducers({
  movieSearch: MovieSearchReducer
});

export default reducers;
