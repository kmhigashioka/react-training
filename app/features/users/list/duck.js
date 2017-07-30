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
    default: state;
  }
  return state;
};
