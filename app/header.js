import React from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends React.Component {
  
  render() {
    return (
      <AppBar title="Todo List"
              showMenuIconButton={false}
              />
    );
  }

}

export default Header;
