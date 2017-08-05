import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { browserHistory, Link } from 'react-router';
import Paper from 'material-ui/Paper';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import Radium, { StyleRoot } from 'radium';

import User from '../../../../shared-components/user/components/user';
import Edit from '../containers/edit';
import AlertDialog from '../../../../shared-components/alert-dialog/components/alert-dialog';

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

@Radium
class View extends React.Component {

  constructor() {
    super();

    this.state = {
      openEdit: false,
      selectedTodo: null,
      openDelete: false
    };
  }

  onTagAsDoneUndone(todo) {
    const { tagAsDoneUndone, user } = this.props;
    tagAsDoneUndone(user.id, todo);
  }

  onRemoveTask(todo) {
    this.setState({
      openDelete: true,
      selectedTodo: todo
    });
  }

  addTodo() {
    const { user } = this.props;

    browserHistory.push(`/users/${user.id}/todos/new`);
  }

  onEditTodo(todo) {
    this.setState({
      openEdit: true,
      selectedTodo: todo
    });
  }

  onCloseEditTodo() {
    this.setState({
      openEdit: false, 
      selectedTodo: null
    });
  }

  onCloseDeleteTodo() {
    this.setState({
      openDelete: false,
      selectedTodo: null
    });
  }

  onHandleYesRemoveTask() {
    const { removeTodo, user } = this.props;
    removeTodo(user.id, this.state.selectedTodo);
    this.onCloseDeleteTodo();
  }

  render() {
    const { user } = this.props;

    return (
      <StyleRoot style={styles.container}>
          <div style={styles.container.userContainer}>
            <Paper style={styles.container.userContainer.backContainer}>
              <Link to="/" style={styles.container.userContainer.backContainer.back}>
                <ChevronLeft />
                Back to Users
              </Link>
            </Paper>

            <User
              user={user}
              onRemoveTask={this.onRemoveTask.bind(this)}
              onTagAsDoneUndone={this.onTagAsDoneUndone.bind(this)}
              onEditTodo={this.onEditTodo.bind(this)} />
          </div>
          <Edit
            open={this.state.openEdit}
            handleClose={this.onCloseEditTodo.bind(this)}
            todo={this.state.selectedTodo}
            user={user} />
          <AlertDialog
            title="Remove Task"
            open={this.state.openDelete}
            handleClose={this.onCloseDeleteTodo.bind(this)}
            handleYes={this.onHandleYesRemoveTask.bind(this)}
            message="This action is cannot be undone. Do you want to proceed?" />
          <FloatingActionButton
            style={styles.container.fab}
            onTouchTap={this.addTodo.bind(this)}>
            <ContentAdd />
          </FloatingActionButton>
      </StyleRoot>
    );
  }

}

export default View;
