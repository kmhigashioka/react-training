import React from 'react';
import Todo from './todo';

class Content extends React.Component {

  constructor() {
    super();

    this.state = {
      todos: [
        { task: 'Write code.', done: true },
        { task: 'Merge pull request', done: false },
        { task: 'Raise an issue', done: false }
      ]
    };
  }

  changeTask(oldTodo, newTask) {
    const newTodos = this.state.todos.map(t => {
      if (t == oldTodo) {
        t.task = newTask;
      }

      return t;
    });

    this.setState({
      todos: newTodos
    });
  }
  
  render() {
    return (
      <div>
        { 
          this.state.todos
            //.filter(t => {
            //  return t.done == true;
            //})
            .map((t, index) => {
              return <Todo key={index} todo={t} changeTask={this.changeTask.bind(this)} />;
            })
        }
      </div>
    );
  }

}

export default Content;
