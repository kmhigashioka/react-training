import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Main from './features/main/components/main';
import UsersListContainer from './features/users/list/containers/list';
import UsersViewContainer from './features/users/view/containers/view';
import UsersNewContainer from './features/users/new/containers/new';

class AppRoute extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={UsersListContainer} />
          <Route path="users" component={UsersListContainer} />
          <Route path="users/:id" component={UsersViewContainer} />
          <Route path="users/:id/todos/new" component={UsersNewContainer} />
        </Route>
      </Router>
    );
  }

}

export default AppRoute;
