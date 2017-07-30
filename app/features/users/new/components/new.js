import React from 'react';
import Paper from 'material-ui/Paper';
import { TextField, DatePicker } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import Radium, { StyleRoot } from 'radium';
import { reduxForm, Field } from 'redux-form';
import Snackbar from 'material-ui/Snackbar';

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

const required = value => (value ? undefined : '*Required')

@reduxForm({
  form: 'usersNewForm'
})
@Radium
class New extends React.Component {

  constructor() {
    super();

    this.state = {
      openSnackbar: false,
      snackbarMessage: ''
    };
  }

  cancel() {
    const { user } = this.props;

    browserHistory.push(`/users/${user.id}`);
  }

  onRequestCloseSnackbar() {
    this.setState({
      openSnackbar: false,
      snackbarMessage: ''
    });
  }

  onOpenSnackbar() {
    const { user } = this.props;

    this.setState({
      openSnackbar: true,
      snackbarMessage: `Todo successfully added for ${user.name}`
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user, handleSubmit } = this.props;

    handleSubmit();
    this.setState({
      openSnackbar: true,
      snackbarMessage: `Successfully added todo for ${user.name}.`
    })
  }

  render() {
    const { user, handleSubmit, reset } = this.props;

    return (
      <StyleRoot style={styles.container}>
        <div style={styles.container.userContainer}>
          <Paper>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <section style={styles.container.userContainer.headerContainer}>
                <h2 style={styles.container.userContainer.headerContainer.header}>Add Todo</h2>
                <small>Add todo for {user.name}.</small>
              </section>
              <section style={styles.container.userContainer.contentContainer}>
                <Field
                  component={TextField}
                  name="task"
                  floatingLabelText="Task"
                  hintText="Compose a song, Play video game"
                  fullWidth={true}
                  validate={required} />

                <Field
                  name="date"
                  component={DatePicker}
                  floatingLabelText="Date"
                  hintText="Date"
                  fullWidth={true}
                  format={null}
                  autoOk={true}
                  validate={required} />
              </section>
              <section style={styles.container.userContainer.footerContainer}>
                <RaisedButton
                  label="ADD"
                  primary={true}
                  type="submit"
                  style={styles.container.userContainer.footerContainer.button} />

                <RaisedButton
                  label="CLEAR"
                  secondary={true}
                  type="button"
                  onTouchTap={reset}
                  style={styles.container.userContainer.footerContainer.button} />

                <RaisedButton
                  label="CANCEL"
                  onTouchTap={this.cancel.bind(this)} />
              </section>
            </form>
          </Paper>
        </div>

        <Snackbar
          open={this.state.openSnackbar}
          message={this.state.snackbarMessage}
          autoHideDuration={4000}
          onRequestClose={this.onRequestCloseSnackbar.bind(this)} />
      </StyleRoot>
    );
  }

}

export default New;
