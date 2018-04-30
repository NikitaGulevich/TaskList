import * as types from '../constants';
import { merge, remove } from 'lodash';

const initialState = {
  taskList: [
    {
      id: 1,
      taskname: 'First task'
    },
    {
      id: 2,
      taskname: 'Second task'
    },
    {
      id: 3,
      taskname: 'Third task'
    }
  ],
  addTaskModal: false,
  sortField: 'id',
  sortDirection: 'desc',
};

export default (state = initialState, action) =>{
  switch (action.type) {

    case types.ADD_TASK:
      const slicedAddState = merge({}, state);
      slicedAddState.taskList.push(action.payload);
      return slicedAddState;

    case types.DELETE_TASK:
      const slicedState = merge({}, state);
      remove (slicedState.taskList, task => task.id === action.payload.id);
      return slicedState;

    case types.CHANGE_SORT_FIELD:
      const slicedSortFieldState = merge({}, state);
      slicedSortFieldState.sortField = action.payload;
      return slicedSortFieldState;

    case types.CHANGE_SORT_DIRECTION:
      const slicedSortDirectionState = merge({}, state);
      slicedSortDirectionState.sortDirection = action.payload;
      return slicedSortDirectionState;

      case types.CHANGE_ADD_MODAL_STATE:
      const slicedAuthModalState = merge({}, state);
      slicedAuthModalState.addTaskModal = action.payload;
      return slicedAuthModalState;

    default:
      return state;
  }
}