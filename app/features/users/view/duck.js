const USERS_VIEW_GET_USER = 'USERS_VIEW_GET_USER';

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
