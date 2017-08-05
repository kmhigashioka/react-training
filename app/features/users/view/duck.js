const USERS_VIEW_GET_USER = 'USERS_VIEW_GET_USER';
const USERS_VIEW_TAG_AS_DONE_UNDONE = 'USERS_VIEW_TAG_AS_DONE_UNDONE';
const USERS_VIEW_REMOVE_TODO = 'USERS_VIEW_REMOVE_TODO';
const USERS_VIEW_EDIT_TODO = 'USERS_VIEW_EDIT_TODO';

export default (state={
  user: null
}, action) => {
  switch(action.type) {
    case USERS_VIEW_GET_USER:
      state = {
        ...state,
        user: action.payload
      };
      break;
    default: state;
  }
  return state;
};

export const getUser = (userId, users) => {
  const user = users.filter(t => t.id == userId)[0];

  return {
    type: USERS_VIEW_GET_USER,
    payload: user
  };
}

export const tagAsDoneUndone = (userId, todo) => {
  return {
    type: USERS_VIEW_TAG_AS_DONE_UNDONE,
    payload: {
      userId,
      todo
    }
  }
};

export const removeTodo = (userId, todo) => {
  return {
    type: USERS_VIEW_REMOVE_TODO,
    payload: {
      userId,
      todo
    }
  }
};

export const editTodo = (userId, todo, newTodo) => {
  return {
    type: USERS_VIEW_EDIT_TODO,
    payload: {
      userId,
      todo,
      newTodo
    }
  }
}
