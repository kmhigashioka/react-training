const USERS_NEW_GET_USER = 'USERS_NEW_GET_USER';
const USERS_NEW_TODO = 'USERS_NEW_TODO';

export default (state={
  user: null
}, action) => {
  switch(action.type) {


    case USERS_NEW_GET_USER:
      state = {
        ...state,
        user: action.payload
      };
      break;


    default: state;
  }
  return state;
};

export const getUser = (userId) => (dispatch, getState) => {
  const { usersListReducer: { users } } = getState();
  const user = users.filter(t => t.id == userId)[0];

  dispatch({
    type: USERS_NEW_GET_USER,
    payload: user
  });
};

export const newTodo = (userId, todo) => {
  return {
    type: USERS_NEW_TODO,
    payload: {
      userId,
      todo
    }
  };
};
