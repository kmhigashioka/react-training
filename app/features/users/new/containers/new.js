import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as duck from '../duck';
import New from '../components/new';

@connect(
  state => state.usersNewReducer,
  dispatch => ({actions: bindActionCreators(duck, dispatch)})
)
class UsersNewContainer extends React.Component {

  componentDidMount() {
    const { routeParams, actions } = this.props;
    const { getUser } = actions;

    getUser(routeParams.id);
  }

  render() {
    const { user, actions } = this.props;
    const { newTodo } = actions;

    if (!user) {
      return null;
    }

    return (
      <New
        user={user}
        newTodo={newTodo} />
    );
  }
  
}

export default UsersNewContainer;
