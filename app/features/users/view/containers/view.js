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
    const { users, routeParams, actions } = this.props;
    const { getUser } = actions;

    getUser(routeParams.id, users);
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <View user={user} />
    );
  }
  
}

export default UsersViewContainer;
