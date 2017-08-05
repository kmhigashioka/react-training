import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as duck from '../duck';
import Dialog from 'material-ui/Dialog';
import Edit from '../components/edit';

@connect(
  state => state.usersViewReducer,
  dispatch => ({actions: bindActionCreators(duck, dispatch)})
)
class UsersEditContainer extends React.Component {

  render() {
    const { open, handleClose, todo, actions, user } = this.props;
    const { editTodo } = actions;

    return (
      <Dialog
        title="Edit Todo"
        modal={true}
        open={open}>

        <Edit
          todo={todo}
          initialValues={todo}
          open={open}
          handleClose={handleClose}
          editTodo={editTodo}
          user={user} />
          
      </Dialog>
    );
  }
  
}

export default UsersEditContainer;
