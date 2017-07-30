const USERS_VIEW_TAG_AS_DONE_UNDONE = 'USERS_VIEW_TAG_AS_DONE_UNDONE';
const USERS_VIEW_REMOVE_TODO = 'USERS_VIEW_REMOVE_TODO';
const USERS_NEW_TODO = 'USERS_NEW_TODO';

export default (state={
  users: [
    { 
      id: 1,
      name: 'Juan Dela Cruz',
      description: 'Tall, dark and handsome.',
      todos: [
        { task: 'Write code.', done: true, date: new Date('7/29/2017') },
        { task: 'Merge pull request', done: false, date: new Date('7/29/2017') },
        { task: 'Raise an issue', done: false, date: new Date('7/30/2017') }
      ]
    },
    { 
      id: 2,
      name: 'April Santos',
      description: 'Strong and independent woman.',
      todos: [
        { task: 'Eat some fries', done: true, date: new Date('7/29/2017') },
        { task: 'Study React', done: false, date: new Date('7/30/2017') }
      ]
    }
  ]
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


    case USERS_NEW_TODO:
      state = {
        ...state,
        users: state.users.map(t => {
          if (t.id == action.payload.userId) {
            t.todos = t.todos.concat(action.payload.todo);
          }
          return t;
        })
      }
      break;


    default: state;
  }
  return state;
};
