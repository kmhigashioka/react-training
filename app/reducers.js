import { combineReducers } from 'redux';

import usersListReducer from './features/users/list/duck';
import usersViewReducer from './features/users/view/duck';

const reducers = combineReducers({
  usersListReducer,
  usersViewReducer
});

export default reducers;
