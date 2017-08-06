const USERS_VIEW_GET_USER_REQUEST = 'USERS_VIEW_GET_USER_REQUEST';
const USERS_VIEW_GET_USER_SUCCESS = 'USERS_VIEW_GET_USER_SUCCESS';
const USERS_VIEW_TAG_AS_DONE_UNDONE = 'USERS_VIEW_TAG_AS_DONE_UNDONE';
const USERS_VIEW_REMOVE_TODO = 'USERS_VIEW_REMOVE_TODO';
const USERS_VIEW_EDIT_TODO = 'USERS_VIEW_EDIT_TODO';

export default (state={
  user: null,
  getUserRequestPending: true
}, action) => {
  switch(action.type) {
    case USERS_VIEW_GET_USER_REQUEST:
      state = {
        ...state,
        getUserRequestPending: true
      };
      break;

    case USERS_VIEW_GET_USER_SUCCESS:
      state = {
        ...state,
        user: action.payload,
        getUserRequestPending: false
      };
      break;

    default: state;
  }
  return state;
};

export const getUser = (userId) => (dispatch, getState, {apiTodoList}) => {
  dispatch({
    type: USERS_VIEW_GET_USER_REQUEST
  });

  apiTodoList.get(`/api/Users?userId=${userId}`).then((res) => {
    dispatch({
      type: USERS_VIEW_GET_USER_SUCCESS,
      payload: res.data
    });
  });
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
};
