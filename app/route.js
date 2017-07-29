import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Main from './features/main/components/main';
import UsersList from './features/users/list/components/list';

class AppRoute extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <Route path="users" component={UsersList} />
        </Route>
      </Router>
    );
  }

}

export default AppRoute;
