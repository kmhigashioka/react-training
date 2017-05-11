import React from 'react';
import {render} from 'react-dom';

import Header from './header';
import Content from './content';
import Footer from './footer';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }

}

render(<App />, document.getElementById('root'));
