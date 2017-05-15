import React from 'react';

class Todo extends React.Component {
  
  render() {
    return (
      <div>
        <label>Task :</label>
        <p>{this.props.todo.task}</p>
        <button type="button" onClick={this.toggleDone.bind(this)}>Set to {this.props.todo.done ? 'Undone' : 'Done'}</button>
      </div>
    );
  }

  toggleDone() {
    this.props.todo.done = !this.props.todo.done;
  }
  
}

export default Todo;
