import { combineReducers } from 'redux';

import topicsReducer from './topics.reducer';

export default combineReducers ({
  topics: topicsReducer
});