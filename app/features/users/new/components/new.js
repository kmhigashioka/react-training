import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '40px 0',

    userContainer: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '30vw',
      width: '100%',

      headerContainer: {
        padding: '20px',
      
        header: {
          margin: 0
        }
      },

      contentContainer: {
        padding: '0 20px 20px 20px',
        marginBottom: '20px'
      },

      footerContainer: {
        padding: '0 20px 20px 20px',

        button: {
          marginRight: '20px'
        }
      }

    }

  }
};

class New extends React.Component {

  cancel() {
    const { routeParams } = this.props;

    browserHistory.push(`/users/${routeParams.id}`);
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.container.userContainer}>
          <Paper>
            <section style={styles.container.userContainer.headerContainer}>
              <h2 style={styles.container.userContainer.headerContainer.header}>Add Todo</h2>
              <small>Add todo for Juan Dela Cruz.</small>
            </section>
            <section style={styles.container.userContainer.contentContainer}>
              <TextField
                name="task"
                floatingLabelText="Task"
                hintText="Compose a song, Play video game"
                fullWidth={true} />

              <DatePicker
                floatingLabelText="Date"
                hintText="Date"
                fullWidth={true}
                autoOk={true} />
            </section>
            <section style={styles.container.userContainer.footerContainer}>
              <RaisedButton
                label="ADD"
                primary={true}
                style={styles.container.userContainer.footerContainer.button} />

              <RaisedButton
                label="CANCEL"
                onTouchTap={this.cancel.bind(this)} />
            </section>
          </Paper>
        </div>
      </div>
    );
  }

}

export default New;
