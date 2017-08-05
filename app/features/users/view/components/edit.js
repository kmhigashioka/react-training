import React from 'react';
import { browserHistory, Link } from 'react-router';
import Radium, { StyleRoot } from 'radium';
import { reduxForm, Field } from 'redux-form';
import { TextField, DatePicker } from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';

const required = value => (value ? undefined : '*Required');
const styles = {
  actionContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
};

@reduxForm({
  form: 'usersEditForm'
})
@Radium
class Edit extends React.Component {

  onSuccessEdit({task, date}) {
    const { handleClose, editTodo, user, todo } = this.props;

    handleClose();
    editTodo(user.id, todo, {
      ...todo,
      task,
      date
    });
  }

  render() {
    const { handleClose, open, handleSubmit } = this.props;

    return (
      <StyleRoot>
        <form onSubmit={handleSubmit(this.onSuccessEdit.bind(this))}>
          <Field
            component={TextField}
            name="task"
            floatingLabelText="Task"
            hintText="Compose a song, Play video game"
            validate={required} />

          <Field
            name="date"
            component={DatePicker}
            floatingLabelText="Date"
            hintText="Date"
            format={null}
            autoOk={true}
            validate={required} />
        
          <section style={styles.actionContainer}>
            <FlatButton
              label="Cancel"
              primary={true}
              onTouchTap={handleClose}
            />

            <FlatButton
              label="Submit"
              primary={true}
              type="submit"
            />
          </section>
        </form>
      </StyleRoot>
    );
  }

}

export default Edit;
