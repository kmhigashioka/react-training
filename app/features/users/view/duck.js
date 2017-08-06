const USERS_VIEW_GET_USER_REQUEST = 'USERS_VIEW_GET_USER_REQUEST';
const USERS_VIEW_GET_USER_SUCCESS = 'USERS_VIEW_GET_USER_SUCCESS';
const USERS_VIEW_REMOVE_TODO_REQUEST = 'USERS_VIEW_REMOVE_TODO_REQUEST';
const USERS_VIEW_REMOVE_TODO_SUCCESS = 'USERS_VIEW_REMOVE_TODO_SUCCESS';
const USERS_VIEW_EDIT_TODO_REQUEST = 'USERS_VIEW_EDIT_TODO_REQUEST';
const USERS_VIEW_EDIT_TODO_SUCCESS = 'USERS_VIEW_EDIT_TODO_SUCCESS';

export default (state={
  user: null,
  getUserRequestPending: true,
  removeTodoRequestPending: false
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

    case USERS_VIEW_REMOVE_TODO_REQUEST:
      state = {
        ...state,
        removeTodoRequestPending: true
      };
      break;

    case USERS_VIEW_REMOVE_TODO_SUCCESS:
      state = {
        ...state,
        removeTodoRequestPending: false,
        user: {
          ...state.user,
          todos: state.user.todos.filter(t => t.id != action.payload)
        }
      };
      break;

    case USERS_VIEW_EDIT_TODO_REQUEST:
      state = {
        ...state,
        editTodoRequestPending: true
      };
      break;

    case USERS_VIEW_EDIT_TODO_SUCCESS:
      state = {
        ...state,
        editTodoRequestPending: false,
        user: {
          ...state.user,
          todos: state.user.todos.map(t => t.id == action.payload.id ? action.payload : t)
        }
      };

    default: state;
  }
  return state;
};

export const getUser = (userId) => (dispatch, getState, {apiTodoList}) => {
  dispatch({
    type: USERS_VIEW_GET_USER_REQUEST
  });

  apiTodoList.get(`/api/Users?userId=${userId}`).then((res) => {
    const data = {
      ...res.data,
      todos: res.data.todos.map(t => {
        t.date = new Date(t.date);
        return t;
      })
    };
    dispatch({
      type: USERS_VIEW_GET_USER_SUCCESS,
      payload: data
    });
  });
}

export const tagAsDoneUndone = (userId, todo) => (dispatch, getState, {apiTodoList}) => {
  dispatch({
    type: USERS_VIEW_EDIT_TODO_REQUEST
  });

  todo.done = !todo.done;

  apiTodoList.put(`/api/Todos?userId=${userId}`, todo).then((res) => {
    dispatch({
      type: USERS_VIEW_EDIT_TODO_SUCCESS,
      payload: res.data
    });
  });
};

export const removeTodo = (userId, todoId, onSuccess) => (dispatch, getState, {apiTodoList}) => {
  dispatch({
    type: USERS_VIEW_REMOVE_TODO_REQUEST
  });

  apiTodoList.delete(`/api/Todos?userId=${userId}&todoId=${todoId}`).then((res) => {
    dispatch({
      type: USERS_VIEW_REMOVE_TODO_SUCCESS,
      payload: todoId
    });
    onSuccess();
  });
};

export const editTodo = (userId, todo, newTodo) => (dispatch, getState, {apiTodoList}) => {
  dispatch({
    type: USERS_VIEW_EDIT_TODO_REQUEST
  });

  apiTodoList.put(`/api/Todos?userId=${userId}`, newTodo).then((res) => {
    dispatch({
      type: USERS_VIEW_EDIT_TODO_SUCCESS,
      payload: res.data
    });
  });
};
