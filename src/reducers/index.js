import { combineReducers } from 'redux';
import appReducer from './appReducer';
import playerReducer from './playerReducer';

const rootReducer = combineReducers({
  appReducer,
  playerReducer,
});

export default rootReducer;
