import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { browserHistory, Link } from 'react-router';
import Paper from 'material-ui/Paper';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';

import User from '../../list/components/user';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '40px 0',

    userContainer: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '60vw',
      width: '100%',

      backContainer: {
        padding: '20px',
        marginBottom: '20px',

        back: {
          display: 'flex',
          alignItems: 'center'
        }
      },
    },

    fab: {
      position: 'fixed',
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

  addTodo() {
    browserHistory.push(`/users/${this.state.user.id}/todos/new`);
  }

  render() {
    return (
      <div style={styles.container}>
          <div style={styles.container.userContainer}>
            <Paper style={styles.container.userContainer.backContainer}>
              <Link to="/" style={styles.container.userContainer.backContainer.back}>
                <ChevronLeft />
                Back to Users
              </Link>
            </Paper>

            <User
              user={this.state.user}
              onRemoveTask={this.onRemoveTask.bind(this)}
              onTagAsDoneUndone={this.onTagAsDoneUndone.bind(this)} />
          </div>
          <FloatingActionButton
            style={styles.container.fab}
            onTouchTap={this.addTodo.bind(this)}>
            <ContentAdd />
          </FloatingActionButton>
      </div>
    );
  }

}

export default View;
