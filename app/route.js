import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Main from './main.js';

class AppRoute extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main} />
      </Router>
    );
  }

}

export default AppRoute;
