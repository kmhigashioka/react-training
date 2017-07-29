import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import User from '../../list/components/user';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',

    userContainer: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '60vw',
      width: '100%',

      search: {
        marginBottom: '20px'
      }
    },

    fab: {
      position: 'absolute',
      bottom: '40px',
      right: '40px'
    }

  }
};

class View extends React.Component {

  constructor() {
    super();

    this.state = {
      user: { 
        id: 1,
        name: 'Juan Dela Cruz',
        description: 'Tall, dark and handsome.',
        todos: [
          { task: 'Write code.', done: true, date: new Date('7/29/2017') },
          { task: 'Merge pull request', done: false, date: new Date('7/29/2017') },
          { task: 'Raise an issue', done: false, date: new Date('7/30/2017') }
        ]
      }
    }
  }

  onTagAsDoneUndone(todo) {
    this.setState({
      user: {
        ...this.state.user,
        todos: this.state.user.todos.map(t => {
          if (t == todo) t.done = !t.done;

          return t;
        })
      }
    });
  }

  onRemoveTask(todo) {
    this.setState({
      user: {
        ...this.state.user,
        todos: this.state.user.todos.filter(t => {
          if (t == todo)
            return null;

          return t;
        })
      }
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.container.userContainer}>
          <User
            user={this.state.user}
            onRemoveTask={this.onRemoveTask.bind(this)}
            onTagAsDoneUndone={this.onTagAsDoneUndone.bind(this)} />
        </div>
        <FloatingActionButton style={styles.container.fab}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }

}

export default View;