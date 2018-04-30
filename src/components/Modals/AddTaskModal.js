import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {changeAddModalState, addTask} from "../../actions";
import {connect} from "react-redux";

const styles = {
  textInput: {
    display: 'block',
    margin: 10,
    width: 320
  },
  dialog: {
    height: 'auto'
  },
  hintStyle: {
    top: 12
  }
};
class AddTaskModal extends React.Component {
  constructor() {
    super();
    this.state = {
      taskname: '',
      error: ''
    }
  }

  handleTaskNameChange = (e) => {
      this.setState({taskname: e.target.value});
  };

  handleClose = () => {
    const { changeAddModalState } = this.props;
    changeAddModalState(false);
  };

  handleSubmit = () => {
    const { addTask } = this.props,
          { taskname } = this.state,
          id = Math.floor(Math.random() * (1000 - 1)) + 1;
    if (!taskname) {
      this.setState({ error: 'This field is required' })
    } else {
      this.handleClose();
      this.setState({taskname: ''});
      addTask( { id: id, taskname: taskname } )
    }
  };

  render() {
    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          onClick={this.handleSubmit}
        />,
      ],
      { addTaskModal } = this.props,
      { taskname, error} = this.state;
    return (
      <Dialog
        title="Add task"
        actions={actions}
        modal={false}
        style={styles.dialog}
        open={addTaskModal}
        onRequestClose={this.handleClose}
      >
        <div>
          <TextField
            hintText="Task name"
            value={taskname}
            style={styles.textInput}
            onChange={this.handleTaskNameChange}
            errorText={error}
          />
        </div>
      </Dialog>
    );
  }
}

export default connect(
  state =>({
    addTaskModal: state.addTaskModal,
  }),
  { changeAddModalState, addTask }
)(AddTaskModal);