/**
 * Created by Administrator on 2017/2/23.
 */
import request from '../util/request';
import { URL } from '../util/constants';
import handleReducers from '../util/handleReducers';

const ADD_TODO_ING = 'ADD_TODO_ING';
const ADD_TODO_SUC = 'ADD_TODO_SUC';
const ADD_TODO_ERROR = 'ADD_TODO_ERROR';

const initialState = {
  result: '',
  requestStatus: '',
};

function todosIng(state = initialState) {
  return { ...state, requestStatus: 'pending', result: 'ing' };
}

function todosSuc(state = initialState, actionObj) {
  const result = actionObj.result.body.result;
  return { ...state, requestStatus: 'success', result };
}

function todosError(state = initialState) {
  return { ...state, requestStatus: 'error', result: 'error' };
}

const handleReduces = {
  [ADD_TODO_ING]: todosIng,
  [ADD_TODO_SUC]: todosSuc,
  [ADD_TODO_ERROR]: todosError,
};

export default handleReducers(initialState, handleReduces);

export function addTodo(action) {
  return {
    types: [ADD_TODO_ING, ADD_TODO_SUC, ADD_TODO_ERROR],
    promise: request.post(URL).send({ billTypeId: '' }).exec(),
    action,
  };
}

