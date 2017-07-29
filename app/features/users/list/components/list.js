import React from 'react';
import TextField from 'material-ui/TextField';

import User from './user';

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

      search: {
        marginBottom: '20px'
      }
    }
  }
};

class UsersList extends React.Component {

  constructor() {
    super();

    this.state = {
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
    };
  }
  
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.container.usersContainer}>
          <TextField
            name="search"
            floatingLabelText="Search Todo"
            hintText="Wash some dishes, Write a blog"
            fullWidth={true}
            style={styles.container.usersContainer.search} />

          { this.state.users.map((t, i) => {
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
