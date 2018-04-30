import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const baseButtonWrapperStyle = {
    marginLeft: 5,
    marginRight: 5,
    minWidth: 60,
    height: 28,
    width: 90
  },
  baseButtonStyle = {
    fontSize: 12
  };

export default class TaskTableRow extends Component {

  removeTask = () => {
    const { id, deleteTask } = this.props;
    deleteTask({ id });
  }

  render() {
    const { task } = this.props;
    return (
      <TableRow>
        <TableRowColumn>
          {task.id}
        </TableRowColumn>
        <TableRowColumn>
          {task.taskname}
        </TableRowColumn>
        <TableRowColumn>
          <RaisedButton
            label="Delete"
            secondary={ true }
            style={ baseButtonWrapperStyle }
            buttonStyle={ baseButtonStyle }
            onClick={ this.removeTask }
          />
        </TableRowColumn>
      </TableRow>
    )
  }
}
