const USERS_NEW_GET_USER_REQUEST = 'USERS_NEW_GET_USER_REQUEST';
const USERS_NEW_GET_USER_SUCCESS = 'USERS_NEW_GET_USER_SUCCESS';
const USERS_NEW_TODO_REQUEST = 'USERS_NEW_TODO_REQUEST';
const USERS_NEW_TODO_SUCCESS = 'USERS_NEW_TODO_SUCCESS';

export default (state={
  user: null,
  getUserRequestPending: true
}, action) => {
  switch(action.type) {


    case USERS_NEW_GET_USER_REQUEST:
      state = {
        ...state,
        getUserRequestPending: true
      };
      break;


    case USERS_NEW_GET_USER_SUCCESS:
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
    type: USERS_NEW_GET_USER_REQUEST
  });

  apiTodoList.get(`/api/Users?userId=${userId}`).then((res) => {
    dispatch({
      type: USERS_NEW_GET_USER_SUCCESS,
      payload: res.data
    });
  });
};

export const newTodo = (userId, todo, onSuccess) => (dispatch, getState, {apiTodoList}) => {
  dispatch({
    type: USERS_NEW_TODO_REQUEST
  });
  
  apiTodoList.post(`api/Todos?userId=${userId}`, todo).then((res) => {
    dispatch({
      type: USERS_NEW_TODO_SUCCESS
    });
    onSuccess();
  });
};
