import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';

import Route from './route';
import store from './store';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends React.Component {
  
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Route />
        </Provider>
      </MuiThemeProvider>
    );
  }

}

render(<App />, document.getElementById('root'));
