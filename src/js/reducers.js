import { combineReducers } from 'redux';
import LandingReducer from './containers/Landing/LandingReducer';
import GameReducer from './containers/Game/GameReducer';

const reducers = combineReducers({
  Landing: LandingReducer,
  Game: GameReducer
});

export default reducers;
