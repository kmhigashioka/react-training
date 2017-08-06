const USERS_LIST_GET_USERS_REQUEST = 'USERS_LIST_GET_USERS_REQUEST';
const USERS_LIST_GET_USERS_SUCCESS = 'USERS_LIST_GET_USERS_SUCCESS';

export default (state={
  users: [],
  getUsersRequestPending: true
}, action) => {
  switch(action.type) {


    case USERS_LIST_GET_USERS_REQUEST:
      state = {
        ...state,
        getUsersRequestPending: true
      }
      break;


    case USERS_LIST_GET_USERS_SUCCESS:
      state = {
        ...state,
        users: action.payload,
        getUsersRequestPending: false
      }
      break;


    default: state;
  }
  return state;
};

export const getUsers = () => (dispatch, getState, {apiTodoList}) => {
  dispatch({
    type: USERS_LIST_GET_USERS_REQUEST
  });

  apiTodoList.get('/api/users').then((res) => {
    dispatch({
      type: USERS_LIST_GET_USERS_SUCCESS,
      payload: res.data
    });
  });
};
