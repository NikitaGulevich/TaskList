import React, {Component} from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import TaskTableRow from './TaskTableRow';
import { deleteTask } from '../../actions';

class TaskTable extends Component {
  sortTasks = (arr, field, direction) => {
    if (direction === 'desc') {
      return arr.sort((a,b) => {
        if (isNaN(a[field]) || isNaN(b[field])) {
          if (a[field].toLowerCase() > b[field].toLowerCase()) return -1;
          if (a[field].toLowerCase() < b[field].toLowerCase()) return 1;
        } else {
          if (a[field] > b[field]) return -1;
          if (a[field] < b[field]) return 1;
        }
      })
    } else {
      return arr.sort((a,b) => {
        if (isNaN(a[field]) || isNaN(b[field])) {
          if (a[field].toLowerCase() > b[field].toLowerCase()) return 1;
          if (a[field].toLowerCase() < b[field].toLowerCase()) return -1;
        } else {
          if (a[field] > b[field]) return 1;
          if (a[field] < b[field]) return -1;
        }
      })
    }
  }
  render() {
    const { taskList, deleteTask, sortField, sortDirection } = this.props;

    if (!taskList || isEmpty(taskList)) return null;

    return (
      <Table selectable={ false }>
        <TableHeader displaySelectAll={ false }>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Task name</TableHeaderColumn>
            <TableHeaderColumn>Delete</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox = { false }>
          { this.sortTasks(taskList, sortField, sortDirection).map(task =>
              <TaskTableRow
                key={ task.id }
                id={ task.id }
                { ...{ task, deleteTask } }
              />
          )}
        </TableBody>
      </Table>
    )
  }
}

export default connect(
  state =>({
    taskList: state.taskList,
    sortField: state.sortField,
    sortDirection: state.sortDirection
  }),
  { deleteTask }
)(TaskTable);
