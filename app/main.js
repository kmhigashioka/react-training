import React from 'react';

import Header from './header';
import Content from './content';
import Footer from './footer';

class Main extends React.Component {
  
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

export default Main;
