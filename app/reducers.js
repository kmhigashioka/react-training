import { combineReducers } from 'redux';

import usersListReducer from './features/users/list/duck';

const reducers = combineReducers({
  usersListReducer
});

export default reducers;
