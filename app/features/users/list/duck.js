const USERS_VIEW_TAG_AS_DONE_UNDONE = 'USERS_VIEW_TAG_AS_DONE_UNDONE';
const USERS_VIEW_REMOVE_TODO = 'USERS_VIEW_REMOVE_TODO';
const USERS_VIEW_EDIT_TODO = 'USERS_VIEW_EDIT_TODO';
const USERS_LIST_GET_USERS_REQUEST = 'USERS_LIST_GET_USERS_REQUEST';
const USERS_LIST_GET_USERS_SUCCESS = 'USERS_LIST_GET_USERS_SUCCESS';

export default (state={
  users: [],
  getUsersRequestPending: true
}, action) => {
  switch(action.type) {


    case USERS_VIEW_TAG_AS_DONE_UNDONE:
      state = {
        ...state,
        users: state.users.map(t => {
          if (t.id == action.payload.userId) {
            var todoIndex = t.todos.indexOf(action.payload.todo);
            t.todos = t.todos.map((u, i) => {
              if (i == todoIndex) {
                u.done = !u.done;
              }
              return u;
            });
          }
          return t;
        })
      }
      break;

    
    case USERS_VIEW_REMOVE_TODO:
      state = {
        ...state,
        users: state.users.map(t => {
          if (t.id == action.payload.userId) {
            var todoIndex = t.todos.indexOf(action.payload.todo);
            t.todos = t.todos.filter((u, i) => todoIndex != i);
          }
          return t;
        })
      }
      break;


    case USERS_VIEW_EDIT_TODO:
      state = {
        ...state,
        users: state.users.map(t => {
          if (t.id == action.payload.userId) {
            t.todos = t.todos.map(u => {
              return u == action.payload.todo
                ? action.payload.newTodo
                : u;
            });
          }
          return t;
        })
      }
      break;


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
