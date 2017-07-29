import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import User from '../../../../shared-components/user/components/user';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',

    usersContainer: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '60vw',
      width: '100%',

      searchContainer: {
        padding: '0 20px',
        marginBottom: '20px',

        search: {
          marginBottom: '20px'
        }
      }
    }
  }
};

class UsersList extends React.Component {

  constructor() {
    super();

    const users = [
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
    ];

    this.state = {
      users: users,
      filteredUsers: users
    };
  }

  filterUserWithTask(event) {
    if (event.target.value == '') {
      this.setState({
        filteredUsers: this.state.users
      });
      return;
    }

    this.setState({
      filteredUsers: this.state.users.filter(t => {
        return t.todos.some(u => {
          return u.task.indexOf(event.target.value) >= 0;
        });
      })
    });
  }
  
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.container.usersContainer}>
          <Paper style={styles.container.usersContainer.searchContainer}>
            <TextField
              name="search"
              floatingLabelText="Search Todo"
              hintText="Wash some dishes, Write a blog"
              fullWidth={true}
              style={styles.container.usersContainer.searchContainer.search}
              onChange={this.filterUserWithTask.bind(this)} />
          </Paper>

          { this.state.filteredUsers.map((t, i) => {
            return (
                <User 
                  key={i} 
                  user={t} 
                  type="navigatable" />
              );
            })
          }
        </div>
      </div>
    );
  }

}

export default UsersList;
