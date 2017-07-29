import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import Check from 'material-ui/svg-icons/navigation/check';
import { green500, blue500 } from 'material-ui/styles/colors';

const styles = {
  container: {
    padding: '20px',
    marginBottom: '20px',

    headerContainer: {
      marginBottom: '10px',
      
      header: {
        margin: 0
      },

      description: {
        margin: 0
      }

    }

  }
};

class User extends React.Component {

  render() {
    const { user } = this.props;

    return (
      <Paper style={styles.container}>
        <section style={styles.container.headerContainer}>
          <h2 style={styles.container.headerContainer.header}>{user.name}</h2>
          <small style={styles.container.headerContainer.description}>{user.description}</small>
        </section>
        <Divider />
        <section>
          <List>
            <Subheader>Todos</Subheader>
            { user.todos.map((t, i) => {

                const avatar = t.done
                  ? <Avatar icon={<Check />} backgroundColor={green500} />
                  : <Avatar icon={<ActionAssignment />} backgroundColor={blue500} />;

                return (
                  <ListItem
                    leftAvatar={avatar}
                    primaryText={t.task}
                    secondaryText={t.date.toString()}
                    key={i}
                  />
                );
              })
            }
          </List>
        </section>
      </Paper>
    );
  }

}

export default User;