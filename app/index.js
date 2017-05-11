import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  
  render() {
    return (
      <div>Hello react!</div>
    );
  }

}

render(<App />, document.getElementById('root'));
