import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import usersListReducer from './features/users/list/duck';
import usersNewReducer from './features/users/new/duck';
import usersViewReducer from './features/users/view/duck';

const reducers = combineReducers({
  usersListReducer,
  usersNewReducer,
  usersViewReducer,
  
  form: formReducer
});

export default reducers;
