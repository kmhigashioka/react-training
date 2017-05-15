import React from 'react';

class Todo extends React.Component {
  
  render() {
    return (
      <div>
        <label>Task :</label>
        <p>{this.props.todo.task}</p>
      </div>
    );
  }
  
}

export default Todo;
