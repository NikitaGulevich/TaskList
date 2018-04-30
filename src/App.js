import React, { Component } from 'react';
import {connect} from "react-redux";
import {changeAddModalState} from "./actions";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TaskTable from './components/Table/TaskTable';
import  AddTaskModal from './components/Modals/AddTaskModal';
import  SortFieldSelector from './components/Inputs/SortFieldSelector';
import  SortDirectionSelector from './components/Inputs/SortDirectionSelector';
import {lightGreen500} from "material-ui/styles/colors";
injectTapEventPlugin();

const addButtonStyle = { backgroundColor: lightGreen500 },
  style   = { marginTop: 10 };

class App extends Component {

  showAddModal = () => {
    const { changeAddModalState } = this.props;
    changeAddModalState(true);
  }

  render() {
    const addTaskModal = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <header className='page-header'>
            <div className="sort-panel fl">
              <p>Sort By</p>
              <SortFieldSelector />
              <SortDirectionSelector />
            </div>
          </header>
          <main className='page-main'>
            <TaskTable />
            <RaisedButton
              label="Add task"
              buttonStyle = { addButtonStyle }
              {...{style}}
              onClick={ this.showAddModal }
            />
          </main>
        {addTaskModal && <AddTaskModal />}
        </div>
      </MuiThemeProvider>
    )
  }
}
export default connect(
  state =>({
    addTaskModal: state.addTaskModal,
  }),
  { changeAddModalState }
)(App);
