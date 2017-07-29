import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Route from './route';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends React.Component {
  
  render() {
    return (
      <MuiThemeProvider>
        <Route />
      </MuiThemeProvider>
    );
  }

}

render(<App />, document.getElementById('root'));
