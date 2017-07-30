import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import Check from 'material-ui/svg-icons/navigation/check';
import { green500, blue500, grey400 } from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import Radium, { StyleRoot } from 'radium';
import moment from 'moment';

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
    },

    contentContainer: {

      emptyPlaceholderContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

        message: { margin: 0 }
      }
    }

  }
};

const types = {
  navigatable: 'navigatable',
};

@Radium
class User extends React.Component {

  tagAsDoneUndone(todo) {
    const { onTagAsDoneUndone } = this.props;

    onTagAsDoneUndone(todo);
  }

  removeTask(todo) {
    const { onRemoveTask } = this.props;

    onRemoveTask(todo);
  }

  render() {
    const { user, type } = this.props;

    return (
      <StyleRoot>
        <Paper style={styles.container}>
          <section style={styles.container.headerContainer}>
            { type == types.navigatable
              ? <Link to={`/users/${user.id}`}><h2 style={styles.container.headerContainer.header}>{user.name}</h2></Link>
              : <h2 style={styles.container.headerContainer.header}>{user.name}</h2>
            }
            <small style={styles.container.headerContainer.description}>{user.description}</small>
          </section>
          <Divider />
          <section style={styles.container.contentContainer}>
            <List>
              <Subheader>Todos</Subheader>

              { user.todos.length > 0
                ? null
                : <div style={styles.container.contentContainer.emptyPlaceholderContainer}>
                    
                      <ActionAssignment
                        style={{color: blue500, height: '40px', width: '40px'}} />
                      <p style={styles.container.contentContainer.emptyPlaceholderContainer.message}>
                        No more todos. Good job!
                      </p>
                    
                  </div>
              }
              
              { user.todos.map((t, i) => {

                  const avatar = t.done
                    ? <Avatar icon={<Check />} backgroundColor={green500} />
                    : <Avatar icon={<ActionAssignment />} backgroundColor={blue500} />;

                  const rightIconButton = (
                    <IconMenu iconButtonElement={
                        <IconButton
                          touch={true}
                          tooltip="Actions"
                          tooltipPosition="bottom-left">
                            <MoreVertIcon color={grey400} />
                        </IconButton>
                      }>
                      <MenuItem onTouchTap={this.tagAsDoneUndone.bind(this, t)}>Tag as {t.done ? 'undone' : 'done'}</MenuItem>
                      <MenuItem onTouchTap={this.removeTask.bind(this, t)}>Remove</MenuItem>
                    </IconMenu>
                  );

                  return (
                    <ListItem
                      leftAvatar={avatar}
                      primaryText={t.task}
                      secondaryText={`${moment(t.date).format('YYYY-MM-DD')} (${moment(t.date).fromNow()})`}
                      key={i}
                      disabled={true}
                      rightIconButton={type == types.navigatable ? null : rightIconButton}
                    />
                  );
                })
              }
            </List>
          </section>
        </Paper>
      </StyleRoot>
    );
  }

}

export default User;