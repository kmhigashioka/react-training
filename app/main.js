import React from 'react';

import Header from './header';
import Content from './content';

class Main extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }

}

export default Main;
