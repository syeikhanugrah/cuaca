import { combineReducers } from 'redux';
import currentReducer from './current';
import forecastReducer from './forecast';

export default combineReducers({
  current: currentReducer,
  forecast: forecastReducer
});
