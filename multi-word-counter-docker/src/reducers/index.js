import { combineReducers } from 'redux';
import counters from './counters';
import mode from './mode';

const rootReducer = combineReducers({
  counters,
  mode,
});

export default rootReducer;
