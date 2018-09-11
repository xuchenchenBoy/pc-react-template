import { combineReducers } from 'redux-immutable';
import * as tasks from './tasks'
import router from './router'

export default combineReducers({
  router,
  tasks: combineReducers(tasks),
})
