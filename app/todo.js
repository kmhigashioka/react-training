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
        <input
          defaultValue={this.props.todo.task} 
          onChange={this.handleChangeTask.bind(this)}
          ref="task" />
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

  handleChangeTask() {
    this.props.changeTask(this.props.todo, this.refs.task.value);
  }
  
}

Todo.propTypes = {
  todo: PropTypes.object,
  changeTask: PropTypes.func
};

export default Todo;
