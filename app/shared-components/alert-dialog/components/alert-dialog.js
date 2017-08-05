import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class AlertDialog extends React.Component {
  
  render() {
    const { open, title, message, handleClose, handleYes } = this.props;
    const actions = [
      <FlatButton
        label="No"
        primary={true}
        onTouchTap={handleClose}
      />,
      <FlatButton
        label="Yes"
        primary={true}
        onTouchTap={handleYes}
      />
    ];

    return (
      <Dialog
        open={open}
        title={title}
        actions={actions}
        handleClose={handleClose}>
        {message}
      </Dialog>
    )
  }

}

export default AlertDialog;
