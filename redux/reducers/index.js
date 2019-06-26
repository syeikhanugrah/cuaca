import { combineReducers } from 'redux';
import currentReducer from './current';

export default combineReducers({
  current: currentReducer,
});
