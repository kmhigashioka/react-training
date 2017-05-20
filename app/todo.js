import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {

  constructor(props) {
    super();

    this.state = {
      done: props.todo.done
    };
  }
  
  render() {
    return (
      <div>
        <label>Task :</label>
        <p>{this.props.todo.task}</p>
        <button type="button" 
                onClick={this.toggleDone.bind(this)}>
          Set to {this.state.done ? 'Undone' : 'Done'}
        </button>
      </div>
    );
  }

  toggleDone() {
    this.setState({
      done: !this.state.done
    });
  }
  
}

Todo.propTypes = {
  todo: PropTypes.object
};

export default Todo;
