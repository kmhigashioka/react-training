import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as duck from '../duck';
import View from '../components/view';

@connect(
  state => ({...state.usersViewReducer, users: state.usersListReducer.users}),
  dispatch => ({actions: bindActionCreators(duck, dispatch)})
)
class UsersViewContainer extends React.Component {

  componentDidMount() {
    const { routeParams, actions } = this.props;
    const { getUser } = actions;

    getUser(routeParams.id);
  }

  render() {
    const { user, actions, getUserRequestPending } = this.props;
    const { tagAsDoneUndone, removeTodo } = actions;

    if (getUserRequestPending) {
      return null;
    }

    return (
      <View
        user={user}
        tagAsDoneUndone={tagAsDoneUndone}
        removeTodo={removeTodo} />
    );
  }
  
}

export default UsersViewContainer;
