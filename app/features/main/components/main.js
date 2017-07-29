import React from 'react';

import Header from './header';

class Main extends React.Component {
  
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }

}

export default Main;
