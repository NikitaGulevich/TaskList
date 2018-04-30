import * as types from '../constants';

export const addTask = payload => ({
  type: types.ADD_TASK,
  payload
});

export const deleteTask = id => ({
  type: types.DELETE_TASK,
  payload: id
});

export const changeSortField = payload => ({
  type: types.CHANGE_SORT_FIELD,
  payload
});

export const changeSortDirection = payload => ({
  type: types.CHANGE_SORT_DIRECTION,
  payload
});

export const changeAddModalState = payload => ({
  type: types.CHANGE_ADD_MODAL_STATE,
  payload
});