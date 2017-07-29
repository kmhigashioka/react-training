import React from 'react';

import Header from './header';
import Content from './content';

class Main extends React.Component {
  
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        <Content />
        {children}
      </div>
    );
  }

}

export default Main;
